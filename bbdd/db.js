'use strict'

const setupDatabase = require('./singletonSequelize')

// Import models
const setupSessionModel = require('./models/session')
const setupUserModel    = require('./models/user')
const setupLikeModel    = require('./models/like')
const setupViewModel    = require('./models/view')
const setupPostModel    = require('./models/post')
const setupOfferModel   = require('./models/offer')
const setupDemandOffer  = require('./models/demand')
const setupPokemonModel = require('./models/pokemon')
const setupImageResourcesModel = require('./models/imageResources')

const setupPokemon = require('./lib/pokemon')

module.exports = function(config) {

    const sequelize = setupDatabase(config)

    // Models
    const sessionModel = setupSessionModel(config)
    const userModel = setupUserModel(config)
    const likeModel = setupLikeModel(config)
    const viewModel = setupViewModel(config)
    const postModel = setupPostModel(config)
    const offerModel = setupOfferModel(config)
    const demandModel = setupDemandOffer(config)
    const pokemonModel = setupPokemonModel(config)
    const imageResourcesModel = setupImageResourcesModel(config)

    // Relations
    userModel.hasMany(sessionModel)
    sessionModel.belongsTo(userModel)
    //userModel.hasOne
        

    // Auth in bbdd
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

    // Get the objects with the queries 
    const pokemon = setupPokemon(pokemonModel);

    return {
        pokemon
    }
}