import React from 'react';

import 'whatwg-fetch';

export default class Facebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      loggedIn: false,
    };
  }

  componentWillMount() {
    $.getScript('//connect.facebook.net/en_US/sdk.js', () => {
      FB.init({
        appId: '1728318677417210',
        version: 'v2.7',
      });
      FB.getLoginStatus(response => {
        if (response.status === 'connected') {
          this.setState({
            loggedIn: true,
          });
        }
      });
    });
  }

  handleLogin() {
    $.getScript('//connect.facebook.net/en_US/sdk.js', () => {
      FB.login();
    });
    this.setState({
      loggedIn: true,
    });
  }

  handlePostMessage() {
    const message = this.state.value;

    $.getScript('//connect.facebook.net/en_US/sdk.js', () => {
      FB.api(
        '/me/feed',
        'GET',
        {},
        function(response) {
          console.log(response);
        }
      );
    });

    this.setState({
      value: '',
    });
  }

  render() {
    const facebookLogin = (
      <button onClick={this.handleLogin.bind(this)} >
        Login to FB
      </button>
    );

    const facebookButton = this.state.loggedIn ? '' : facebookLogin;

    return (
      <div>
        <h2>Facebook</h2>
        <div>
          { facebookButton }
        </div>
        Facebook Message To Post:
        <input
          value={this.state.value}
          onChange={(e) => { this.setState({ value: e.target.value }); }}
        />
        <button onClick={this.handlePostMessage.bind(this)} >
          Post to FB
        </button>
      </div>
    );
  }
}
