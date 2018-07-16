'use strict'

const config = require('../config')
const db = require('../bbdd/index')(config.database)

module.exports = function(router) {

    router.get('/pokemons', function (req, res) {

        db.pokemon.findAll()
            .then((results => {
                res.json(results)
            }));
    });

    router.get('/pokemon/:id', function(req, res) {    

        db.pokemon.findById(req.params.id)
            .then(result => {
                res.json(result)
            })
    });

    router.get('/pokedex/:numPokedex', function(req, res) {    

        db.pokemon.findByPokedexNum(req.params.numPokedex)
            .then(result => {
                res.json(result)
            })
    });

    router.post('/pokemon', (req, res) => {
        const pokemon = req.body;
        db.pokemon.create(pokemon)
            .then(res => {
                console.log(res)
            })
    });

    router.put('/pokemon/:id', (req, res) => {
        
        const pokemon = req.body;

        // TODO update
    })

    router.delete('/pokemon/:id', (req, res) => {
        db.pokemon.remove(req.params.id)
            .then(result => {
                console.log('deleted')
            })
            .catch(result => {
                console.log('no deleted')
            })

    })

}