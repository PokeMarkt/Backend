
const config = require('../config')

module.exports = function(router, db) {

    router.get('/login', function(req, res){
        req.session.loged = true
        res.json({
            done: true
        })
    })

    router.get('/aloha', function(req, res) {
        if (req.session.loged) {
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