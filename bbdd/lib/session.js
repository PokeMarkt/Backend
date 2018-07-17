'use strict'

module.exports = function setupSession(SessionModel) {

    function findAll() {
        return SessionModel.findAll()
    }

    function findById(id) {
        return SessionModel.findById(id)
    }

    function create(session) {
        return SessionModel.create(session)
    }

    function remove(id) {
        return SessionModel.destroy({
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