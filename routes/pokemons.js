'use strict'

module.exports = function(router, db) {

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

    router.get('/pokemonImage/:numPokedex', function(req, res) {   

		let path = 'D:\\Projects\\PokeMarkt\\Backend\\resources\\pokemonImages\\';
		
		let prefix = '';

		if (req.params.numPokedex < 10) {
			prefix = '00';
		} else if (req.params.numPokedex < 100) {
			prefix = '0';
		} 

		path += prefix + req.params.numPokedex + '.jpg'

        console.log(path);
        res.sendFile(path)
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