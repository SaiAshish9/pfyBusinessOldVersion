import React, { useEffect } from "react";
import axios from "axios";

import { Modal, Button, Input, Form, InputNumber } from "antd";
import modalSvg from "../../assets/img/modalSvg.svg";

export default function DefaultCampaign({
  campaignTitle,
  modalVisible,
  handleCancel,
}) {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        onCreate(values);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    const data = { ...values, formName: campaignTitle };
    console.log(data);
    axios
      .post("company_contact_us/create", data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e.response);
      });
    handleCancel();
  };

  const modalFooter = (
    <div className="custom-modal-footer">
      <Button
        className="contactUs-button"
        htmlType="submit"
        onClick={handleSubmit}
      >
        SUBMIT
      </Button>
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
      <Form
        className="default-block"
        form={form}
        hideRequiredMark={true}
        name="defaultGigCampaign"
      >
        <p className="requirement__p">Please share your requirement</p>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please tell us about your requirement!",
            },
          ]}
        >
          <Input className="requirement__input"></Input>
        </Form.Item>

        <p className="budget__p">Please tell us your budget</p>
        <Form.Item
          name="budget"
          rules={[
            {
              required: true,
              message: "what is your estimated budget!",
            },
            {
              type: "number",
              message: "number only input!",
            },
          ]}
        >
          <InputNumber className="budget__input"></InputNumber>
        </Form.Item>

        <p className="budget__p">How many gig workers do you want to hire?</p>
        <Form.Item
          name="noOfWorkers"
          rules={[
            {
              required: true,
              message: "How many gig workers do you want to hire ?",
            },
          ]}
        >
          <InputNumber className="budget__input"></InputNumber>
        </Form.Item>

        <p className="quantity__p">Any additional information (optional)</p>
        <Input className="quantity__input"></Input>
      </Form>
    </Modal>
  );
}

// {
// 	"formName":"Marketing",
// 	"description":"I want to creat a mission",
// 	"budget":1000,
// 	"noOfWorkers":100
// }
