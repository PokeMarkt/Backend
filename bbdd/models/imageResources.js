'use strict'

const Sequelize = require('sequelize')
 
const setupDatabase = require('../singletonSequelize')
 
module.exports = function setupPokemonModel(config) {

    const sequelize = setupDatabase(config)
     
    return sequelize.define('session', {
        path: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
} 