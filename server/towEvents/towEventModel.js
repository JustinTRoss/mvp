var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var towEventSchema = new Schema({
  licensePlate: {type: String, required: true},
  fromPhone: {type: String, required: false},
  toPhone: {type: String, required: true},
  type: {type: String, required: true} //should always either be warning or inAction
});
towEventSchema.set('timestamps', true);

var TowEvent = mongoose.model('TowEvent', 'Schema');

module.exports = TowEvent