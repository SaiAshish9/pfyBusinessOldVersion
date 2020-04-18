import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import CustomCampaign from "./campaignCustom";
import DefaultCampaign from "./campaignDefault";

const css = "font-size:30px";

export default function Campaign({ firstName, lastName }) {
  const [modalVisible, setModalVisible] = useState(false);
  const fullName = `${firstName} ${lastName}`;

  const handleCreateCampaign = () => {
    setModalVisible(true);
  };

  const handleCancel = (e) => {
    console.log(e);
    setModalVisible(false);
  };

  return (
    <div className="campaign-block">
      <p className="campaign__p">
        {firstName}
        <br />
        {lastName}
      </p>
      <Button className="campaign__button" onClick={handleCreateCampaign}>
        Create Campaign
      </Button>
      {fullName === "WhatsApp Content Creation" ? (
        <CustomCampaign
          fullName={fullName}
          modalVisible={modalVisible}
          handleCancel={handleCancel}
        />
      ) : (
        <DefaultCampaign
          fullName={fullName}
          modalVisible={modalVisible}
          handleCancel={handleCancel}
        ></DefaultCampaign>
      )}
    </div>
  );
}
