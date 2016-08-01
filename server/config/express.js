const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');

module.exports = function(app) {
  //parse application/json
  app.use(bodyParser.json());
  //logging
  app.use(morgan('dev'));
  //serve static routes
  app.use(express.static('http://localhost:3000/../client/'));

};