import React, { useState, useEffect } from "react";
import { Modal, Button, Input, Select, DatePicker } from "antd";
import TextArea from "antd/lib/input/TextArea";
import modalSvg from "../../assets/img/modalSvg.svg";

const css = "font-size:30px";
export default function CreateCampaign({
  fullName,
  modalVisible,
  handleCancel,
}) {
  const [campaignStep, setCampaignStep] = useState(0);

  const handleGoBack = () => {
    setCampaignStep(campaignStep - 1);
  };

  const handleNext = () => {
    setCampaignStep(campaignStep + 1);
  };

  useEffect(() => {
    if (campaignStep === -1) {
      handleCancel();
      setCampaignStep(0);
    }
  }, [campaignStep, handleCancel]);

  const modalFooter = (
    <div className="custom-modal-footer">
      {campaignStep < 2 ? (
        <>
          <Button className="goBack-button" onClick={handleGoBack}>
            Go Back
          </Button>
          {campaignStep < 1 ? (
            <Button className="contactUs-button" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button className="contactUs-button" onClick={handleNext}>
              Create Campaign
            </Button>
          )}
        </>
      ) : (
        <>
          <Button className="goBack-button">Pay Later</Button>
          <Button className="contactUs-button">Pay $3000</Button>
        </>
      )}
    </div>
  );

  const modalTitle = (
    <div className="custom-modal-title">
      <img src={modalSvg} alt="" className="modal-title__img" />
      <div className="modal-title-content">
        <h1 className="modal-title__header">{fullName}</h1>
        <p className="modal-title__para">Fill the details below.</p>
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
      {campaignStep === 0 && (
        <div className="custom-block-one">
          <p className="select-option__p">Select an Option</p>
          <Select className="select-option__select"></Select>

          <p className="additional-comment__p">Additional Comment</p>
          <TextArea className="additional-comment__textarea"></TextArea>
        </div>
      )}
      {campaignStep === 1 && (
        <div className="custom-block-two">
          <p className="">Last Date to Apply</p>
          <DatePicker format="DD-MMM-YYYY" placeholder="last date to apply" />
          <p className="">Gender</p>
          <Select>
            <option>Male</option>
            <option>Female</option>
            <option>Both</option>
          </Select>
          <p className="">Charges Per Worker</p>
          <Input></Input>
          <p className="">No Of Workers</p>
          <Input></Input>
          <p className="">Cities</p>
          <Select></Select>
          <p className="">Task Description</p>
          <TextArea></TextArea>
          <p className="">Interview Question (optional)</p>
          <TextArea></TextArea>
        </div>
      )}
      {campaignStep === 2 && <div className="custom-block-two">2</div>}
    </Modal>
  );
}
