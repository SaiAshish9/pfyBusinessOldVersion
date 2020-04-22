import React, {useState, useEffect} from 'react';
import {Modal, Form, Input, Button, Upload, message, Select} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import randomImg from '../../assets/randomImg.jpg'

const { TextArea } = Input;
const { Option } = Select;


export default function CompanyProfileModal({isShow, isClose}){
    
    const handleCancel = () => {
        isClose()
    }
    const handleOk = ( ) => {
        isClose() 
    }

    const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

      const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

return(
    <Modal
          title="Company Profile"
          className="company-profile-edit"
          visible={isShow}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          width={'700px'}
        >
    <Form
        className="form"
        layout={"vertical"}
        initialValues={{companyName: "Team Car Delight", companyWebsite: "www.teamcardelight.com", aboutCompany: "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, "}}
        hideRequiredMark={true}
        name="company-profile"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >

    <div className="inline-form">
        <div className="company-logo">
            {/* <div> */}
                <img src={randomImg} alt="" />
            {/* </div> */}
            <Upload {...props}>
                <Button>
                <UploadOutlined /> Click to Upload
                </Button>
            </Upload>
        </div>
      <Form.Item
        label="Company Name"
        className="width"
        name="companyName"
        rules={[
          {
            required: true,
            message: 'Please input your company name!',
          },
        ]}
      >
        
        <Input className="input-style" />
      </Form.Item>
      <Form.Item
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
      </Form.Item>
      {/* </Form.Item> */}
      
      <Form.Item
        label="Company Website"
        name="companyWebsite"
        className="width"
        rules={[
          {
            required: true,
            message: 'Please input your comapny website!',
          },
        ]}
      >
        <Input className="input-style" />
        
      </Form.Item>
      </div>

      <Form.Item
        label="About Company"
        name="aboutCompany"
        rules={[{ required: true, message: 'Please write about your company!' }]}
      >
        <TextArea className="input-style" rows={3} />
      </Form.Item>
      <Form.Item className="button" >
        <Button className="submit-btn" type="primary" htmlType="submit">
          Save Changes
        </Button>
      </Form.Item>
      </Form>
         
        </Modal>
)
}