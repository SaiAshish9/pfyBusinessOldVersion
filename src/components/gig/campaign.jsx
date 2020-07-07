import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button, Input } from "antd";
import CustomCampaign from "./campaignCustom";
import DefaultCampaign from "./campaignDefault";
import arrowIcon from "../../assets/img/arrowIcon.svg";

const css = "font-size:30px";

const builders = [
  "WhatsApp Marketing",
  "Facebook Amplification",
  "Instagram Amplification",
  "Snapchat Amplification"
]
export default function Campaign({ campaignTitle,title }) {
  const history = useHistory();
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreateCampaign = () => {
    builders.includes(campaignTitle) 
      ? history.push(`/create-campaign/${title}/${campaignTitle}`)
      : setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className="gig-campaign-content-block">
      <h3 className="campaign-content-header">{campaignTitle}</h3>
      <h5 className="campaign-content-button" onClick={handleCreateCampaign}>
        Create Campaign <img src={arrowIcon} alt="" />{" "}
      </h5>
      <DefaultCampaign
        campaignTitle={campaignTitle}
        modalVisible={modalVisible}
        handleCancel={handleCancel}
      ></DefaultCampaign>
    </div>
  );
}
