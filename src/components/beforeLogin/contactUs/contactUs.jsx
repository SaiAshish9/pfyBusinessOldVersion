import { Tabs } from "antd";
import React, { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";

import businessImg from "../../../assets/img/contactUs/businessImg.svg";
import partnerImg from "../../../assets/img/contactUs/partnerImg.svg";
import userImg from "../../../assets/img/contactUs/userImg.svg";
import { GetUserDetailForm } from "./fillDetail";
import { useMediaQuery } from "react-responsive";
import Footer from "../landingPage/components/desktop/CompanyPage/Footer";
import MFooter from "../landingPage/components/mobile/general/Footer";
import MNavbar from "../landingPage/components/mobile/general/Navbar";
import MContent from './mcontent'

const { TabPane } = Tabs;


const contactUsData = [
  {
    head: "User Support",
    para:
      "A bit stuck? Sorry to hear that. There's an easy way to contact us via the button below:",
    img: userImg,
    form: <GetUserDetailForm contactName="user" />,
  },
  {
    head: "For Business",
    para:
      "If you'd prefer to talk with a real human, just call us. We're friendly and available on the phone at : +91 - 9582033304",
    img: businessImg,
    form: <GetUserDetailForm contactName="business" />,
  },
  {
    head: "Partner With Us",
    para:
      "We love partnering with college clubs and societies across India. Partner with us for various brand campaigns and secure cash sponsorship for your event.",
    img: partnerImg,
    form: <GetUserDetailForm contactName="partner" />,
  },
];

export default function ContactUs() {
  const history = useHistory();
  const [contactTo, setContactTo] = useState();
  console.log(contactTo);

  const media = useMediaQuery({
    query: "(min-width:600px)"
  })

  useEffect(() => {
    window.scrollTo("0", "0");
  }, []);

  const getContactData = (contactData) => {
    return (
      <div className="contact-us-block">
        {contactData && (
          <>
            <h1 className="contact-us-head">{contactData.head}</h1>
            <p className="contact-us-para">{contactData.para}</p>
            <div className="contact-us-img-block">
              <img src={contactData.img} alt="" className="contact-us-img" />
            </div>
            <div className="contact-us-form-block">{contactData.form}</div>
          </>
        )}
      </div>
    );
  };

  return (
    <div>
      {media && (
        <div className="contact-us-main-block">
          <Tabs defaultActiveKey="1" type="card" className="contact-us-tab">
            <TabPane tab="User Support" key="1">
              {getContactData(contactUsData[0])}
            </TabPane>
            <TabPane tab="For Business" key="2">
              {getContactData(contactUsData[1])}
            </TabPane>
            <TabPane tab="Partner With Us" key="3">
              {getContactData(contactUsData[2])}
            </TabPane>
          </Tabs>
          <Footer />
        </div>
      )}

    {
      !media &&(
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop:"10vh"
        }}
        >
          <MNavbar/>
          <MContent content={contactUsData}/>
          <MFooter/>
        </div>
      )
    }

    </div>
  );
}
