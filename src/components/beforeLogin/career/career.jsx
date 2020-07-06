import React, { useEffect } from "react";
import { Button } from "antd";
import careerHeroImg from "../../../assets/img/career/careerHeroImg.svg";
import rightArrowIconLight from "../../../assets/img/rightArrowIconLight.svg";
import Footer from "../landingPage/components/desktop/CompanyPage/Footer";

export default function Career() {
  useEffect(() => {
    window.scrollTo("0", "0");
  }, []);
  return (
    <>
      <div className="career-main-block">
        <div className="workWithUs-block">
          <h1 className="workWithUs-head">Work With Us</h1>
          <p className="workWithUs-para">
            Join us in building the future of work for the next billion users.
          </p>
          <Button className="openings-button">
            Open Positions
            <span className="openings-span">
              <img src={rightArrowIconLight} alt="" className="" />
            </span>
          </Button>
        </div>
        <div className="career-hero-block">
          <div className="career-hero-para-block">
            <p className="career-hero-para">
              We're building the simplest outsourcing solution for companies so
              that they can focus on scaling operations, instead of sourcing,
              managing & tracking on-demand workers.
            </p>
            <p className="career-hero-para">
              We're streamlining the end to end management processes to make the
              whole outsourcing process simpler and easier.
            </p>
            <p className="career-hero-para">
              If you think what we're doing is interesting, then we would love
              to have a discussion with you.
            </p>
          </div>
          <div className="career-hero-img-block">
            <img src={careerHeroImg} alt="" className="career-hero-img" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
