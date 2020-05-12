import React, { useState, useEffect } from "react";
import Campaign from "./campaign";
import marketingIcon from "../../assets/img/gig/campaignCategoryIcon/marketingIcon.svg";
import BDIcon from "../../assets/img/gig/campaignCategoryIcon/BDIcon.svg";
import dataModerationIcon from "../../assets/img/gig/campaignCategoryIcon/dataModerationIcon.svg";
import RandAIcon from "../../assets/img/gig/campaignCategoryIcon/RandAIcon.svg";
import freelanceIcon from "../../assets/img/gig/campaignCategoryIcon/freelanceIcon.svg";
import { Tabs, Skeleton } from "antd";
import ExistingGig from "./existingGig";
import NewGig from "./newGig";
import GigTable from "../gigTable";
import arrowIcon from "../../assets/img/arrowIcon.svg";
import axios from 'axios';

const { TabPane } = Tabs;

const gigTabTitle = [
  {
    image: marketingIcon,
    title: "Marketing",
  },
  {
    image: BDIcon,
    title: "Business Development",
  },
  {
    image: dataModerationIcon,
    title: "Data Moderation",
  },
  {
    image: RandAIcon,
    title: "Research & Auditing",
  },
  {
    image: freelanceIcon,
    title: "Freelance",
  },
];

const marketing = [
  "WhatsApp Marketing",
  "Facebook Amplification",
  "Instagram Amplification",
  "Snapchat Amplification",
  "Instagram Content Creation",
  "Facebook Content Creation",
  "TikTok Content Creation",
  "Snapchat Content Creation",
  "Facebook & Instagram Live",
  "Facebook & Instagram Polls",
  "Mobile App Installs",
  "Online Reviews",
  "Play Store Reviews",
  "App Store Reviews",
  "Website SignUp",
  "Flyer Distribution (Campus)",
  "Comment Engagement",
  "Sampling Activity",
  "Pasting Posters (Campus)",
  "Increase Social Media Followers",
];

const BD = [
  "Vendor Acquisition",
  "Address Verification",
  "Lead Generation",
  "Social Sales",
  "Customer Onboarding",
  "Field Sales",
];

const dataModeration = [
  "Data Entry",
  "Data Digitization",
  "Data Curation",
  "Data Transcription",
];

const RandA = [
  "Mystery Audit",
  "Non Mystery Audit",
  "Online Survey",
  "Customer Experience Survey",
  "Beta Testing",
  "Personal Interviews",
  "Product Reviews",
];

const freelance = [
  "Design",
  "Mobile Development",
  "Web Development",
  "Writing",
  "Translation Services",
];

const gigTab = gigTabTitle.map((data, index) => (
  <div className="title-block" key={index}>
    <img src={data.image} alt="" className="title-img" />
    <p className="title-para">{data.title}</p>
  </div>
));

export default function Gig() {
  const css = "font-size:30px";


  const [key, setKey] = useState(0);
  const [gigs, setGigs] = useState(null);

  const campaign = (title) => (
    <>
      {title.map((data, index) => (
        <Campaign campaignTitle={data} key={index} />
      ))}
    </>
  );

  useEffect(() => {
    const url = `mission/get_company_missions`;
    axios.get(url)
      .then(res => {
        const {data} = res
        console.log('GIGS ARE ',data)
        setGigs(data)
      })
  }, [])



  return (
    <div className="gig-main-block">
      {gigs ?  <GigTable gigs={gigs} /> : <Skeleton active /> }
      <h2 className="create-campaign-heading">Creat New Gig</h2>
      <Tabs
        activeKey={`${key}`}
        className="createGigTab"
        animated={true}
        type="card"
        onTabClick={(key) => {
          setKey(key);
        }}
      >
        <TabPane tab={gigTab[0]} key="1" className="">
          <div className="create-campaign-main-block">
            {campaign(marketing)}
          </div>
        </TabPane>
        <TabPane tab={gigTab[1]} key="2" className="">
          <div className="create-campaign-main-block">{campaign(BD)}</div>
        </TabPane>
        <TabPane tab={gigTab[2]} key="3" className="">
          <div className="create-campaign-main-block">
            {campaign(dataModeration)}
          </div>
        </TabPane>
        <TabPane tab={gigTab[3]} key="4" className="">
          <div className="create-campaign-main-block">{campaign(RandA)}</div>
        </TabPane>
        <TabPane tab={gigTab[4]} key="5" className="">
          <div className="create-campaign-main-block">
            {campaign(freelance)}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
