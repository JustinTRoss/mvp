const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const Twitter = require('./Twitter');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/../client')));
app.use('/tweets', Twitter.getTweets);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
