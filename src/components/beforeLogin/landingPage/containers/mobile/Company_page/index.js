import React from "react";
import Navbar from "../../../components/mobile/general/Navbar";
import Footer from "../../../components/mobile/general/Footer";
import GetStarted from "../../../components/mobile/Company_page/GetStarted";
import Section1 from "../../../components/mobile/Company_page/Section1";
import Section2 from "../../../components/mobile/Company_page/Section2";
import Section3 from "../../../components/mobile/Company_page/Section3";
import Badges from "../../../components/mobile/Company_page/Badges";
import Section4 from "../../../components/mobile/Company_page/Section4";
import Section5 from "../../../components/mobile/Company_page/Section5";

const CompanyPage = () => {
  return (
    <div
      style={{
        position: "absolute",
        background: "#fff",
        right: 0,
        top:0,
        zIndex:10,
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <GetStarted />
      <Section1 />
      <Section2 />
      <Section3 />
      <Badges />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default CompanyPage;
