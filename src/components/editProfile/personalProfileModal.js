import React, {useState, useEffect} from 'react';
import {Modal, Form, Input, Button} from 'antd';


export default function PersonalProfileModal({isShow, isClose, isShowChangePasswordModal,user, editDetails}){

    const handleCancel = () => {
        isClose()
    }
    const handleOk = ( ) => {
        isClose() 
    }

    const onFinish = values => {
        console.log('Success:', values);
        editDetails(values)
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    const openChangePasswordModal = () => {
        isShowChangePasswordModal()
    }

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
                initialValues={{firstName: user.firstName, lastName: user.lastName, email: user.email, mobile: user.mobile, password: "**********"}}
                hideRequiredMark={true}
                name="personal-profile"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
    {/* <div className="inline-form"> */}
      <Form.Item
        label="First Name"
        className="firstname-input"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your firstname!',
          },
        ]}
      >
        <Input className="input-style" />
      </Form.Item>
      <Form.Item
        label="Last Name"
        className="lastname-input"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your lastname!',
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
      {/* </div> */}
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
      {/* <Form.Item
        label="Password"
        name="password"
        placeholder="change password"
      >
        <div className="password-div">
          <div>*******</div>
          <div onClick={openChangePasswordModal} className="change-passwd-text">change Password</div>
        </div>
      </Form.Item> */}
      <Form.Item className="button" >
        <Button className="submit-btn" type="primary" htmlType="submit">
          Save Changes
        </Button>
      </Form.Item>
      </Form>
         
        </Modal>
)
}



