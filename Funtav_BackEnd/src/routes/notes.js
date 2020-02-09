const express = require ('express')
const controller = require ('../controllers/notes')
const Router = express.Router()

const auth = require('../helpers/auth')

Router
    .get('/', auth.checkToken, controller.getNotes)
    .post('/', auth.checkToken, controller.addNotes)
    .patch('/:id_notes', auth.checkToken, controller.editNotes)
    .delete('/:id_notes', auth.checkToken, controller.deleteNotes)

module.exports = Router