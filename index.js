'use strict'

const morgan = require('morgan')
const express = require('express')

const app = express();
const router = express.Router();

const config = require('./config')

app.use(morgan('dev'))
app.use(express.json())
app.use('/', router);

require('./routes/pokemons')(router)
//require('./routes/posts')(router)

// Starting the server
app.listen(80, function() {
    console.log('Server running on port 80')
})