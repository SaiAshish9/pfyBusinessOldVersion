import React from "react";
import showOffImg from "../../assets/img/gig/showOffImg.svg";
import { Tabs, Button } from "antd";
import Campaign from "./campaign";

const { TabPane } = Tabs;

const campaign = [
  "Marketing",
  "Research and Auditing",
  "Business Development",
  "Data Moderation",
  "Data Moderation",
];

const researchAndAuditing = [
  "Mystery Audit",
  "Non Mystery Audit",
  "Online Survey",
  "Customer Experiencing Survey",
  "Beta Testing",
  "Personal Interviews",
  "Product Reviews",
];

export default function Gig() {
  const css = "font-size:30px";

  return (
    <div className="gig-main-block">
      <h1 className="gig-main__header">Gigs</h1>
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
        <TabPane tab="New Gigs" key="1">
          {campaign.map((name, index) => (
            <div key={index} className="new-gig-block">
              <h1 className="">{name}</h1>
              {name === "Marketing" && (
                <Tabs defaultActiveKey="1" className="marketing-block">
                  <TabPane tab="Facebook" key="1" className="facebook-block">
                    <Campaign
                      firstName="Facebook"
                      lastName="Amplification" // campaignForm={requestCampaign}
                    />
                    <Campaign firstName="Facebook" lastName="Live" />
                    <Campaign firstName="Facebook" lastName="Polls" />
                    <Campaign
                      firstName="Facebook"
                      lastName="Content Creation"
                    />
                  </TabPane>
                  <TabPane
                    tab="Instagram"
                    key="2"
                    className="instagram-block"
                  ></TabPane>
                  <TabPane tab="Snapchat" key="3"></TabPane>
                  <TabPane tab="WhatsApp" key="4"></TabPane>
                  <TabPane tab="TikTok" key="5"></TabPane>
                  <TabPane tab="Others" key="6"></TabPane>
                </Tabs>
              )}
              {name === "Research and Auditing" && (
                <div className="facebook-block">
                  {researchAndAuditing.map((name, index) => {
                    const fullName = name.split(" ");
                    console.log("%c %s", css, fullName);
                    return (
                      <Campaign
                        firstName={fullName[0]}
                        lastName={`${fullName[1]} ${fullName[2]}`}
                        key={index}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </TabPane>
        <TabPane tab="Existing Gigs" key="2" className="existing-gig-block">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  );
}
