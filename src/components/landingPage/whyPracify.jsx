import React from "react";
import circle16 from "../../assets/img/landingPage/circle16.svg";
import circle38 from "../../assets/img/landingPage/circle38.svg";
import WPOutcomeIcon from "../../assets/img/landingPage/WPOutcomeIcon.svg";
import WPRealTimeIcon from "../../assets/img/landingPage/WPRealTimeIcon.svg";
import WPEndToEndIcon from "../../assets/img/landingPage/WPEndToEndIcon.svg";
import WPPanIndiaIcon from "../../assets/img/landingPage/WPPanIndiaIcon.svg";

import chipYellowTriangle from "../../assets/img/landingPage/chipYellowTriangle.svg";
import chipRedTriangle from "../../assets/img/landingPage/chipRedTriangle.svg";
import chipCyanCircle from "../../assets/img/landingPage/chipCyanCircle.svg";
import chipBlueSquare from "../../assets/img/landingPage/chipBlueSquare.svg";

const whyPracifyData = [
  {
    image: WPOutcomeIcon,
    headerOne: "OUTCOME BASED",
    headerTwo: "PAYOUT",
    para:
      "Make Gig economy work for your business and spend zero money on hiring. We charge only for the work approved, not manpower employed",
  },
  {
    image: WPRealTimeIcon,
    headerOne: "REAL TIME",
    headerTwo: "TRACKING",
    para:
      "Keep a check on the performance of workers by tracking work completed on the ground directly via our partner dashboard",
  },
  {
    image: WPEndToEndIcon,
    headerOne: "END TO END",
    headerTwo: "EXECUTION",
    para:
      "We've streamlined end to end management processes in minutes. It couldn't get this faster, or easier",
  },
  {
    image: WPPanIndiaIcon,
    headerOne: "PAN INDIA",
    headerTwo: "EXECUTION",
    para:
      "We make scaling business in unknown territories easy for you. Hire on demand workers for your business throughout India on Pracify",
  },
];
export default function WhyPracify() {
  return (
    <div className="why-pracify-block">
      <div className="why-pracify-header-block">
        <h1 className="why-pracify-header">
          Achieve your business goals on Pracify.
          <br /> The whole process is simple, easy & safe.
          {/* <img src={circle16} alt="" className="header-img-one" />
          <img src={circle38} alt="" className="header-img-two" />
      */}{" "}
        </h1>
        <img src={chipRedTriangle} alt="" className="chipOne" />
        <img src={chipYellowTriangle} alt="" className="chipTwo" />
        <img src={chipBlueSquare} alt="" className="chipThree" />
        <img src={chipCyanCircle} alt="" className="chipFour" />
      </div>
      <div className="why-pracify-disc-main-block">
        {whyPracifyData.map((whyPracifyData, index) => (
          <div className="whyPracify-desc-block" key={index}>
            <div className="whyPracify-desc-img-block">
              <img
                src={whyPracifyData.image}
                alt=""
                className="whyPracify-desc__img"
              />
            </div>
            <h2 className="whyPracify-desc__headerOne">
              {whyPracifyData.headerOne}
            </h2>
            <h2 className="whyPracify-desc__headerTwo">
              {whyPracifyData.headerTwo}
            </h2>
            <p className="whyPracify-desc__para">{whyPracifyData.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
