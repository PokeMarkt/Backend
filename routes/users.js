'use strict'

const config = require('../config')

const bcrypt = require('bcrypt')

const checker = require('../services/checker')

module.exports = function(router, db) {

    router.get('/users', (req, res) => {
        db.user.findAll()
            .then(result => {
                res.json(result)
            })
    })

    router.get('/user/:id', (req, res) => {
        db.user.findById(req.params.id)
            .then(result => {
                res.json(result)
            })
    })

    router.post('/login', function(req, resp){

        let userToLogin = req.body

        if (userToLogin.nick) {

            db.user.findByNick(userToLogin)
                .then(result => {
                    if (result == null ) {
                        resp.json({
                            auth: false
                        })
                    } else {

                        bcrypt.compare(userToLogin.password, result.password, (err, res) => {

                            if (err) {
                                resp.json({
                                    auth:false
                                })
                                return;
                            }

                            if (res) {
                                req.session.user = result
                                resp.json({
                                    auth: true
                                })
                                return;
                            }

                            resp.json({
                                auth: false
                            })
                        })
                    }
                })
                .catch(err => {
                    console.log('ERROR: ' + err)
                })

        } else if (userToLogin.mail) {
            db.user.findByMail(userToLogin)
                .then(result => {
                    if (result == null ) {
                        resp.json({
                            auth: false
                        })
                    } else {
                        bcrypt.compare(userToLogin.password, result.password, (err, res) => {
                            
                            if (err) {
                                resp.json({
                                    auth:false
                                })
                                return;
                            }

                            if (res) {
                                req.session.user = result
                                resp.json({
                                    auth: true
                                })
                                
                                return;
                            }

                            resp.json({
                                auth: false
                            })
                        })
                    }
                })
                .catch(err => {
                    console.log('ERROR: ' + err)
                })
        } else {
            resp.json({
                auth: false
            })
            req.session.destroy();
        }
    })

    router.post('/user', (req, res) => {
        
        let user = req.body

        db.user.create(user)
            .then(result => {
                console.log(result)
                res.json({
                    done: true
                })
            })
    })

    router.post('/register', (req, res) => {

        let user = req.body; // only with mail, nick and password

        if (!checker.checkDataForRegister(user)) {
            res.json({
                done: false
            })
            return;
        }
        
        bcrypt.hash(user.password, 10, (err, hash) => {

            if (err) {
                res.json({
                    done: false
                })
                return;
            }

            user.password = hash;
            user.isGoogleUser = false;
            user.enabled = true;
            user.permissionLevel = 1;

            db.user.create(user)
                .then(result => {
                    console.log(result)
                    res.json({
                        done: true
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.json({
                        done: false
                    })
                })
        })
    })

    router.get('/loged', function(req, res) {

        console.log(req.session)

        if (req.session.user) {
            res.json({
                loged: true
            })
        } else {
            res.json({
                loged: false
            })
        }
    })

    router.get('/logout', function(req, res) {
        req.session.destroy();
        res.json({
            done: true
        })
    })
}