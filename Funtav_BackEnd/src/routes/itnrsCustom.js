const express = require ('express')
const controller = require ('../controllers/itnrsCustom')
const Router = express.Router()

const auth = require('../helpers/auth')

Router
    .get('/', auth.checkToken, controller.getItnrsCustom)
    .get('/:id_itnrs_custom', auth.checkToken, controller.getItnrsCustomById)
    .post('/', auth.checkToken, controller.addItnrsCustom)
    .patch('/:id_itnrs_custom', auth.checkToken, controller.editItnrsCustom)
    .delete('/:id_itnrs_custom', auth.checkToken, controller.deleteItnrsCustom)

module.exports = Router