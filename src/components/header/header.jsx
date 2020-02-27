import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Scroll } from "react-fns";
import { Link } from "react-scroll";

import { useHistory } from "react-router-dom";
import pracifyLogo from "./logo.png";

const Header = () => {
  const history = useHistory();
  const handleLogo = () => {
    history.push("/");
  };

  return (
    <Scroll
      render={({ x, y }) => {
        console.log(y);
        return (
          <div
            className="headerNav"
            style={{
              transition: "all 0.6s ease 0s",
              boxShadow: y > 20 ? "0px 2px 16px -6px black" : "none"
            }}
          >
            <div className="logo-container" onClick={handleLogo}>
              <img src={pracifyLogo} alt="" className="logoIcon" />
            </div>
            <div className="link-container">
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
              <Button className="header__button1">Login</Button>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Header;
