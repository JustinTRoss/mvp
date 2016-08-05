const OAuth = require('oauth');
require('es6-promise').polyfill();
require('isomorphic-fetch');

const getTweets = (req, res) => {
	const topic = req.body.topic || ':)';
	const sentiment = req.body.sentiment || 'facebook';
  fetch(`https://api.twitter.com/1.1/search/tweets.json?q=${topic}+${sentiment}&lang=en&count=100`, { 
    headers: {
    	'Authorization': 'bearer AAAAAAAAAAAAAAAAAAAAADBMwQAAAAAA9vxtpYpYao2anTI8CmGUhN3%2BEuA%3DCs2SH8SG9iYBRAQwnxhg0RSLNIitI6w70SBinwON9hMOZjpmNl',
    	'content-type': 'application/json',
    },
  })
  .then(res => res.json())
  .then(data => {
  	res.send(data);
  })
  .catch(err => res.send(err));
};

module.exports = {
	getTweets
};