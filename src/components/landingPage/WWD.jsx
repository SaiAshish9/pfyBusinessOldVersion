import React from "react";
import circle16 from "../../assets/img/landingPage/circle16.svg";
import circle38 from "../../assets/img/landingPage/circle38.svg";
import WWDBusinessDevelopment from "../../assets/img/landingPage/WWDBusinessDevelopment.gif";
import WWDDataModeration from "../../assets/img/landingPage/WWDDataModeration.gif";
import WWDFreelanceImg from "../../assets/img/landingPage/WWDFreelanceImg.gif";
import WWDMarketing from "../../assets/img/landingPage/WWDMarketing.gif";
import WWDResearch from "../../assets/img/landingPage/WWDResearch.gif";
import { Tabs, Button } from "antd";
const { TabPane } = Tabs;

export default function WWD() {
  return (
    <div className="wwd-block">
      <div className="wwd-header-block">
        <h1 className="wwd-header">
          THE WORK WE DO
          {/* <img src={circle16} alt="" className="header-img-one" />
          <img src={circle38} alt="" className="header-img-two" /> */}
        </h1>
      </div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Marketing" key="1">
          <img src={WWDMarketing} alt="" className="wwd-img" />
        </TabPane>
        <TabPane tab="Business Development" key="2">
          <img src={WWDBusinessDevelopment} alt="" className="wwd-img" />
        </TabPane>
        <TabPane tab="Research" key="3">
          <img src={WWDResearch} alt="" className="wwd-img" />
        </TabPane>
        <TabPane tab="Data Moderation" key="4">
          <img src={WWDDataModeration} alt="" className="wwd-img" />
        </TabPane>
        <TabPane tab="Freelance" key="5">
          <img src={WWDFreelanceImg} alt="" className="wwd-img" />
        </TabPane>
      </Tabs>
      <div className="outSourcing-block">
        <h1 className="outSourcing__header">
          OUTSOURCING DOESN'T HAVE TO BE HARD.WE MAKE IT EASY.
        </h1>
        <p className="outSourcing__para">
          Built from the ground up to save your company money.Save time & money
          with Pracify,a tech platform built to help companies scale using our
          network of on-demand workers.
        </p>
        <Button className="outSourcing__button">CONTACT US</Button>
      </div>
    </div>
  );
}
