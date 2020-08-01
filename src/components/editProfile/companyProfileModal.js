import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Button, Upload, message, Select } from "antd";
import {
  UploadOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import randomImg from "../../assets/randomImg.jpg";
import { s3URL } from "../constant/userToken";
import Axios from "axios";
import { getHeaders } from "../../helpers/getHeaders";

const { TextArea } = Input;
const { Option } = Select;

export default function CompanyProfileModal({
  isShow,
  isClose,
  user,
  editDetails,
}) {
  const [imgUploadUrl, setImgUploadUrl] = useState();
  const [newImage, setNewImage] = useState();
  const [loading, setLoader] = useState(false);
  const handleCancel = () => {
    isClose();
  };
  const handleOk = () => {
    isClose();
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    editDetails({ ...values, logoUrl: newImage || user.logoUrl });
  };
  const beforeUpload = async (file) => {
    try {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
      }

      const response = await Axios.get(
        `company/upload_dp_url?fileType=${file.type}`,
        getHeaders()
      );

      setImgUploadUrl(response.data.url);
      setNewImage(response.data.key);
      setLoader(true);
    } catch (err) {
      message.error("Something went wrong");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const props = {
    listType: "picture-card",
    className: "avatar-uploader",
    showUploadList: false,
    customRequest: async (data) => {
      await Axios.put(imgUploadUrl, data.file);
      setLoader(false);
    },
    beforeUpload: beforeUpload,
  };

  return (
    <Modal
      title="Company Profile"
      className="company-profile-edit"
      visible={isShow}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={"700px"}
    >
      <Form
        className="form"
        layout={"vertical"}
        initialValues={{
          companyName: user.companyName,
          websiteLink: user.websiteLink,
          aboutCompany: user.aboutCompany,
          companyType: user.companyType,
        }}
        hideRequiredMark={true}
        name="company-profile"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="inline-form">
          <img
            src={s3URL + (newImage || user.logoUrl)}
            alt="company-logo"
            className="company-logo__img"
          />
          <Upload 
          accept=".png,.jpg"
          {...props} className="company-logo">
            {loading ? <LoadingOutlined /> : "Change Logo"}
          </Upload>

          <Form.Item
            label="Company Name"
            className="width"
            name="companyName"
            rules={[
              {
                required: true,
                message: "Please input your company name!",
              },
            ]}
          >
            <Input className="input-style" />
          </Form.Item>
        </div>
        {/* <Form.Item
        label="Company Type"
        className="width"
        name="companyType"
        // hasFeedback
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please select your company type!',
        //   },
        // ]}
      >
        <Select defaultValue="startUp">
          <Option value="startUp">Start Up</Option>
          <Option value="usa">U.S.A</Option>
        </Select>
      </Form.Item> */}
        {/* </Form.Item> */}
        {/* <div className="inline-form">
          <Form.Item
            label="Company Type"
            style={{ flex: 1, padding: "0 1rem 0 0" }}
            name="companyType"
          >
            <Select>
            <Option value="Business Development (Sales)">
                  Business Development (Sales)
                </Option>
                <Option value="Campus Ambassador">Campus Ambassador</Option>
                <Option value="Operations">Operations</Option>
                <Option value="Human Resources">Human Resources</Option>
                <Option value="Digital Marketing">Digital Marketing</Option>
                <Option value="Social Media Marketing">
                  Social Media Marketing
                </Option>
                <Option value="Marketing">Marketing</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Company Website"
            name="websiteLink"
            className="width"
            rules={[
              {
                required: true,
                message: "Please input your comapny website!",
              },
            ]}
          >
            <Input className="input-style" />
          </Form.Item>
        </div> */}

        <Form.Item
          label="Company Website"
          name="websiteLink"
          className="width"
          rules={[
            {
              required: true,
              message: "Please input your comapny website!",
            },
          ]}
        >
          <Input className="input-style" />
        </Form.Item>
        {/* </div> */}

        <Form.Item
          label="About Company"
          name="aboutCompany"
          rules={[
            { required: true, message: "Please write about your company!" },
          ]}
        >
          <TextArea className="input-style" rows={3} />
        </Form.Item>
        <Form.Item className="button">
          <Button className="submit-btn" type="primary" htmlType="submit">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
