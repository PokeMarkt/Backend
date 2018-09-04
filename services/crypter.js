'use strict'

const bcrypt = require('bcrypt')
const config = require('../config')

function crypt(plainPassword, cb) {
	bcrypt.hash(plainPassword, config.security.passwordsHash.salt, cb)
}

function checkPassword(plainPassword, hash, cb) {
	bcrypt.compare(plainPassword, hash, cb)
}

module.exports = {
	crypt,
	checkPassword
}