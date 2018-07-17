'use strict'

module.exports = function setupOffer(OfferModel) {

    function findAll() {
        return OfferModel.findAll()
    }

    function findById(id) {
        return OfferModel.findById(id)
    }

    function create(offer) {
        return OfferModel.create(offer)
    }

    function remove(id) {
        return OfferModel.destroy({
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