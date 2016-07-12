var mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://localhost/towing');
  var db = mongoose.connection;

  db.on('error', function(err) {
   console.error('something went wrong ~ from config > mongoose.js: ', err); 
  });

  db.once('open', function() {
    console.log('mongoDB is open for business!');
  });
}