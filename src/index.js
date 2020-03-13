import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from'axios';
import 'font-awesome/css/font-awesome.min.css';
import "circular-std";
import 'moment';

// TODO API Config
// is_api_endpoint_valid 
axios.defaults.baseURL = process.env.NODE_ENV === "development" ?   "http://35.154.129.241:5000/" : "http://10.5.50.80:5000";
axios.defaults.headers.common['companytoken'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNjMDQ4M2Q4OGZjODNjZDRmMTgzM2MiLCJpYXQiOjE1ODM1NjU3OTEsImV4cCI6MTU5MjIwNTc5MX0.P15nYFFHwsQIgL2lRc3HrQ4N_eJcgnNZgQy4OYTXcLU";


ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
