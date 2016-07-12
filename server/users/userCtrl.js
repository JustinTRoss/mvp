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
  addUser: function(req, res) {
    User.create(req.body, function(err, user) {
      res.status(200).send(`Thanks for signing up ${user}! ~ Hopefully you\'ll never need our services`);
    });
  },

//note!! - Move promise chain over to toweventctrl
  getUser: function(req, res) {
    return User.findOne({ 'licensePlate': req.body.licensePlate }).exec();
      // .then(function(data) {
      //   console.log(data);
      //   if (data.didSend) {
      //     res.send(`A text has been sent to the owner`);
      //   } else {
      //     res.send(`We found the owner, but our free texting API had trouble getting a message through. Please resend that once more.`);
      //   }
      // });
  }
}
