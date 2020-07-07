import { Button } from "antd";
import React, { useState, useEffect } from "react";
import FillDetail from "../contactUs/fillDetail";
import brandPartnershipIcon from "../../../assets/img/partnerWithPracify/brandPartnershipIcon.svg";
import cashSponsorshipIcon from "../../../assets/img/partnerWithPracify/cashSponsorshipIcon.svg";
import promoteEventIcon from "../../../assets/img/partnerWithPracify/promoteEventIcon.svg";
import rightArrowIconLight from "../../../assets/img/rightArrowIconLight.svg";
import Footer from "../landingPage/components/desktop/CompanyPage/Footer";

import PartnershipBenefits from './partnershipBenefits'


const pwpData = [
  {
    img: cashSponsorshipIcon,
    head: "Cash Sponsorship",
    para: "Earn cash sponsorship by completing simple tasks",
  },
  {
    img: brandPartnershipIcon,
    head: "Brand Partnerships",
    para: "Distribute brand goodies & vouchers at your college events",
  },
  {
    img: promoteEventIcon,
    head: "Promote Event",
    para: "Promote your college event among Pracify users",
  },
];

export default function PartnerWithPracify() {
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

  useEffect(() => {
    window.scrollTo("0", "0");
  }, []);

  return (
    <>
      <div className="pwp-main-block">
        <div className="pwp-hero-block">
          <h1 className="pwp-hero-head">Partner with Pracify!</h1>
          <p className="pwp-hero-para">
            We love partnering with college societies and student clubs across
            India.
            <br />
            We know you usually need sponsorship to organize a great event and
            we've got a way to help with you
            <br /> that, just complete some tasks and earn cash sponsorship for
            your college festival.
          </p>

          <Button
            onClick={() => handleContactUs("partner")}
            className="pwp-hero-button"
          >
            Let's Partner
            <span className="pwp-hero-span">
              <img src={rightArrowIconLight} alt="" className="" />
            </span>
          </Button>
        </div>
        {/* <h1 className="partnership-advantage">Partnership Advantages</h1>
=======
        <h1 className="partnership-advantage">Partnership Advantages</h1>
        <div className="partnership-advantage-main-block">
          {pwpData.map((data, index) => (
            <div className="partnership-advantage-block" key={index}>
              <img
                src={data.img}
                alt=""
                className="partnership-advantage-img"
              />
              <h1 className="partnership-advantage-head">{data.head}</h1>
              <p className="partnership-advantage-para">{data.para}</p>
            </div>
          ))}
        </div>
        <div className="partnership-button-block">
          {/* <Button
          onClick={() => handleContactUs("partner")}
          className="partnership-button"
        >
          Let's Partner
<<<<<<< HEAD
        </Button> 
        </div> */}


<PartnershipBenefits/>

        <FillDetail
          contactName={contactTo}
          modalVisible={contactUsVisible}
          handleCancelModal={handleCancelModal}
        ></FillDetail>
      </div>
      <Footer />
    </>
  );
}
