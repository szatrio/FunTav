const express = require ('express');
const user = require ('./user');
const question = require ('./question');

const Router = express.Router ();

Router.use ('/user', user);
Router.use ('/question', question); 

module.exports = Router;