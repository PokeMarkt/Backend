'use strict'

module.exports = function setupLike(LikeModel) {

    function findAll() {
        return LikeModel.findAll()
    }

    function findById(id) {
        return LikeModel.findById(id)
    }

    function create(like) {
        return LikeModel.create(like)
    }

    function remove(id) {
        return LikeModel.destroy({
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