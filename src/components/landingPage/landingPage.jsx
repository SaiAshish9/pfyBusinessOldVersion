import React from "react";
import { Element } from "react-scroll";
import KeepSimple from "./keepSimple";
import OurPromise from "./ourPromise";
import Hero from "./hero";
import WhyPracify from "./whyPracify";
import HIW from "./HIW";
import WWD from "./WWD";
import MPO from "./MPO";
import Footer from "./footer";

export default function LandingPage() {
  return (
    <div className="main-landingPage-block">
      <Hero />
      {/* <OurPromise></OurPromise> */}
      <KeepSimple />
      <Element name="whyPracify">
        <WhyPracify></WhyPracify>
      </Element>

      <Element name="howItWork">
        {/* <HIW /> */}
      </Element>

      <Element name="ourService">
        <WWD />
      </Element>

      <MPO />
      <Footer />
    </div>
  );
}
