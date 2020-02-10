const express = require ('express')
const controller = require ('../controllers/itineraries')
const Router = express.Router()

const auth = require('../helpers/auth')

Router
    .get('/', auth.checkToken, controller.getItineraries)
    .get('/:id_itineraries', auth.checkToken, controller.getItinerariesById)
    .post('/', auth.checkToken, controller.addItineraries)
    .patch('/:id_itineraries', auth.checkToken, controller.editItineraries)
    .delete('/:id_itineraries', auth.checkToken, controller.deleteItineraries)

module.exports = Router