'use strict'

const chalk = require('chalk') // colored world

const morgan = require('morgan')
const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
//const MemcachedStore = require('connect-memcached')(session);
const FileStore = require('session-file-store')(session);

const cors = require('cors')
const app = express();
const router = express.Router();

const config = require('./config')
const db = require('./bbdd/db')(config.database)

// Configs of Express
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())
app.use(cors())

app.use(session({
    secret: 'asdfasdfasdfasdfasdf',
    key: 'test',
    resave: false,
    store: new FileStore(),
    saveUninitialized: false
}))

app.use('/', router);

// Require the diferent files of routes (of diferent entities)

const normalizedPath = require("path").join(__dirname, "routes");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  require("./routes/" + file)(router, db)
});

// Starting the server
app.listen(config.server.port, function() {
    console.log(chalk.green('Server running on port ' + config.server.port) )
})