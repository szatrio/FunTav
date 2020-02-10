const express = require ('express')
const controller = require ('../controllers/itnrsPackage')
const Router = express.Router()

const auth = require('../helpers/auth')

Router
    .get('/', auth.checkToken, controller.getItnrsPackage)
    .get('/:id_itnrs_package', auth.checkToken, controller.getItnrsPackageById)
    .post('/', auth.checkToken, controller.addItnrsPackage)
    .patch('/:id_itnrs_package', auth.checkToken, controller.editItnrsPackage)
    .delete('/:id_itnrs_package', auth.checkToken, controller.deleteItnrsPackage)

module.exports = Router