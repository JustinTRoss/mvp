var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {type: String, required: true},
  phone: {type: String, required: true}, //consider not allowing duplicate phone/license pairs
  licensePlate: {type: String, required: true},
  towAddress: {type: String, required: true},
  incidences: {type: Number, default: 0}
});
userSchema.set('timestamps', true);

var User = mongoose.model('User', userSchema);

module.exports = User;