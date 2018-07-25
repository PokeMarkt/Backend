'use strict'

const chalk = require('chalk') // colored world

const morgan = require('morgan')
const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const app = express();
const router = express.Router();

const config = require('./config')
const db = require('./bbdd/db')(config.database)

// Configs of Express
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())
app.use(session({
    secret: 'asdfasdfasdfasdfasdf',
    cookie: {
        user: {}
    }
}))

app.use('/', router);

// Require the diferent files of routes (of diferent entities)
require('./routes/pokemons')(router, db)
require('./routes/posts')(router, db)
require('./routes/users')(router, db)

// Starting the server
app.listen(config.server.port, function() {
    console.log(chalk.green('Server running on port ' + config.server.port) )
})