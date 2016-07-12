var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var towEventSchema = new Schema({
  licensePlate: {type: String, required: true},
  fromAddr: {type: String, required: false},
  fromName: {type: String, required: false},
  toPhone: {type: String, required: true},
  region: {type: String, default: "us"},
  type: {type: String, required: true}, //should always either be warning or inAction
  subject: {type: String, default: 'WARNING ~ You are being notified that someone has reported your car as "at risk" for being towed'},
  message: {type: String, default: 'Quick! Come move your car before it gets towed! ~ Peace and Happiness ~ FriendlyTowing'},
});
towEventSchema.set('timestamps', true);

var TowEvent = mongoose.model('TowEvent', towEventSchema);

module.exports = TowEvent