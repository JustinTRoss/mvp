var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app) {
  //parse application/json
  app.use(bodyParser.json());

  //logging
  app.use(morgan('dev'));
}