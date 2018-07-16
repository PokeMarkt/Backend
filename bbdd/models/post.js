'use strict'

const Sequelize = require('sequelize')
 
const setupDatabase = require('../singletonSequelize')
 
module.exports = function setupPokemonModel(config) {

    const sequelize = setupDatabase(config)
     
    return sequelize.define('post', {
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    });
} 