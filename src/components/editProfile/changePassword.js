import React from 'react';
import {Modal, Form, Input, Button} from 'antd';
import Password from 'antd/lib/input/Password';


export default function ChangePassword({isShow, isClose}) {
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
              title="Change Password"
              className="change-password"
              visible={isShow}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
              width={'700px'}
            >
                <Form
                    // className="change-password-form"
                    layout={"vertical"}
                    initialValues={{}}
                    hideRequiredMark={true}
                    name="change-password-form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
          <Form.Item
            label="Old Password"
            className="old-password"
            name="oldPassword"
            rules={[
              {
                required: true,
                message: 'Please input your old password!',
              },
            ]}
          >
            <Input className="input-style" />
          </Form.Item>
          <Form.Item
            label="Enter New Password"
            className="new-password"
            name="new-password"
            rules={[
              {
                required: true,
                message: 'Please input your new password!',
              },
            ]}
          >
            <Input className="input-style" />
          </Form.Item>
          <Form.Item
            label="Confirm New Password"
            name="confirm-new-password"
            rules={[
              {
                required: true,
                message: 'Please re-enter your new password!',
              },
            ]}
          >
            <Input className="input-style" />
          </Form.Item>
          <Form.Item className="button" >
            <Button className="submit-btn" type="primary" htmlType="submit">
              Change Password
            </Button>
          </Form.Item>
          </Form>
             
            </Modal>
    )
}
