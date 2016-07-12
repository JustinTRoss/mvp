// var mongoose =require('../config/mongoose.js');
var User = require('./userModel.js');

var users = [
  {
    name: 'Justin Ross',
    phone: '6198230738',
    licensePlate: '7MRJ166',
    towAddress: '6190 Via Regla, San Diego CA 92122'
  },
  {
    name: 'Justin Ross',
    phone: '6198230738',
    licensePlate: '7MRJ166',
    towAddress: '6190 Via Regla, San Diego CA 92122'
  }
];

module.exports = {
  //add new user to DB
  addUser: function(req, res) {
    User.create(req.body, function(err, user) {
      res.status(200).send(`Thanks for signing up ${user}! ~ Hopefully you\'ll never need our services`);
    });
  },

  //send message to violator and add new event to DB
  getUser: function(req, res) {
    return User.findOne({ 'licensePlate': req.body.licensePlate }).exec();
  }
}
