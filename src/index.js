import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import "circular-std";
import "moment";

// TODO API Config
// is_api_endpoint_valid
axios.defaults.baseURL = "https://pracify.com/testing/";
axios.defaults.headers.common["companytoken"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTZmMjdkNzhlZTNjNzZkZDlkNzQ1NjUiLCJpYXQiOjE1ODQzNDMxMDAsImV4cCI6MTU5Mjk4MzEwMH0.ccdnV5YPtFYcz_Q4zRJfCRzu9xhloN3f3ENK4JtdC_Q"
ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
