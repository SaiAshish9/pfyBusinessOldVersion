import { Button, Tabs } from "antd";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
/* ---------------------------------- ***** --------------------------------- */
import businessAdvtOne from "../../../assets/img/howItWork/businessAdvtOne.svg";
import businessAdvtThree from "../../../assets/img/howItWork/businessAdvtThree.svg";
import businessAdvtTwo from "../../../assets/img/howItWork/businessAdvtTwo.svg";
import gigAdvtOne from "../../../assets/img/howItWork/gigAdvtOne.svg";
import gigAdvtThree from "../../../assets/img/howItWork/gigAdvtThree.svg";
import gigAdvtTwo from "../../../assets/img/howItWork/gigAdvtTwo.svg";
import iconOne from "../../../assets/img/howItWork/iconOne.svg";
import iconThree from "../../../assets/img/howItWork/iconThree.svg";
import iconTwo from "../../../assets/img/howItWork/iconTwo.svg";

import oneHiwCompany from "../../../assets/img/howItWork/oneHiwCompany.svg";
import oneHiwWorker from "../../../assets/img/howItWork/oneHiwWorker.svg";
import threeHiwCompany from "../../../assets/img/howItWork/threeHiwCompany.svg";
import threeHiwWorker from "../../../assets/img/howItWork/threeHiwWorker.svg";
import twoHiwCompany from "../../../assets/img/howItWork/twoHiwCompany.svg";
import twoHiwWorker from "../../../assets/img/howItWork/twoHiwWorker.svg";

import propIconOne from "../../../assets/img/howItWork/propIconOne.svg";
import propIconTwo from "../../../assets/img/howItWork/propIconTwo.svg";
import Footer from "../landingPage/components/desktop/CompanyPage/Footer";


import GigWorkersAdv from './forGigWorkers'
import CompanyOwnersAdv from './forCompanyOwners'



const { TabPane } = Tabs;

const gigWorkerHead =
  "Earn money and experience by working on your own schedule";

const businessOwnerHead =
  "Scale your business using our network of on-demand workers";

const gigWorker = [
  {
    imgOne: iconOne,
    spanOne: "Find",
    spanTwo: "Gigs",
    paraOne:
      "Finding gigs on Pracify is easy, use your mobile or laptop to search and apply to gigs that match your skillset and interest.",
    paraTwo:
      "Apply using the single click 'Apply Now' button to show your interest to work with your favorite companies.",
    animation: oneHiwWorker,
  },
  {
    imgOne: iconTwo,
    spanOne: "Submit",
    spanTwo: "Proof",
    paraOne:
      "Submit proof of completed work on the mobile app or on web by sharing the screenshot or links as asked by your company.",
    paraTwo:
      "Make sure the proof matches all the requirements listed by the company to ensure it doesn't get rejected.",
    animation: twoHiwWorker,
  },
  {
    imgOne: iconThree,
    spanOne: "Get",
    spanTwo: "Paid",
    paraOne:
      "Get paid into your Pracify wallet once the company reviews your performance and approves it.",
    paraTwo:
      "You can transfer your earnings directly from your Pracify wallet into your Bank account or Paytm account.",
    animation: threeHiwWorker,
  },
];
const businessOwner = [
  {
    imgOne: iconOne,
    spanOne: "Publish",
    spanTwo: "Gigs",
    paraOne:
      "Create a Gig on Pracify with detailed description and requirements so that Gig workers matching the Gig requirements can apply to the Gig easily.",
    paraTwo: "",
    animation: oneHiwCompany,
  },
  {
    imgOne: iconTwo,
    spanOne: "Select",
    spanTwo: "Gig Workers",
    paraOne:
      "Select Gig workers who match your Gig requirements so that they can start working on your project and complete it at the earliest.",
    paraTwo: "",
    animation: twoHiwCompany,
  },
  {
    imgOne: iconThree,
    spanOne: "Review",
    spanTwo: "Performance",
    paraOne:
      "Review the performance of gig workers and approve work submitted by them if it matches the Gig requirements.",
    paraTwo: "You pay only for the work you approve!",
    animation: threeHiwCompany,
  },
];

