import React, { Component } from 'react';
import './Navigation.css';
import logo from '../../assets/images/logo.png';

class Navigation extends Component {
  render() {
    return (
      <div className = 'navBar'>
         <img src={logo} alt="logo" className = 'logoClass'/>
	         <a href="">Make a Quiz</a>
	         <a href="">Take a Quiz</a>
	         <a href="">About Us</a>
      </div>
    );
  }
}

export default Navigation;