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
axios.defaults.baseURL = process.env.NODE_ENV === "development" ?   "https://pracify.com/testing/" : "http://10.5.50.80:5000";
axios.defaults.headers.common['companytoken'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTZmMjdkNzhlZTNjNzZkZDlkNzQ1NjUiLCJpYXQiOjE1ODQzNDI5OTksImV4cCI6MTU5Mjk4Mjk5OX0.Gw4fOySz4pEis0djNALlgTA09QLxutkPPXTPmzkGugE";


ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
