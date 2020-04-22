import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import showOffImg from "../../assets/img/gig/showOffImg.svg";

export default function CompanyHome() {
  const history = useHistory();
  console.log("run!");

  const handleButtonLink = (linkName) => {
    switch (linkName) {
      case "gig": {
        history.push("/gigs");
        return;
      }
      case "internship": {
        history.push("/internship");
        return;
      }
      case "campusMarketing": {
        history.push("/campus-marketing");
        return;
      }
      case "studentOffer": {
        history.push("/student-offer");
        return;
      }
      default: {
        history.push("/home");
      }
    }
    // if (linkName === "gig") {
    //   history.push("/gigs");
    // } else if (linkName === "internship") {
    //   history.push("/internship");
    // } else if (linkName === "campusMarketing") {
    //   history.push("/campus-marketing");
    // } else {
    //   history.push("/");
    // }
  };
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
          <Button
            onClick={() => handleButtonLink("gig")}
            className="gig-button"
          >
            TRY NOW
          </Button>
        </div>

        <div className="internship-link-block">
          <p className="about-internship-link">
            Lorem Ipsum is simply dummy text of the printing typesetting
            industry. Lorem Ipsum has been the
          </p>
          <h2 className="internship-name">Internships</h2>
          <Button
            onClick={() => handleButtonLink("internship")}
            className="internship-button"
          >
            TRY NOW
          </Button>
        </div>

        <div className="campusMarketing-link-block">
          <p className="about-campusMarketing-link">
            Lorem Ipsum is simply dummy text of the printing typesetting
            industry. Lorem Ipsum has been the
          </p>
          <h2 className="campusMarketing-name">Campus Marketing</h2>
          <Button
            onClick={() => handleButtonLink("campusMarketing")}
            className="campusMarketing-button"
          >
            TRY NOW
          </Button>
        </div>

        <div className="studentOffer-link-block">
          <p className="about-studentOffer-link">
            Lorem Ipsum is simply dummy text of the printing typesetting
            industry. Lorem Ipsum has been the
          </p>
          <h2 className="studentOffer-name">Student Offers</h2>
          <Button
            onClick={() => handleButtonLink("studentOffer")}
            className="studentOffer-button"
          >
            TRY NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
