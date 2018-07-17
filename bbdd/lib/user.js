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

    return {
        findAll,
        findById,
        create,
        remove
    }
}