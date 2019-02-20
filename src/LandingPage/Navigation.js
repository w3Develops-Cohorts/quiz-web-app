 import React, { Component } from 'react';
import logo from './logo.png';

class Navigation extends Component {
  render() {
    return (
      <div>
         <img src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );
  }
}

export default Navigation;