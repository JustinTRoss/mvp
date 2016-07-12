//needs to import a controller at some point
var UserCtrl = require('../users/UserCtrl.js');
var TowEventCtrl = require('../towEvents/towEventCtrl.js');

var Router = require('express').Router();
//route for adding your phone/plate number to DB.
Router.post('/users', UserCtrl.addUser);

//route for reporting you are going to tow in 15 minutes
Router.post('/towEvents', TowEventCtrl.addTowEvent);


module.exports = Router;