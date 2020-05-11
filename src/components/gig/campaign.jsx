import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button, Input } from "antd";
import CustomCampaign from "./campaignCustom";
import DefaultCampaign from "./campaignDefault";
import arrowIcon from "../../assets/img/arrowIcon.svg";

const css = "font-size:30px";

export default function Campaign({ campaignTitle }) {
  const history = useHistory();
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreateCampaign = () => {
    campaignTitle === "WhatsApp Marketing"
      ? history.push(`/create-campaign/${campaignTitle}`)
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
