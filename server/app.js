var text = require('textbelt');
var express = require('express');
var app = express();
require('./config/express.js')(app);
require('./config/mongoose.js')();
var Router = require('./config/routes.js');


app.use('/api', Router);
app.use(express.static(__dirname + '/../client'));


app.listen(3000, function() {
  console.log('Vroom vroom! Engines ready on 3000....');
});

module.exports = app;