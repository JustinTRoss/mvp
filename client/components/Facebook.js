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
            access_token: response.authResponse.accessToken,
          });
          console.log(this.state)
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

  handleLogout() {
    $.getScript('//connect.facebook.net/en_US/sdk.js', () => {
      FB.logout();
    });
    this.setState({
      loggedIn: false,
    });
  }

  handlePostMessage() {
    const message = this.state.value;

    $.getScript('//connect.facebook.net/en_US/sdk.js', () => {
      FB.api(
        '/me/feed',
        'POST',
        { 'message': message },
        (response) => { console.log(response); }
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

    const facebookLogout = (
      <button onClick={this.handleLogout.bind(this)} >
        Logout of FB
      </button>
    );

    const facebookButton = this.state.loggedIn ? facebookLogout : facebookLogin;

    return (
      <div>
        <h2>Facebook</h2>
        <div>
          <p>E: naozcsl_schrockson_1470295782@tfbnw.net</p>
          <p>P: Dick1234</p>
        </div>
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
