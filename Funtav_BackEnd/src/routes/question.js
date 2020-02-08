const express = require ('express')
const controller = require ('../controllers/question')
const Router = express.Router()

const auth = require('../helpers/auth')

Router
    .get('/', auth.checkToken, controller.getQuestion)
    .post('/', auth.checkToken, controller.addQuestion)
    .patch('/:id_question', auth.checkToken, controller.editQuestion)
    .delete('/:id_question', auth.checkToken, controller.deleteQuestion)

module.exports = Router