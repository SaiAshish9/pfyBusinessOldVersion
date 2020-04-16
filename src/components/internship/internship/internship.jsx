import { Tabs } from "antd";
import React from "react";
import showOffImg from "../../../assets/img/gig/showOffImg.svg";
import ExistingInternship from "./existingInternship";
import NewInternship from "./newInternship";

const { TabPane } = Tabs;

export default function Internship() {
  //#region 
  //#endregion
  return (
    <div className="gig-main-block">
      <h1 className="gig-main__header">Internship</h1>
      <div className="showOff-block">
        <img src={showOffImg} alt="" className="showOff__img" />
        <h1 className="showOff__h1">
          Some Dummy Text For The Representation !
        </h1>
        <p className="showOff__p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when.
        </p>
      </div>
      <Tabs defaultActiveKey="1" className="new-or-existing-gig-block">
        <TabPane tab="New Internships" key="1">
          <NewInternship></NewInternship>
        </TabPane>
        <TabPane
          tab="Existing Internships"
          key="2"
          className="existing-gig-blocsk"
        >
          <ExistingInternship></ExistingInternship>
        </TabPane>
      </Tabs>
    </div>
  );
}
