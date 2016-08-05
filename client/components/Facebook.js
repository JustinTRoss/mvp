import React from 'react';

import { FACEBOOK_APP_ID } from '../../__secrets.js';

export default class Facebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      loggedIn: false,
      userProfile: {},
    };
  }

  componentWillMount() {
    $.getScript('//connect.facebook.net/en_US/sdk.js', () => {
      FB.init({
        appId: FACEBOOK_APP_ID,
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

  handleLogout() {
    $.getScript('//connect.facebook.net/en_US/sdk.js', () => {
      FB.logout();
    });
    this.setState({
      loggedIn: false,
    });
  }

  handleCaptureUser() {
    $.getScript('//connect.facebook.net/en_US/sdk.js', () => {
      FB.api(
        '/me/feed',
        'GET',
        {},
        (response) => {
          const userProfile = this.state.userProfile;
          userProfile.feed = response.data;
          this.setState({
            userProfile,
          })
        }
      );
      FB.api(
        '/me/likes',
        'GET',
        {},
        (response) => {
          const userProfile = this.state.userProfile;
          userProfile.likes = response.data;
          this.setState({
            userProfile,
          })
        }
      );
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
          <p>E: gpognhk_okelolaberg_1470317798@tfbnw.net</p>
          <p>P: David1234</p>
        </div>
        <div>
          <p>E: yqeatmx_occhinostein_1470317797@tfbnw.net</p>
          <p>P: Rick1234</p>
        </div>
        <div>
          <p>E: kikgfnh_chaiescu_1470317800@tfbnw.net</p>
          <p>P: Mark1234</p>
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
        <button onClick={this.handleCaptureUser.bind(this)} >
          Capture user profile
        </button>
        <div>
          { JSON.stringify(this.state.userProfile) }
        </div>
      </div>
    );
  }
}
