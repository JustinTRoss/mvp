var UserCtrl = require('../users/UserCtrl.js')
var TowEvent = require('./towEventModel.js');

// var towEvents = [
//   {
//     licensePlate: '8VSG619',
//     fromAddr: 'QuinKinser@gmail.com',
//     fromName: 'Quin Kinser',
//     toPhone: '6198230738',
//     type: 'warning',
//     message: 'Dude.. come move your car...'
//   }
// ];

module.exports = {
  addTowEvent: function(req, res) {
    console.log(req.body, res.body);
    UserCtrl.getUser(req, res).then(function() {
      res.status(200).send(towEvents);
    });
  }
};
