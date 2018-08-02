'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function generateToken(user) {
	const payload = {
		sub: user.id,
		iat: moment().unix(),
		exp: moment().add(1, 'day').unix()
	}

	return jwt.encode(payload, config.security.SECRET_TOKEN)
}

module.exports = {
	generateToken
}
