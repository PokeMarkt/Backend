'use strict'

module.exports = function setupPokemon(PokemonModel) {

    function findAll() {
        return PokemonModel.findAll()
    }

    function findById(id) {
        return PokemonModel.findById(id)
    }

    function findByPokedexNum(numPokedex) {
        return PokemonModel.findOne({
            where: {
                numPokedex: numPokedex
            }
        })
    }

    return {
        findAll,
        findById,
        findByPokedexNum
    }
}