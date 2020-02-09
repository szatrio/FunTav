const express = require ('express');
const user = require ('./user');
const notes = require ('./notes');
const itnrsPackage = require ('./itnrsPackage')

const Router = express.Router ();

Router.use ('/user', user);
Router.use ('/notes', notes); 
Router.use ('/itnrs_package', itnrsPackage); 

module.exports = Router;