'use strict'

const config = require('../config')

const isemail = require('isemail')
const PasswordValidator = require('password-validator')
const bcrypt = require('bcrypt')

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

    router.post('/login', function(req, res){

        let userToLogin = req.body

        if (userToLogin.nick) {

            db.user.loginWithNick(userToLogin)
                .then(result => {
                    if (result == null ) {
                        res.json({
                            auth: false
                        })
                    } else {
                        res.json({
                            auth: true
                        })
                        req.sesion.user = result
                    }
                })
                .catch(err => {
                    console.log('ERROR: ' + err)
                })

        } else if (userToLogin.mail) {
            db.user.loginWithMail(userToLogin)
                .then(result => {
                    if (result == null ) {
                        res.json({
                            auth: false
                        })
                    } else {
                        res.json({
                            auth: true
                        })
                        req.sesion.user = result
                    }
                })
                .catch(err => {
                    console.log('ERROR: ' + err)
                })
        } else {
            res.json({
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

        if (!isemail.validate(user.mail)) {
            res.json({
                done: false
            })
            return;
        }

        const passwordValidator = new PasswordValidator();

        passwordValidator
            .is().min(8)
            .is().max(20)
            .has().uppercase()
            .has().lowercase()
            .has().digits();

        if (!passwordValidator.validate(user.password)) {
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

    router.get('/aloha', function(req, res) {
        if (req.session.user) {
            res.json({
                loged: 'yes'
            })
        } else {
            res.json({
                loged: 'nope'
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