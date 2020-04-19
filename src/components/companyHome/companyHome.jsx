import React from "react";
import { Button } from "antd";
import showOffImg from "../../assets/img/gig/showOffImg.svg";

export default function CompanyHome() {
  console.log("run!");
  return (
    <div className="gig-main-block">
      <h1 className="gig-main__header">Home</h1>
      <div className="showOff-block" style={{ marginBottom: 30 }}>
        <img src={showOffImg} alt="" className="showOff__img" />
        <h1 className="showOff__h1">
          Some Dummy Text For The Representation !
        </h1>
        <p className="showOff__p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when.
        </p>
      </div>
    
      <div className="try-now-block">
        <div className="img-block"></div>
        <Button className="try-now__button">Try Now</Button>
      </div>

      <div className="all-link-block">
        <div className="gig-link-block">
          <p className="about-gig-link">
            Lorem Ipsum is simply dummy text of the printing typesetting
            industry. Lorem Ipsum has been the
          </p>
          <h2 className="gig-name">Gigs</h2>
          <Button className="gig-button">TRY NOW</Button>
        </div>

        <div className="internship-link-block">
          <p className="about-internship-link">
            Lorem Ipsum is simply dummy text of the printing typesetting
            industry. Lorem Ipsum has been the
          </p>
          <h2 className="internship-name">Internships</h2>
          <Button className="internship-button">TRY NOW</Button>
        </div>

        <div className="campusMarketing-link-block">
          <p className="about-campusMarketing-link">
            Lorem Ipsum is simply dummy text of the printing typesetting
            industry. Lorem Ipsum has been the
          </p>
          <h2 className="campusMarketing-name">Campus Marketing</h2>
          <Button className="campusMarketing-button">TRY NOW</Button>
        </div>

        <div className="studentOffer-link-block">
          <p className="about-studentOffer-link">
            Lorem Ipsum is simply dummy text of the printing typesetting
            industry. Lorem Ipsum has been the
          </p>
          <h2 className="studentOffer-name">Student Offers</h2>
          <Button className="studentOffer-button">TRY NOW</Button>
        </div>
      </div>
    </div>
  );
}
