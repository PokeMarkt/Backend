'use strict'

const isemail = require('isemail')
const PasswordValidator = require('password-validator')

function checkDataForRegister(user) {
	return isemail.validate(user.mail) && checkPassword(user.password)	
}

function checkPassword(password) {
	const passwordValidator = new PasswordValidator();

	passwordValidator
		.is().min(8)
		.is().max(20)
		.has().uppercase()
		.has().lowercase()
		.has().digits();

	return passwordValidator.validate(user.password)
}

module.exports = {
	checkDataForRegister,
	checkPassword
}