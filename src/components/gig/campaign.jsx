import React, { useState } from "react";
import { Modal, Button } from "antd";

export default function Campaign({ firstName, lastName }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreateCampaign = () => {
    setModalVisible(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setModalVisible(false);
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
      <Modal
        title={`${firstName} ${lastName}`}
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      
    </div>
  );
}
