const express = require ('express');
const user = require ('./user');
const notes = require ('./notes');
const itineraries = require ('./itineraries')
const itnrsPackage = require ('./itnrsPackage')
const itnrsCustom = require ('./itnrsCustom')

const Router = express.Router ();

Router.use ('/user', user);
Router.use ('/notes', notes); 
Router.use ('/itineraries', itineraries); 
Router.use ('/itnrs_package', itnrsPackage);
Router.use ('/itnrs_custom', itnrsCustom); 

module.exports = Router;