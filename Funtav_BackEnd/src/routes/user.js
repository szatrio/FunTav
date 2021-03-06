const express = require ('express')
const controller = require('../controllers/user')
const auth = require('../helpers/auth')
const Router = express.Router()

Router
    .get ('/', auth.checkToken, controller.getUser)
    .get ('/profile', auth.checkToken, controller.getProfile)
    .post ('/', controller.addUser)  
    .patch ('/:id_user', auth.checkToken, controller.editUser)
    .delete ('/:id_user', auth.checkToken, controller.deleteUser)
    .post('/login', controller.loginUser)

module.exports = Router