const OAuth = require('oauth');
require('es6-promise').polyfill();
require('isomorphic-fetch');

const getTweets = (req, res) => {
	const topic = req.body.topic || 'facebook';
	const sentiment = req.body.sentiment || ':)';
  fetch(`https://api.twitter.com/1.1/search/tweets.json?q=${topic}&lang=en&result_type=popular&count=100`, { 
    headers: {
    	'Authorization': 'bearer AAAAAAAAAAAAAAAAAAAAADBMwQAAAAAA9vxtpYpYao2anTI8CmGUhN3%2BEuA%3DCs2SH8SG9iYBRAQwnxhg0RSLNIitI6w70SBinwON9hMOZjpmNl',
    	'content-type': 'application/json',
    },
  })
  .then(res => res.json())
  .then(data => {
  	let newData = data.statuses.filter(tweetObj => tweetObj.entities.urls.length > 0)
  		.map(tweetUrlObj => tweetUrlObj.entities.urls[0].expanded_url);
  	newData = newData[0] ? newData : ['http://attackofthecute.com/popular.php'];
  	res.send(newData);
  })
  .catch(err => res.send(err));
};

module.exports = {
	getTweets
};