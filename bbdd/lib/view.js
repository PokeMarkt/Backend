'use strict'

module.exports = function setupView(ViewModel) {

    function findAll() {
        return ViewModel.findAll()
    }

    function findById(id) {
        return ViewModel.findById(id)
    }

    function create(view) {
        return ViewModel.create(view)
    }

    function remove(id) {
        return ViewModel.destroy({
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