import React from 'react';
import Facebook from './Facebook.js';
import LinkedIn from './LinkedIn.js';
import Twitter from './Twitter.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      twitterInputValue: '',
      oauth: null,
      tweetValues: ['no links available'],
    };
    this.handleTwitterInputChange = this.handleTwitterInputChange.bind(this);
    this.handleTwitterSearchClick = this.handleTwitterSearchClick.bind(this);
  }

  handleTwitterInputChange(event) {
    this.setState({
      twitterInputValue: event.target.value,
      twitterInputSentiment: ':)',
    });
  }

  handleTwitterSearchClick() {
    //send query to twitter
    fetch('http://localhost:3000/tweets', 
      { 
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          topic: this.state.twitterInputValue,
          sentiment: this.state.twitterInputSentiment,
        }),
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          tweetValues: data,
        });
      })
      .catch(err => console.error(err));
  }


  render() {
    return (
      <div>
        <h1>App</h1>
        <Facebook />
        <LinkedIn />
        <Twitter
          twitterInputValue={this.state.twitterInputValue}
          handleTwitterInputChange={this.handleTwitterInputChange}
          handleTwitterSearchClick={this.handleTwitterSearchClick}
          tweetValues={this.state.tweetValues}
        />
      </div>
    )
  }
}

