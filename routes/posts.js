'use strict'

const config = require('../config')
const db = require('../bbdd/index')(config.database)

module.exports = function(router) {

    router.get('/posts', function (req, res) {    

    });

    router.get('/post/:id', function(req, res) {    

    });

    router.post('/post', (req, res) => {

        const post = req.body;

    });

    router.put('/post/:id', (req, res) => {

        const postId = req.params.id;
        const post = req.body;

    });

    router.delete('/post/:id', (req, res) => {
        
    })

}