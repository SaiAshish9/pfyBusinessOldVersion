import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import CustomCampaign from "./customCampaign";
import modalSvg from "../../assets/img/gig/modalSvg.svg";

const css = "font-size:30px";
export default function Campaign({ firstName, lastName }) {
  const [modalVisible, setModalVisible] = useState(false);
  const fullName = `${firstName} ${lastName}`;

  const modalFooter = (
    <div className="custom-modal-footer">
      <Button className="goBack-button">Go Back</Button>
      <Button className="contactUs-button">Contact Us</Button>
    </div>
  );

  const handleCreateCampaign = () => {
    setModalVisible(true);
  };

  const handleCancel = (e) => {
    console.log(e);
    setModalVisible(false);
  };
  const modalTitle = (
    <div className="custom-modal-title">
      <img src={modalSvg} alt="" className="modal-title__img" />
      <div className="modal-title-content">
        <h1 className="modal-title__header">{`${firstName} ${lastName}`}</h1>
        <p className="modal-title__para">
          Fill the details below and our team will contact you
        </p>
      </div>
    </div>
  );

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
        <CustomCampaign isModalVisible={modalVisible} fullName={fullName} />
      ) : (
        <Modal
          title={modalTitle}
          visible={modalVisible}
          footer={modalFooter}
          // centered={true}
          onCancel={handleCancel}
          className="contactToAdmin-modal"
        >
          <div className="requirement-block">
            <p className="">Tell Us Your Requirements</p>
            <Input className="requirement__input"></Input>
          </div>
          <div className="budget-block">
            <p className="">Tell Us Your Budget</p>
            <Input className="budget__input"></Input>
          </div>
          <div className="quantity-block">
            <p className="">Quantity of Tasks and Taskers</p>
            <Input className="quantity__input"></Input>
          </div>
        </Modal>
      )}
    </div>
  );
}
