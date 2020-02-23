import React from "react";
import { Link, useHistory } from "react-router-dom";
import pracifyLogo from "./pracifyLogo.png";

const Header = () => {
  const history = useHistory();
  const handleLogo = () => {
    history.push("/");
  };
  
  return (
    <div className="headerNav">
      <div className="logo-container" onClick={handleLogo}>
        <img src={pracifyLogo} alt="" className="logoIcon" />
      </div>
      <div className="link-container">
        <Link to="/gig" className="myLink">
          GIGS
        </Link>
        <Link to="/internship" className="myLink">
          INTERNSHIPS
        </Link>
      </div>
    </div>
  );
};

export default Header;
