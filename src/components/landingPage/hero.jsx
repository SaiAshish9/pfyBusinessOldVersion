import { Button } from "antd";
import React from "react";
import heroImg from "../../assets/img/landingPage/heroImg.png";
import chipYellowTriangle from "../../assets/img/landingPage/chipYellowTriangle.svg";
import chipRedTriangle from "../../assets/img/landingPage/chipRedTriangle.svg";
import chipCyanCircle from "../../assets/img/landingPage/chipCyanCircle.svg";
import chipNaviBlueSquare from "../../assets/img/landingPage/chipNaviBlueSquare.svg";
import chipBlueCircle from "../../assets/img/landingPage/chipBlueCircle.svg";

export default function Hero() {
  return (
    <div className="hero-main-block">
      <div className="hero-content">
        <h1 className="hero-content-heading">
          Grow your business rapidly, anytime & anywhere with our network of
          on-demand workers
        </h1>
        <p className="hero-content-para">
          Streamlined Recruiting. Easy Management. Killer Savings.
        </p>
        <Button className="hero-content-button">Get Started</Button>
        <img src={chipRedTriangle} alt="" className="chipOne" />
        <img src={chipYellowTriangle} alt="" className="chipTwo" />
        <img src={chipCyanCircle} alt="" className="chipThree" />
        <img src={chipNaviBlueSquare} alt="" className="chipFour" />
        <img src={chipBlueCircle} alt="" className="chipFive" />
      </div>
      <img src={heroImg} alt="" className="hero-img" />
    </div>
  );
}
