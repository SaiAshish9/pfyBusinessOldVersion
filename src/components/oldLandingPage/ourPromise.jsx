import React from "react";
import { Button } from "antd";
import mainImage from "../../assets/img/landingPage/mainImage.svg";

export default function OurPromise() {
  return (
    <div className="our-promise-block">
      <h1 className="our-promise__header">
        Streamlined Recruiting. <br /> Easy Management.
        <br /> Killer Savings.
      </h1>
      <p className="our-promise__para">
        Introducing the simplest outsourcing solution for companies. Everything
        in one place for all your outsourcing needs.
      </p>
      <Button className="our-promise__button">Get Started</Button>
      <img src={mainImage} alt="" className="our-promise__img" />
    </div>
  );
}
