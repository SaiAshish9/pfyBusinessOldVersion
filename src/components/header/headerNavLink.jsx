import React from "react";
import { Button } from "antd";
import {} from "react-router-dom";
import { useHistory, Link } from "react-router-dom";
import cookie from "js-cookie";

export default function HeaderNavLink() {
  const history = useHistory();
  const handleDummyLogin = () => {
    cookie.set("token", "123");
    history.push("/dashboard");
  };
  return (
    <>
      <a href="https://pracify.com/" target="_blank" className="">
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
