'use strict'

const Sequelize = require('sequelize')
 
const setupDatabase = require('../singletonSequelize')
 
module.exports = function setupPokemonModel(config) {

    const sequelize = setupDatabase(config)
     
    return sequelize.define('demand', {
        shiny: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        placeLocated: {
            type: Sequelize.GEOMETRY,
            allowNull: false
        },
        pc: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
} 