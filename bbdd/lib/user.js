'use strict'

module.exports = function setupUser(UserModel) {

    function findAll() {
        return UserModel.findAll()
    }

    function findById(id) {
        return UserModel.findById(id)
    }

    function create(user) {
        return UserModel.create(user)
    }

    function remove(id) {
        return UserModel.destroy({
            where: {
                id
            }
        })
    }

    function loginWithNick(userToLogin){

        return UserModel.findOne({
            where: {
                nick: userToLogin.nick,
                password: userToLogin.password,
                enabled: true
            }
        })
    }

    function loginWithMail(userToLogin){

        return UserModel.findOne({
            where: {
                nick: userToLogin.mail,
                password: userToLogin.password,
                enabled: true
            }
        })
    }

    return {
        findAll,
        findById,
        create,
        remove,
        loginWithNick,
        loginWithMail
    }
}