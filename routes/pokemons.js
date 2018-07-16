'use strict'

const config = require('../config')
const db = require('../bbdd/index')(config.database)

module.exports = function(router) {

    router.get('/pokemons', function(req, res) {    

        db.pokemon.findAll()
            .then((results => {
                res.json(results)
            }));
    });

    
}