/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, forwardRef, useState, useEffect } from "react";
import { Element } from "react-scroll";

import FrontBlock from "./frontBlock";
import StepIncluded from "./stepIncluded";
import WhyItWork from "./whyItWork";
import WorkWeExecute from "./workWeExecute";
import DownloadApp from "./downloadApp";
import Footer from "./footer";
import { HeaderStyled } from "./homeStyled";
import logo from "./images/logo.png";
import "../../../node_modules/aos/dist/aos.css";

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
