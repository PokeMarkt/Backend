'use strict'

const setupDatabase = require('./singletonSequelize')

const setupPokemonModel = require('./models/pokemon')

const setupPokemon = require('./lib/pokemon')

module.exports = function(config) {

    const sequelize = setupDatabase(config)

    const pokemonModel = setupPokemonModel(config)

    sequelize.authenticate()
        .then(() => {
            console.log('Sequelize authenticated')
            if (config.recreate) {
                sequelize.sync({ force: true })
            }
        })
        .catch(() => {
            console.log('Sequelize NOT authenticated')
        })

    const pokemon = setupPokemon(pokemonModel);

    return {
        pokemon
    }
}