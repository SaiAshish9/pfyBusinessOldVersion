import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from'axios';

// TODO API Config
// is_api_endpoint_valid 
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://10.5.50.80:5000" : "https://business.pracify.com:5000";
axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN";


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
