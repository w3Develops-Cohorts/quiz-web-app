import React, { Component } from 'react';
import './Navigation.css';
import logo from '../LandingPage/logo.png'

class Navigation extends Component {
    menuControl() {
        for (var i = 0; i < document.getElementsByClassName('navLink').length; i++){
            var link = document.getElementsByClassName('navLink')[i];
            if (link.style.display==="block"){
                link.style.display = "none";
            } else {
                link.style.display = "block";
            }
        }
    }

  render() {
    return (
      <div className = "navBar">
         <div className="navBarHeader">
            <img src={logo} alt="logo" className = "logoClass"/>
            <span className="open-menu" onClick={this.menuControl}>&#9776;</span>
         </div>
         <a className="navLink" href="">Make a Quiz</a>
         <a className="navLink" href="">Take a Quiz</a>
	       <a className="navLink" href="">About Us</a>
      </div>
    );
  }
}

export default Navigation;