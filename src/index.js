import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faGoogle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartArrowDown, faChevronLeft, faChevronRight, faEnvelope, faPhone, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faPhone, faFacebook, faGoogle, faLinkedin, faTwitter, faSearch, faUser, faCartArrowDown, faChevronLeft, faChevronRight)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
