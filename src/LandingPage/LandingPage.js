import React, { Component } from 'react';
import logo from './logo.png';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header >
          <img src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default LandingPage;