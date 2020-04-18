import React from "react";
import { Modal, Button, Input } from "antd";
import modalSvg from "../../assets/img/modalSvg.svg";

export default function DefaultCampaign({
  fullName,
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
        <h1 className="modal-title__header">{`${fullName}`}</h1>
        <p className="modal-title__para">
          Fill the details below and our team will contact you
        </p>
      </div>
    </div>
  );
  return (
    <Modal
      title={modalTitle}
      visible={modalVisible}
      footer={modalFooter} // centered={true}
      onCancel={handleCancel}
      className="contactToAdmin-modal"
    >
      <div className="default-block">
        <p className="requirement__p">Tell Us Your Requirements</p>
        <Input className="requirement__input"></Input>

        <p className="budget__p">Tell Us Your Budget</p>
        <Input className="budget__input"></Input>

        <p className="quantity__p">Quantity of Tasks and Taskers</p>
        <Input className="quantity__input"></Input>
      </div>
    </Modal>
  );
}
