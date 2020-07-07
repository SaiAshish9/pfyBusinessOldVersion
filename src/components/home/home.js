/* eslint-disable jsx-a11y/alt-text */
//TODO need to be deleted and its style file as well
import "aos/dist/aos.css";
import React from "react";
import { Element } from "react-scroll";
import Footer from "./footer";
import FrontBlock from "./frontBlock";
import StepIncluded from "./stepIncluded";
import WhyItWork from "./whyItWork";
import WorkWeExecute from "./workWeExecute";

const LandingPage = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <FrontBlock />

      <Element name="howItWork">
        <StepIncluded />
      </Element>

      <Element name="whyPracify">
        <WhyItWork />
      </Element>

      <Element name="ourService">
        <WorkWeExecute />
      </Element>
      <Footer />
    </div>
  );
};

export default LandingPage;
