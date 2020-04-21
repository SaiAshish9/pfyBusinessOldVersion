import React from "react";
import { Button } from "antd";
import {} from "react-router-dom";
import { useHistory, Link } from "react-router-dom";
import cookie from "js-cookie";

import { Link as ScrollLink } from "react-scroll";

export default function HeaderNavLink() {
  const history = useHistory();
  const handleDummyLogin = () => {
    cookie.set("token", "123");
    history.push("/home");
  };
  return (
    <>
      <ScrollLink
        activeClass="active"
        to="howItWork"
        smooth={true}
        duration={500}
        offset={-60}
        className="myLink1"
      >
        How it Works
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="whyPracify"
        smooth={true}
        duration={500}
        offset={-60}
        className="myLink2"
      >
        Why Pracify
      </ScrollLink>
      <ScrollLink
        activeClass="active"
        to="ourService"
        smooth={true}
        duration={500}
        offset={-100}
        className="myLink3"
      >
        Our Services
      </ScrollLink>

      {/* <RouteLink to="/internship" className="myLink4">
        Internship
      </RouteLink> */}
      <Link to="/login">
        <Button className="header__button1">Login</Button>
      </Link>

      <Button onClick={handleDummyLogin} className="header__button1">
        {"-- Login --"}
      </Button>
    </>
  );
}
