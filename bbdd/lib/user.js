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

    function findByNick(userToLogin){

        return UserModel.findOne({
            where: {
                nick: userToLogin.nick,
                enabled: true
            }
        })
    }

    function findByMail(userToLogin){

        return UserModel.findOne({
            where: {
                mail: userToLogin.mail,
                enabled: true
            }
        })
    }

    return {
        findAll,
        findById,
        create,
        remove,
        findByNick,
        findByMail
    }
}