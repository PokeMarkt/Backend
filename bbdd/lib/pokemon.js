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

    function create(pokemon) {
        return PokemonModel.create(pokemon)
    }

    function remove(id) {
        return PokemonModel.destroy({
            where: {
                id
            }
        })
    }

    return {
        findAll,
        findById,
        findByPokedexNum,
        create,
        remove
    }
}