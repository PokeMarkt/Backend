'use strict'
module.exports = {

    database: {
        database: 'POKEMON',
        username: 'pok',
        password: 'pok',
        host: '192.168.1.123',
        dialect: 'mysql',
        operatorsAliases: false,
        recreate: false
    },
    server: {
        port: 3000
    }, 
    paths: {
        pokemonImagesFolder: __dirname + '\\resources\\pokemonImages\\'
    },
    security: {
        SECRET_TOKEN: 'asdfasdfadsf', // for jwt
        passwordsHash: {
            salt: 10
        }
    }

}