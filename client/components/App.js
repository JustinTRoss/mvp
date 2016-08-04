import React from 'react';

import Facebook from './Facebook.js';
import LinkedIn from './LinkedIn.js';
import Twitter from './Twitter.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <Facebook />
        <LinkedIn />
        <Twitter />
      </div>
    )
  }
}