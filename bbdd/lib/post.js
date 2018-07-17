'use strict'

module.exports = function setupPost(PostModel) {

    function findAll() {
        return PostModel.findAll()
    }

    function findById(id) {
        return PostModel.findById(id)
    }

    function create(post) {
        return PostModel.create(post)
    }

    function remove(id) {
        return PostModel.destroy({
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