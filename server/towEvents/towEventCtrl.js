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
    UserCtrl.getUser(req, res)
      .then(function(result) {
        if (result) {
          TowEvent.create({
            "licensePlate" : req.body.licensePlate,
            "fromAddr" : req.body.fromAddr,
            "fromName" : req.body.name,
            "toPhone" : result.phone,
            "type" : "warning", // <~~~~~~~~~~~~~~change this later to implement multiple alert types
            "region" : "us",
            "subject" : req.body.subject || "WARNING ~ You are being notified that someone has reported your car as \"at risk\" for being towed",
            "message" : req.body.message || "Quick! Come move your car before it gets towed! ~ Peace and Happiness ~ FriendlyTowing"
          }, function(err, towEvent) {
            if (err) {
              console.log(err);
              throw err;
            } else {
              //create return object to be used in text formation
              var textData = {
                "phone" : result.phone,
                "message" : towEvent.message,
                "options" : {
                  "fromAddr" : towEvent.fromAddr,
                  "fromName" : towEvent.fromName,
                  "region" : "us",
                  "subject" : towEvent.subject
                }
              };
 
              return textData; // <~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ if you encounter problem, check that this actually exits
            }
          });
        } else {
          //user not found, so send response to user indicating this
          res.send(`Oops.. This user hasn't yet registered their vehicle with us. To the benefit of the community, you may want to leave a note suggesting they do.`);
        }
      }).then(function(textData) {
        console.log('sending text! ~~~~~~~~~~~~~~~~~~~~~~~~~~~ ', textData);
        text.sendText(textData.phone, textData.message, textData.options,
          function(err,others) {
            if (err) {
              console.log('errorrrrrr', err, 'others: ', others);
              textData.didSend = false;
            } else {
              console.log('noerr: ', err, 'others: ', others);
              textData.didSend = true;
            }
            return textData;
          }
        );
      }).then(function(textData) {
        if (textData.didSend) {
          res.send(`A text has been sent to the owner of ${textData.licensePlate}`);
        } else {
          res.send(`We found the owner, but our free texting API had trouble getting a message through. Please resend that once more.`);
        }
      });
  }
};
