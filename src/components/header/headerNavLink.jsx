import React from "react";
import { Button } from "antd";
import { Link as RouteLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Link } from "react-scroll";


export default function HeaderNavLink() {
  return (
    <>
      <Link
        activeClass="active"
        to="howItWork"
        smooth={true}
        duration={500}
        offset={-60}
        className="myLink1"
      >
        How it Works
      </Link>
      <Link
        activeClass="active"
        to="whyPracify"
        smooth={true}
        duration={500}
        offset={-60}
        className="myLink2"
      >
        Why Pracify
      </Link>
      <Link
        activeClass="active"
        to="ourService"
        smooth={true}
        duration={500}
        offset={-100}
        className="myLink3"
      >
        Our Services
      </Link>

      <RouteLink to="/internship" className="myLink4">
        Internship
      </RouteLink>
      <Button className="header__button1">Login</Button>
    </>
  );
}
