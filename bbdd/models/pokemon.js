'use strcit'

const Sequelize = require('sequelize')
const setupDatabase = require('../singletonSequelize')

module.exports = function setupPokemonModel(config) {

    const sequelize = setupDatabase(config)

    return sequelize.define('pokemon', {
        numPokedex : {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type2: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
};