'use strict'

module.exports = function(router) {

    router.get('/pokemons', function(req, res) {    
        res.json({
            test: 'test'
        })
    });
}