import React, {useState, useEffect} from 'react';
import {Modal, Form, Input, Button} from 'antd';


export default function PersonalProfileModal({isShow, isClose}){
    
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

return(
    <Modal
          title="Personal Profile"
          className="personal-profile-edit"
          visible={isShow}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          width={'700px'}
        >
            <Form
                className="form"
                layout={"vertical"}
                initialValues={{fullname: "Mayank Muppal", email: "mayank114@gmail.com", mobile: 9743518746, password: "**********"}}
                hideRequiredMark={true}
                name="personal-profile"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
    <div className="inline-form">
      <Form.Item
        label="Full Name"
        className="fullname-input"
        name="fullname"
        rules={[
          {
            required: true,
            message: 'Please input your fullname!',
          },
        ]}
      >
        <Input className="input-style" />
      </Form.Item>
      <Form.Item
        label="Mobile"
        className="mobile-input"
        name="mobile"
        rules={[
          {
            required: true,
            message: 'Please input your mobile!',
          },
        ]}
      >
        <Input className="input-style" />
      </Form.Item>
      </div>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input className="input-style" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        placeholder="change password"
      >
        <Input disabled className="input-style pass" placeholder="change password" />
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



