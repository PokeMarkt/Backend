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

    router.get('/pokemon/:numPokedex', function(req, res) {    

        db.pokemon.findByPokedexNum(req.params.numPokedex)
            .then(result => {
                res.json(result)
            })
    });

    router.post('/pokemon', (req, res) => {
        const pokemon = req.body;
        // TODO
    });
}