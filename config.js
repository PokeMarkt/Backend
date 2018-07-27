'use strict'
module.exports = {

    database: {
        database: '',
        username: '',
        password: '',
        host: '',
        dialect: 'mysql',
        operatorsAliases: false,
        recreate: false
    },
    server: {
        port: 3000
    }, 
    paths: {
        pokemonImagesFolder: __dirname + '\\resources\\pokemonImages\\'
    }

}