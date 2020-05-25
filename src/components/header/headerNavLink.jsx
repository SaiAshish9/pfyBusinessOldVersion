import React from "react";
import { Button } from "antd";
import { useHistory, Link } from "react-router-dom";
import cookie from "js-cookie";

export default function HeaderNavLink() {
  const history = useHistory();
  const handleDummyLogin = () => {
    cookie.set(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTZmMjdkNzhlZTNjNzZkZDlkNzQ1NjUiLCJpYXQiOjE1ODQzNDMxMDAsImV4cCI6MTU5Mjk4MzEwMH0.ccdnV5YPtFYcz_Q4zRJfCRzu9xhloN3f3ENK4JtdC_Q"
    );
    history.push("/dashboard");
  };
  return (
    <>
      <a
        href="https://pracify.com/"
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <Button className="redirect-to-user-panel-button">
          For Gig Workers
        </Button>
      </a>
      <Link to="/register">
        <Button className="register-button">Register</Button>
      </Link>
      <Link to="/login">
        <Button className="login-button">Login</Button>
      </Link>
      <Button onClick={handleDummyLogin} className="login-button">
        Direct Login
      </Button>
    </>
  );
}
