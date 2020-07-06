import React from "react";
import { Button } from "antd";
import { useHistory, Link } from "react-router-dom";

export default function HeaderNavLink() {
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
    </>
  );
}
