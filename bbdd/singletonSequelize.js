'use strict'

// Singleton

const Sequelize = require('sequelize')
let sequelizeObject = null

module.exports = function setupDatabase (config) {

    if (!sequelizeObject) {
        sequelizeObject = new Sequelize(config)
    }

    return sequelizeObject;
}