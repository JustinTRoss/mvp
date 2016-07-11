var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var towEventSchema = new Schema({
  licensePlate: String,
  fromPhone: String,
  toPhone: String
});