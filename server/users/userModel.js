var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  phone: String,
  licensePlate: String,
  towAddress: String
});