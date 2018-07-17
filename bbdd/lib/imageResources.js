'use strict'

module.exports = function setupImageResources(ImageResourcesModel) {

    function findAll() {
        return ImageResourcesModel.findAll()
    }

    function findById(id) {
        return ImageResourcesModel.findById(id)
    }

    function create(imageResource) {
        return ImageResourcesModel.create(imageResource)
    }

    function remove(id) {
        return ImageResourcesModel.destroy({
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