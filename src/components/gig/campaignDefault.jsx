import React from "react";
import { Modal, Button, Input } from "antd";
import modalSvg from "../../assets/img/modalSvg.svg";

export default function DefaultCampaign({
  campaignTitle,
  modalVisible,
  handleCancel,
}) {
  const modalFooter = (
    <div className="custom-modal-footer">
      <Button className="goBack-button">Go Back</Button>
      <Button className="contactUs-button">Contact Us</Button>
    </div>
  );

  const modalTitle = (
    <div className="custom-modal-title">
      <img src={modalSvg} alt="" className="modal-title__img" />
      <div className="modal-title-content">
        <h1 className="modal-title__header">{`${campaignTitle}`}</h1>
        <p className="modal-title__para">
          Fill the details below and our team will contact you
        </p>
      </div>
    </div>
  );
  return (
    <Modal
      title={`${campaignTitle}`}
      visible={modalVisible}
      footer={modalFooter}
      onCancel={handleCancel}
      className="contactToAdmin-modal"
      width={860}
    >
      <div className="default-block">
        <p className="requirement__p">Please share your requirement</p>
        <Input className="requirement__input"></Input>

        <p className="budget__p">Please tell us your budget</p>
        <Input className="budget__input"></Input>
        <p className="budget__p">How many gig workers do you want to hire?</p>
        <Input className="budget__input"></Input>

        <p className="quantity__p">Any additional information (optional)</p>
        <Input className="quantity__input"></Input>
      </div>
    </Modal>
  );
}