const gigWorkerAdvantage = [
  {
    img: gigAdvtOne,
    head: "Become Financially Independent",
    para:
      "Earn money by working for you favourite companies and completing gigs that match your skillset. Its time you stop asking pocket money from your parents and become financially independent.",
  },
  {
    img: gigAdvtTwo,
    head: "Earn Work Experience",
    para:
      "Most students graduate college without gaining any work experience which increases youth unemployability. Earn valuable work experience by working for top companies on Pracify and stand out from the crowd.",
  },
  {
    img: gigAdvtThree,
    head: "Develop Your Skillset ",
    para:
      "Gigs help students and young adults to develop their personality and add important professional skills such as Communication, Team Work, Problem Solving, Leadership & ability to work under pressure.",
  },
];
const businessOwnerAdvantage = [
  {
    img: businessAdvtOne,
    head: "Built For Scale",
    para:
      "We help companies scale in a cost-efficient manner by leveraging our network of on-demand  workers throughout India.",
  },
  {
    img: businessAdvtTwo,
    head: "Risk Free",
    para:
      "You pay only for the work you approve and there are no hiring costs involved. Mitigate traditional hiring risks with Pracify.",
  },
  {
    img: businessAdvtThree,
    head: "End to End Execution",
    para:
      "We've streamlined end to end management process in minutes  making hiring, tracking & managing on-demand workers faster & easier.",
  },
];

export default function HowItWork() {
  const history = useHistory();

  const heroHead = (head) => (
    <div className="hero-head-block">
      <h1 className="hero-head">{head}</h1>
    </div>
  );

  const hiw = (allData, cls) => (
    <div className={`${cls}-hiw-main-block`}>
      {allData.map((data, index) => (
        <div key={index} className={`${cls}-hiw-block`}>
          <div className={`${cls}-hiw-img-block`}>
            <img src={data.imgOne} alt="" className={`${cls}-hiw-img`} />
          </div>
          <div className={`${cls}-hiw-head-block`}>
            <span className={`${cls}-hiw-head-spanOne`}>{data.spanOne}</span>
            <span className={`${cls}-hiw-head-spanTwo`}>{data.spanTwo}</span>
          </div>
          <div className={`${cls}-hiw-para-block`}>
            <p className={`${cls}-hiw-para-one`}>{data.paraOne}</p>
            <p className={`${cls}-hiw-para-two`}>{data.paraTwo}</p>
          </div>
          <div className={`${cls}-hiw-animation-block`}>
            <img
              src={data.animation}
              alt=""
              className={`${cls}-hiw-animation`}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const advantage = (allAdvantage, cls) => (
    <div className={`${cls}-advantage-main-block`}>
      {allAdvantage.map((data, index) => (
        <div key={index} className={`${cls}-advantage-block`}>
          <img src={data.img} alt="" className={`${cls}-advantage-img`} />
          <h1 className={`${cls}-advantage-head`}>{data.head}</h1>
          <p className={`${cls}-advantage-para`}>{data.para}</p>
        </div>
      ))}
    </div>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="howItWork-main-block">
        <Tabs defaultActiveKey="1" type="card" className="hiw-tab">
          <TabPane tab="For Gig Workers" key="1">
            {heroHead(gigWorkerHead)}
            <div className="worker-hiw-with-props">
              <img src={propIconOne} alt="" className="worker-prop-one" />
              <img src={propIconTwo} alt="" className="worker-prop-two" />
              {hiw(gigWorker, "worker")}
            </div>
            {/* <h1 className="worker-advantage-main-head">Advantages</h1>
            {advantage(gigWorkerAdvantage, "worker")} */}
            <GigWorkersAdv/>
            {/* <h1 className="worker-advantage-main-head">Advantages</h1> */}
            {/* {advantage(gigWorkerAdvantage, "worker")} */}
            <div className="hiw-btn-block">
              <Button
                className="hiw-btn"
                onClick={() => history.push("/login")}
              >
                Start Working
              </Button>
            </div>
          </TabPane>
          <TabPane tab="For business Owner" key="2">
            {heroHead(businessOwnerHead)}
            <div className="business-hiw-with-props">
              <img src={propIconOne} alt="" className="business-prop-one" />
              <img src={propIconTwo} alt="" className="business-prop-two" />
              {hiw(businessOwner, "business")}
            </div>
            {/* <h1 className="business-advantage-main-head">Advantages</h1> */}
            {/* {advantage(businessOwnerAdvantage, "business")} */}
            <CompanyOwnersAdv/>
            {/* <h1 className="business-advantage-main-head">Advantages</h1> */}
            {/* {advantage(businessOwnerAdvantage, "business")} */}
            <div className="hiw-btn-block">
              <a
                href="https://business.pracify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="hiw-btn">Publish a Gig</Button>
              </a>
            </div>
          </TabPane>
        </Tabs>
      </div>
      <Footer />
    </>
  );
}
