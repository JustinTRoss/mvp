// var mongoose =require('../config/mongoose.js');
var text = require('textbelt');
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
    User.create(req.body);
    res.status(200).send('Thanks for signing up! ~ Hopefully you\'ll never need our services');
  },

  getUser: function(req, res) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', req.body);
    return User.findOne({ 'name' : req.body.name })
      .then(function(err, result) {
        console.log('<~~~~~~~~~~~~~~~ whoop whoop ~~~~~~~~~~', result);
      });

    // text.sendText(6198230738, 'testo-facto',
    //   {
    //     fromAddr: 'ross.justin.t@gmail.com',
    //     fromName: 'Justin Ricka Ross',
    //     region: 'us',
    //     subject: 'get some bruh'
    //   }, function(response) { console.log('this is the response: ', response) }
    // );

  }
}
