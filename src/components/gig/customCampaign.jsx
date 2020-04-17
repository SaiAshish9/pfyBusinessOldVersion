import React, { useState, useEffect } from "react";
import { Modal, Button, Input } from "antd";
import modalSvg from "../../assets/img/modalSvg.svg";

const css = "font-size:30px";
export default function CreateCampaign({ isModalVisible, fullName }) {
  console.log("%c %s", css, isModalVisible);
  const [modalVisible, setModalVisible] = useState(isModalVisible);

  useEffect(() => {
    setModalVisible(isModalVisible);
  }, [isModalVisible]);

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
        <h1 className="modal-title__header">{fullName}</h1>
        <p className="modal-title__para">
          Fill the details below and our team will contact you
        </p>
      </div>
    </div>
  );
  const handleCancel = (e) => {
    console.log(e);
    setModalVisible(false);
    isModalVisible = false;
  };
  return (
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
  );
}
