'use strict'

const Sequelize = require('sequelize')
 
const setupDatabase = require('../singletonSequelize')
 
module.exports = function setupPokemonModel(config) {

    const sequelize = setupDatabase(config)
     
    return sequelize.define('session', {
        device: {
            type: Sequelize.STRING,
            allowNull: false
        },
        ip: {
            type: Sequelize.STRING,
            allowNull: false
        },
        coordenate: {
            type: Sequelize.GEOMETRY,
            allowNull: false
        }
    });
} 