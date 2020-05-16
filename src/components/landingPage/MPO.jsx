import React from "react";
import { Button } from "antd";
import circle16 from "../../assets/img/landingPage/circle16.svg";
import circle38 from "../../assets/img/landingPage/circle38.svg";
import MPOCampusMarketingIcon from "../../assets/img/landingPage/MPOCampusMarketingIcon.svg";
import MPOHireInternIcon from "../../assets/img/landingPage/MPOHireInternIcon.svg";
import MPOStudentOfferIcon from "../../assets/img/landingPage/MPOStudentOfferIcon.svg";
import arrowIcon from "../../assets/img/landingPage/arrowIcon.svg";

export default function MPO() {
  return (
    <div className="mpo-main-block">
      <div className="mpo-header-block">
        <h1 className="mpo__header">MORE PARTNERSHIP OPPORTUNITIES</h1>
      </div>

      <div className="mpo-main-block-two">
        <div className="mpo-block">
          <img src={MPOHireInternIcon} alt="" className="mpo__image" />
          <h3 className="mpo__header">HIRE INTERNS</h3>
          <p className="mpo__para">
            Recruit top college talent for your company by posting a free
            internship on Pracify
          </p>
          <Button className="mpo__button">
            GET STARTED <img src={arrowIcon} alt="" className="" />{" "}
          </Button>
        </div>
        <div className="mpo-block">
          <img src={MPOCampusMarketingIcon} alt="" className="mpo__image" />
          <h3 className="mpo__header">CAMPUS MARKETING</h3>
          <p className="mpo__para">
            Increase your student outreach today by exploring our campus
            marketing services
          </p>
          <Button className="mpo__button">
            GET STARTED <img src={arrowIcon} alt="" className="" />{" "}
          </Button>
        </div>
        <div className="mpo-block">
          <img src={MPOStudentOfferIcon} alt="" className="mpo__image" />
          <h3 className="mpo__header">STUDENT OFFERS</h3>
          <p className="mpo__para">
            Run student-specific discount offers by leveraging our database of
            verified students across India
          </p>
          <Button className="mpo__button">
            GET STARTED <img src={arrowIcon} alt="" className="" />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
