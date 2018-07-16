'use strict'

const Sequelize = require('sequelize')
 
const setupDatabase = require('../singletonSequelize')
 
module.exports = function setupPokemonModel(config) {

    const sequelize = setupDatabase(config)
     
    return sequelize.define('user', {
        nick: {
            type: Sequelize.STRING,
            allowNull: false
        },
        mail: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        googleId: {
            type: Sequelize.STRING,
            allowNull: true
        },
        isGoogleUser: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        enabled: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    });
} 