import React from "react";
import { Tabs } from "antd";
import Campaign from "./campaign";

const { TabPane } = Tabs;

const campaign = [
  "Marketing",
  "Research and Auditing",
  "Business Development",
  "Data Moderation",
  "Freelance",
];

const marketing = {
  facebook: [
    "Facebook Amplification",
    "Facebook Live",
    "Facebook Polls",
    "Facebook Content Creation",
  ],
  instagram: [
    "Instagram Amplification",
    "Instagram Live",
    "Instagram Polls",
    "Instagram Content Creation",
  ],
  snapchat: ["Snapchat Amplification", "Snapchat Content Creation"],
  whatsApp: ["WhatsApp Content Creation"],
  tikTok: ["TikTok Content Creation", "TikTok Live"],
  other: ["other other"],
};

const researchAndAuditing = [
  "Mystery Audit",
  "Non Mystery Audit",
  "Online Survey",
  "Customer Experiencing Survey",
  "Beta Testing",
  "Personal Interviews",
  "Product Reviews",
];

const businessDevelopment = [
  "Vendor Acquisition",
  "Address Verification",
  "Lead Generation",
  "Social Sales",
  "Customer Onboarding",
  "Field Sales",
];

const dataModeration = [
  "Data Entry",
  "Data Digitisation",
  "Data Curation",
  "Data Transcription",
];

const freelance = [
  "Design",
  "Mobile Development",
  "Web Development",
  "Writing",
  "Translation Services",
];

export default function NewGig() {
  const specificCampaign = (campaignName) => (
    <div className="campaign-main-block">
      {campaignName.map((name, index) => {
        const fullName = name.split(" ");
        // console.log(fullName);
        return (
          <Campaign
            firstName={fullName[0]}
            lastName={`${fullName[1] ? fullName[1] : ""} ${
              fullName[2] ? fullName[2] : ""
            }`}
            key={index}
          />
        );
      })}
    </div>
  );

  return (
    <>
      {campaign.map((name, index) => (
        <div key={index} className="new-gig-block">
          <h1 className="">{name}</h1>
          {name === "Marketing" && (
            <Tabs defaultActiveKey="1" className="marketing-section">
              <TabPane tab="Facebook" key="1" className="facebook-block">
                {specificCampaign(marketing.facebook)}
              </TabPane>
              <TabPane tab="Instagram" key="2" className="instagram-block">
                {specificCampaign(marketing.instagram)}
              </TabPane>
              <TabPane tab="Snapchat" key="3">
                {specificCampaign(marketing.snapchat)}
              </TabPane>
              <TabPane tab="WhatsApp" key="4">
                {specificCampaign(marketing.whatsApp)}
              </TabPane>
              <TabPane tab="TikTok" key="5">
                {specificCampaign(marketing.tikTok)}
              </TabPane>
              <TabPane tab="Others" key="6">
                {specificCampaign(marketing.other)}
              </TabPane>
            </Tabs>
          )}
          {name === "Research and Auditing" &&
            specificCampaign(researchAndAuditing)}

          {name === "Business Development" &&
            specificCampaign(businessDevelopment)}

          {name === "Data Moderation" && specificCampaign(dataModeration)}

          {name === "Freelance" && specificCampaign(freelance)}
        </div>
      ))}
    </>
  );
}
