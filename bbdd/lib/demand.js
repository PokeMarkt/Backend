'use strict'

module.exports = function setupDemand(DemandModel) {

    function findAll() {
        return DemandModel.findAll()
    }

    function findById(id) {
        return DemandModel.findById(id)
    }

    function create(demand) {
        return DemandModel.create(demand)
    }

    function remove(id) {
        return DemandModel.destroy({
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