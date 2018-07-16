'use strict'

module.exports = function setupPokemon(PokemonModel) {

    function findAll() {
        return PokemonModel.findAll()
    }

    return {
        findAll
    }
}