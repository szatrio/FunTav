const express = require ('express');
const user = require ('./user');
const notes = require ('./notes');

const Router = express.Router ();

Router.use ('/user', user);
Router.use ('/notes', notes); 

module.exports = Router;