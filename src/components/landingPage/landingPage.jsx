import React from "react";
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
      <WhyPracify></WhyPracify>
      <HIW />
      <WWD />
      <MPO />
      <Footer />
    </div>
  );
}
