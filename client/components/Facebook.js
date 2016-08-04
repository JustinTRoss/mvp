import React from 'react';

export default class Facebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleClick() {
    const message = this.state.value;

    fetch('https://connect.facebook.net/en_US/sdk.js', {
      method: 'get',
      mode: 'cors',
    }).then(response => {
      FB.init({
        appId: '1728318677417210',
        version: 'v2.7'
      });
      FB.getLoginStatus(response => {
        if (response.status === 'connected') {
          console.log('response ', response);
          console.log('Logged in.');
          const accessToken = response.authResponse.accessToken;
          const userID = response.authResponse.userID;
        }
        else {
          FB.login();
        }
      });
    }).catch(err => {
      console.log(err);
    });

    this.setState({
      value: '',
    });
  }

  render() {
    return (
      <div>
        <h2>Facebook</h2>
        Facebook Message To Post:
        <input
          value={this.state.value}
          onChange={(e) => { this.setState({ value: e.target.value }); }}
        />
        <button onClick={this.handleClick.bind(this)} >
          Post to FB
        </button>
      </div>
    );
  }
}
