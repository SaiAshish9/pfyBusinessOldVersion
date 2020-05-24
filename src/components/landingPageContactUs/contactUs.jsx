import React, { useState } from "react";
import { Button } from "antd";
import findPracifyImg from "../../assets/img/findPracifyImg.svg";
import Footer from "../landingPage/footer";
import FillDetail from "./fillDetail";

export default function ContactUs() {
  const [contactUsVisible, setContactUsVisible] = useState(false);
  const [contactTo, setContactTo] = useState();
  console.log(contactTo);

  const handleContactUs = (contactName) => {
    setContactUsVisible(true);
    setContactTo(contactName);
  };
  const handleCancelModal = () => {
    setContactUsVisible(false);
  };
  return (
    <>
      <div className="contactUs-main-block">
        <div className="contactUs-msg-block">
          <h1 className="contactUs-heading">Contact Us</h1>
          <p className="contactUs-para">
            Whether you're looking to partner with us, have a support question
            or a commercial query get in touch.
          </p>
        </div>
        <div className="our-contactUs-support-main-block">
          <div className="our-contactUs-support-block">
            <h4 className="find-pracify-content-head">User Support</h4>
            <p className="find-pracify-content-para">
              A bit stuck? Sorry to hear that. There's an easy way to contact us
              via the button below:
            </p>
            <Button
              className="contactUs-button"
              onClick={() => handleContactUs("user")}
            >
              Get in Touch
            </Button>
          </div>
          <div className="our-contactUs-support-block">
            <h4 className="find-pracify-content-head">For Business</h4>
            <p className="find-pracify-content-para">
              If you'd prefer to talk with a real human, just call us. We're
              friendly and available on the phone:
            </p>
            <h3 className="contactUs-location">INDIA</h3>
            <p className="find-pracify-content-para">+91 - 9582033304</p>
            <p className="find-pracify-content-para">
              or you can fill this form below and we'll get back to you:
            </p>
            <Button
              className="contactUs-button"
              onClick={() => handleContactUs("business")}
            >
              Get in Touch
            </Button>
          </div>
          <div className="our-contactUs-support-block">
            <h4 className="find-pracify-content-head">Partner with Us</h4>
            <p className="find-pracify-content-para">
              We love partnering with college clubs and societies across India.
              Partner with us for various brand campaigns and secure cash
              sponsorship for your event.
            </p>
            <Button
              className="contactUs-button"
              onClick={() => handleContactUs("partner")}
            >
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="find-pracify-block">
          <div className="find-pracify-img-block">
            <img src={findPracifyImg} alt="" className="" />
          </div>
          <div className="find-pracify-content">
            <h1 className="find-pracify-head">How to find Pracify</h1>
            <p className="find-pracify-para">
              We're based in New Delhi. If you’re visiting, or sending us
              something in the post, here is the address you'll need:
            </p>
            <p className="find-pracify-address">
              A-117, GD-ITL Northex Tower, Netaji Subhash Place, Pitampura, New
              Delhi - 110034
            </p>
          </div>
        </div>
      </div>
      <FillDetail
        contactName={contactTo}
        modalVisible={contactUsVisible}
        handleCancelModal={handleCancelModal}
      ></FillDetail>
      <Footer></Footer>
    </>
  );
}
