import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Welcome from '../WelcomePage/Welcome';
import CreateQuiz from '../CreateQuiz/CreateQuiz';
import TakeQuiz from '../TakeQuiz/TakeQuiz';
import AboutUs from '../AboutUs/AboutUs';
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