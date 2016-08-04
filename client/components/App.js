import React from 'react';

import Facebook from './Facebook.js';
import LinkedIn from './LinkedIn.js';
import Twitter from './Twitter.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      twitterInputValue: '',
    };
    this.handleTwitterInputChange = this.handleTwitterInputChange.bind(this);
  }

  handleTwitterInputChange(event) {
    this.setState({
      twitterInputValue: event.target.value,
    });
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
        />
      </div>
    )
  }
}