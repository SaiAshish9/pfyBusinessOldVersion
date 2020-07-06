import React from "react";
import FAppleStoreIcon from "../../assets/img/landingPage/FAppleStoreIcon.svg";
import FCopyrightIcon from "../../assets/img/landingPage/FCopyrightIcon.svg";
import FGoogleStoreIcon from "../../assets/img/landingPage/FGoogleStoreIcon.png";
import FHeartIcon from "../../assets/img/landingPage/FHeartIcon.svg";
import logo from "../../assets/img/logo.png";
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import linkedIn from "../../assets/img/linkedin.svg";
import twitter from "../../assets/img/twitter.svg";

export default function Footer() {
  return (
    <div className="footer-main-block">
      <div className="border-block">
        <div className="pracify-section">
          {/* <h1 className="pracify__header">PRACIFY</h1> */}
          <div className="logo-block">
            <img src={logo} alt="" className="logoImg" />
          </div>
          <p className="pracify__para">
            Pracify helps companies scale using our network of on-demand workers
            comprising of India's youth.
          </p>
          <p className="address__para">
            A-117, GD-ITL Northex Tower, Netaji Subhash Place, Pitampura, New
            Delhi - 110034
          </p>
        </div>
        <div className="company-block">
          <h3 className="footer__header">Company</h3>
          <p className="footer__link">About</p>
          <p className="footer__link">Team</p>
          <p className="footer__link">Careers</p>
        </div>
        <div className="legal-block">
          <h3 className="footer__header">Legal</h3>
          <p className="footer__link">Terms & Conditions</p>
          <p className="footer__link">Privacy Policy</p>
        </div>
        <div className="get-in-touch-block">
          <h3 className="footer__header">Get In Touch</h3>
          <p className="footer__link">Contact Us</p>
          <p className="footer__link">College Festivals</p>
        </div>
      </div>
      <div className="sub-footer">
        <div className="social-block">
          <img src={facebook} alt="" className="footer__link" />
          <img src={instagram} alt="" className="footer__link" />
          <img src={linkedIn} alt="" className="footer__link" />
          <img src={twitter} alt="" className="footer__link" />
        </div>
        <p className="love__para">
          Made with <img src={FHeartIcon} alt="" className="love-icon" /> in
          India
        </p>
        <div className="download-pracify-block">
          <img
            src={FGoogleStoreIcon}
            alt=""
            className="google-playStore-icon"
          />
          <img src={FAppleStoreIcon} alt="" className="apple-playStore-icon" />
        </div>
      </div>
      <div className="copyright-block">
        <p className="copyright__para">
          Copyright{" "}
          <img src={FCopyrightIcon} alt="" className="copyright__icon" /> 2020
          Pracify. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
