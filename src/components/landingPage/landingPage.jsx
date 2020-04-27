import React from "react";
import { Element } from "react-scroll";

import OurPromise from "./ourPromise";
import WhyPracify from "./whyPracify";
import HIW from "./HIW";
import WWD from "./WWD";
import MPO from "./MPO";
import Footer from "./footer";

export default function LandingPage() {
  return (
    <div className="main-landingPage-block">
      <OurPromise></OurPromise>

      <Element name="whyPracify">
        <WhyPracify></WhyPracify>
      </Element>

      <Element name="howItWork">
        <HIW />
      </Element>

      <Element name="ourService">
        <WWD />
      </Element>

      <MPO />
      <Footer />
    </div>
  );
}
