import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './LandingPage/LandingPage.js';
import { firebase } from './firebase/firebase'

ReactDOM.render(<LandingPage />, document.getElementById('root'));
