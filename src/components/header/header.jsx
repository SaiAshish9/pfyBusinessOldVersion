import React, { useState } from "react";
import { Scroll } from "react-fns";
import { useHistory } from "react-router-dom";
// import DesktopNav from "./desktopNav";
import HeaderNavLink from "./headerNavLink";
import pracifyLogo from "../../assets/img/logoDark.png";
import MobileNavIcon from "./mobileNavIcon";

const Header = () => {
  const history = useHistory();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLogo = () => {
    history.push("/");
  };

  const handleNavIconClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleWrapper = () => {
    setIsNavOpen(!isNavOpen);
  };

  console.log(isNavOpen);

  const myMobileNav = {
    transition: "transform 1s ease-in-out",
    transform: isNavOpen ? "translate(0%,0px)" : "translate(100%,0px)",
  };

  return (
    <div>
      <Scroll
        render={({ x, y }) => {
          // console.log(y);
          return (
            <div className="main-nav">
              <div
                className="headerNav"
                style={{
                  transition: "all 0.6s ease 0s",
                  boxShadow: y > 20 ? "0px 2px 16px -6px black" : "none",
                }}
              >
                <div className="logo-container" onClick={handleLogo}>
                  <img src={pracifyLogo} alt="" className="logoIcon" />
                </div>

                <div className="link-container">
                  <HeaderNavLink></HeaderNavLink>
                </div>

                <div onClick={handleNavIconClick} className="mobile-nav-menu">
                  <MobileNavIcon />
                </div>
              </div>
              <div className="mobile-nav" style={myMobileNav}>
                <div className="mobile-nav-link">
                  <HeaderNavLink></HeaderNavLink>
                </div>
              </div>
            </div>
          );
        }}
      />
      {isNavOpen && <div className="wrapper" onClick={handleWrapper}></div>}
    </div>
  );
};

export default Header;
