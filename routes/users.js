
const config = require('../config')

module.exports = function(router, db) {

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