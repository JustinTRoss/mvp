var express = require('express');
var app = express();

require('./config/express.js')(app);

app.use('/api', Router);


app.listen(3000, function() {
  console.log('Vroom vroom! Engines ready on 3000....');
});