import React, { Suspense, Fragment, lazy } from "react";
// import Test from "../../../assets/images1/Path 4121.svg";

const Navbar = lazy(() =>
  import("../../components/desktop/CompanyPage/Navbar")
);
const GetStarted = lazy(() =>
  import("../../components/desktop/CompanyPage/GetStarted")
);
const Badges = lazy(() =>
  import("../../components/desktop/CompanyPage/Badges")
);
const Footer = lazy(() =>
  import("../../components/desktop/CompanyPage/Footer")
);
const Experience = lazy(() =>
  import("../../components/desktop/CompanyPage/Experience")
);
const Section1 = lazy(() =>
  import("../../components/desktop/CompanyPage/Section1")
);
const Partnerships = lazy(() =>
  import("../../components/desktop/CompanyPage/Partnerships")
);
const Section3 = lazy(() =>
  import("../../components/desktop/CompanyPage/Section3")
);
const Section2 = lazy(() =>
  import("../../components/desktop/CompanyPage/Section2")
);

const Company = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Fragment>
        <GetStarted />
        <Section1 />
        <Section2 />
        <Section3 />
        <Badges />
        <Experience />
        <Partnerships />
        <Footer />
      </Fragment>
    </Suspense>
  );
};

export default Company;
