//needs to import a controller at some point

var Router = require('express').Router();

//route for adding your phone/plate number to DB.
Router.post('/users', addUserCtrl);

//route for reporting you are going to tow in 15 minutes
Router.post('/towWarnings', towWarningCtrl);

//route for reporting towing in action
Router.post('/towStarts', towStartCtrl);

module.exports = Router;