'use strict'

const chalk = require('chalk')

const setupDatabase = require('./singletonSequelize')

// Import models
const setupSessionModel = require('./models/session')
const setupUserModel    = require('./models/user')
const setupLikeModel    = require('./models/like')
const setupViewModel    = require('./models/view')
const setupPostModel    = require('./models/post')
const setupOfferModel   = require('./models/offer')
const setupDemandModel  = require('./models/demand')
const setupPokemonModel = require('./models/pokemon')
const setupImageResourcesModel = require('./models/imageResources')

// import objects with queries
const setupSession  = require('./lib/session')
const setupUser     = require('./lib/user')
const setupLike     = require('./lib/user')
const setupView     = require('./lib/view')
const setupPost     = require('./lib/post')
const setupOffer    = require('./lib/offer')
const setupDemand   = require('./lib/demand')
const setupPokemon  = require('./lib/pokemon')
const setupImageResource = require('./lib/imageResources')

module.exports = function(config) {

    const sequelize = setupDatabase(config)

    // Models
    const sessionModel  = setupSessionModel(config)
    const userModel     = setupUserModel(config)
    const likeModel     = setupLikeModel(config)
    const viewModel     = setupViewModel(config)
    const postModel     = setupPostModel(config)
    const offerModel    = setupOfferModel(config)
    const demandModel   = setupDemandModel(config)
    const pokemonModel  = setupPokemonModel(config)
    const imageResourcesModel = setupImageResourcesModel(config)

    // Relations
    userModel.hasMany(sessionModel)
    userModel.belongsTo(imageResourcesModel)
    userModel.hasMany(likeModel)
    postModel.hasMany(likeModel)
    userModel.hasMany(viewModel)
    postModel.hasMany(viewModel)
    postModel.belongsTo(userModel, { as : 'userPoster' })
    postModel.belongsTo(userModel, { as : 'userCloser' })
    postModel.hasMany(offerModel)
    postModel.hasMany(demandModel)
    pokemonModel.hasMany(offerModel)
    pokemonModel.hasMany(demandModel)
    pokemonModel.belongsTo(imageResourcesModel)

    // Auth in bbdd
    sequelize.authenticate()
        .then(() => {
            console.log(`${chalk.green('SEQUELIZE AUTHENTICATED!')}`)
            if (config.recreate) {
                sequelize.sync({ force: true })
            }
        })
        .catch(() => {
            console.log(`${chalk.red('SEQUELIZE NOT AUTHENTICATED!')}`)
            process.exit(1)
        })

    // Get the objects with the queries 
    const session = setupSession(sessionModel)
    const user = setupUser(userModel)
    const like = setupLike(likeModel)
    const view = setupView(viewModel)
    const post = setupPost(postModel)
    const offer = setupOffer(offerModel)
    const demand = setupDemand(demandModel)
    const pokemon = setupPokemon(pokemonModel);
    const imageResource = setupImageResource(imageResourcesModel)

    return {
        session, 
        user,
        like, 
        view,
        post, 
        offer,
        demand,
        pokemon,
        imageResource
    }
}