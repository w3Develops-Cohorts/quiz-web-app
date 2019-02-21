import React, { Component } from 'react';
import logo from './logo.png';
import Navigation from './Navigation.js';
import Welcome from './Welcome.js';
import CreateQuiz from './CreateQuiz.js';
import TakeQuiz from './TakeQuiz.js';
import AboutUs from './AboutUs.js';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header >
        	{/**** Navigation Component ****/}
        	<Navigation />
        </header>
        <body>
        	{/**** Welcome Component ****/}
        	<Welcome />

        	{/**** Create a Quiz Component ****/}
        	<CreateQuiz />

        	{/**** Take a Quiz Component ****/}
        	<TakeQuiz />

       		{/**** About Us Component ****/}
        	<AboutUs />
        	
        </body>
      </div>
    );
  }
}

export default LandingPage;