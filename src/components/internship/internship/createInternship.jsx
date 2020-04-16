import React, { useContext } from "react";
import { Modal, Button } from "antd";
import { ModalVisibleContext } from "./newInternship";
import modalSvg from "../../../assets/img/modalSvg.svg";

export default function CreateInternship() {
  const { modalVisible, dispatchModalVisible } = useContext(
    ModalVisibleContext
  );
  
  const modalTitle = (
    <div className="custom-modal-title">
      <img src={modalSvg} alt="" className="modal-title__img" />
      <div className="modal-title-content">
        <h1 className="modal-title__header">Internship Details</h1>
        <p className="modal-title__para">
          Fill the details below and our team will contact you
        </p>
      </div>
    </div>
  );
  const modalFooter = (
    <div className="custom-modal-footer">
      <Button className="goBack-button">Go Back</Button>
      <Button className="contactUs-button">Contact Us</Button>
    </div>
  );
  const handleCancel = (e) => {
    console.log(e);
    dispatchModalVisible({ type: "cancelModalVisible" });
  };

  return (
    <Modal
      title={modalTitle}
      visible={modalVisible}
      footer={modalFooter}
      // centered={true}
      onCancel={handleCancel}
      className="contactToAdmin-modal"
    ></Modal>
  );
}
