import React from "react";
import KSApproveImg from "../../assets/img/landingPage/KSApproveImg.png";
import KSPublishImg from "../../assets/img/landingPage/KSPublishImg.png";
import KSSelectImg from "../../assets/img/landingPage/KSSelectImg.png";
import chipYellowTriangle from "../../assets/img/landingPage/chipYellowTriangle.svg";
import chipRedTriangle from "../../assets/img/landingPage/chipRedTriangle.svg";
import chipCyanCircle from "../../assets/img/landingPage/chipCyanCircle.svg";
import chipBlueSquare from "../../assets/img/landingPage/chipBlueSquare.svg";
import chipBlueCircle from "../../assets/img/landingPage/chipBlueCircle.svg";
const content = [
  {
    image: KSPublishImg,
    heading: "PUBLISH",
    subHeading: "Create a Gig",
    para:
      "Choose tasks you want gig workers to perform on the dashboard and publish your job on Pracify",
  },
  {
    image: KSSelectImg,
    heading: "SELECT",
    subHeading: "Select Gig Workers",
    para:
      "Select gig workers who match the gig requirements so that they can start performing the tasks.",
  },
  {
    image: KSApproveImg,
    heading: "APPROVE",
    subHeading: "Review Performance",
    para:
      "Review the work submitted by gig workers and pay only for the work you approve",
  },
];
export default function KeepSimple() {
  return (
    <div className="keepSimple-main-block">
      <div className="keepSimple-message-block">
        <h1 className="keepSimple-message">
          Introducing the simplest outsourcing solution for companies.
          <br />
          Everything in one place for all your outsourcing needs.{" "}
        </h1>
        <img src={chipCyanCircle} alt="" className="chipOne" />
        <img src={chipBlueSquare} alt="" className="chipTwo" />
        <img src={chipYellowTriangle} alt="" className="chipThree" />
        <img src={chipRedTriangle} alt="" className="chipFour" />
        <img src={chipBlueCircle} alt="" className="chipFive" />
      </div>
      <div className="content-main-block">
        {content.map((content, index) => (
          <div className="content-block" key={index}>
            <img src={content.image} alt="" className="content-img" />
            <h1 className="content-heading">{content.heading}</h1>
            <h2 className="content-subHeading">{content.subHeading}</h2>
            <p className="content-para">{content.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
