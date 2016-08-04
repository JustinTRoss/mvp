import React, { Component } from 'react';

export default class LinkedIn extends Component {
  constructor(props) {
    super(props);
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
      js.text = 'api_key: [YOUR_API_KEY]';
      ljs.parentNode.insertBefore(js, ljs);
    }(document, 'script', 'linkedin-sdk'));
  }

  render() {
    return (
      <div>
        <h2>LinkedIn</h2>
        <div id="linkedin-root">
        </div>
      </div>
    )
  }
}
