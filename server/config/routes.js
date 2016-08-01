//needs to import a controller at some point
const UserCtrl = require('../users/UserCtrl.js');
const TowEventCtrl = require('../towEvents/towEventCtrl.js');

const Router = require('express').Router();

//route for adding your phone/plate number to DB.
Router.post('/users', UserCtrl.addUser);

//route for reporting you are going to tow in 15 minutes
Router.post('/towEvents', TowEventCtrl.addTowEvent);


module.exports = Router;