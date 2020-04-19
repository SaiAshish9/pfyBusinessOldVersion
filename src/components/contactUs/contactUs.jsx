import React from "react";
import { Button, Modal, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import modalSvg from "../../assets/img/modalSvg.svg";

export default function ContactUs({ modalVisible, handleCancel }) {
  const modalFooter = (
    <div className="custom-modal-footer">
      <Button className="goBack-button">Go Back</Button>
      <Button className="contactUs-button">Submit</Button>
    </div>
  );

  const modalTitle = (
    <div className="custom-modal-title">
      <img src={modalSvg} alt="" className="modal-title__img" />
      <div className="modal-title-content">
        <h1 className="modal-title__header">Contact Us</h1>
        <p className="modal-title__para">
          Student Offers Contact Us Text Here!
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      title={modalTitle}
      visible={modalVisible}
      footer={modalFooter}
      onCancel={handleCancel}
      className="contactToAdmin-modal"
    >
      <div className="default-block">
        <p className="requirement__p">Description</p>
        <TextArea></TextArea>
        <p className="budget__p">Additional Comment (if any)</p>
        <Input className="budget__input"></Input>
      </div>
    </Modal>
  );
}
