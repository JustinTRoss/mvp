import React, { Component } from 'react';
import { LINKEDIN_ID, LINKEDIN_SECRET, STATELINKEDIN } from '../../__secrets.js';
import fetch from 'isomorphic-fetch';

export default class LinkedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: null,
      textToPost: '',
      updateUrl: '',
    };
  }

  handleClick(e) {
    const cb = () => {
      IN.API.Profile('me').result(function(r) {
        console.log(r);
      });
    }
    e.preventDefault();
    IN.User.authorize(cb, '');
  }

  componentDidMount() {
    (function (d, s, id) {
      const element = d.getElementsByTagName(s)[0];
      const ljs = element;
      var js = element;
      if (d.getElementById(id)) {
        return;
      }

      js = d.createElement(s);
      js.id = id;
      js.src = '//platform.linkedin.com/in.js';
      js.text = `api_key: ${LINKEDIN_ID}
      authorize: true`;
      ljs.parentNode.insertBefore(js, ljs);
    }(document, 'script', 'linkedin-sdk'));
  }

  render() {
    return (
      <div>
        <h2>LinkedIn</h2>
        <div id="linkedin-root">
          <button onClick={ (e) => {
              this.handleClick(e);
            }
          }>LOGIN HERE</button>
        </div>
        <form>
          <span>Input Text Here: USE AT YOUR OWN RISK</span>
          <input type="text" onChange={(e) => {
              this.setState({
                textToPost: e.target.value,
              });
            }}/>
          <input type="submit" onClick={(event) => {
            event.preventDefault();
            const bodyToPass = {
              "comment": this.state.textToPost,
              "content": {
              "title": "LinkedIn Developers Resources",
              "description": "Leverage LinkedIn's APIs to maximize engagement",
              "submitted-url": "https://developer.linkedin.com",
              "submitted-image-url": "https://example.com/logo.png"
              },
              "visibility": {
              "code": "anyone"
              }
            };

            IN.API.Raw().url('/people/~/shares?format=json').method('POST').body(JSON.stringify(bodyToPass)).result((result) => {
              this.setState({
                updateUrl: result.updateUrl,
              });
            });
            }}/>
        </form>
        <div>{this.state.updateUrl}</div>
      </div>
    );
  }
}


/*
<form>
  <span>Input Chat Here</span>
  <input type="text" onChange={(e) => {
      this.setState({
        message: e.target.value,
      });
    }}/>
  <input type="submit" onClick={(event) => {
    event.preventDefault();
    this.props.chatSubmission(this.state.message);
    }}/>
</form>*/
