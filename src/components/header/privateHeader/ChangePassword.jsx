import React from "react";
import { Button, Modal, Input,Form, notification } from "antd";
import Axios from "axios";
import { getHeaders } from "../../../helpers/getHeaders";
import { useState } from "react";

function ChangePassword(props) {
  const { className, setShowChangePassword, showChangePassword } = props;
  const [loader,setLoader] = useState(false)
  const onSubmit = (values) =>{
    if(values.newPassword !== values.confirmNewPassword){
      notification.error({message:"Please enter same confirm password!",placement:"bottomLeft"})
      return;
    }
    setLoader(true);
    Axios.put("company/change_password",values,getHeaders())
    .then(() => {
      notification.success({message:"New Password Set Successfully!",placement:"bottomLeft"})
      setShowChangePassword(false)
    setLoader(false);

    }).catch((err) => {
      notification.error({message:"Invalid Password!",placement:"bottomLeft"});
    setLoader(false);

    })
  }
  return (
    <div className="change-password">
      <div
        className={className}
        type="primary"
        onClick={() => setShowChangePassword((val) => !val)}
      >
        Open Modal
      </div>
      <Modal
        title="Change Password"
        visible={showChangePassword}
        //   onOk={this.handleOk}
        footer={null}
        onCancel={() => setShowChangePassword((val) => !val)}
      >
        <Form onFinish={onSubmit}>
          <div>
            <div className={"change-password__label"}>Current Password</div>
            <Form.Item name="oldPassword" rules={[
                  {
                    required: true,
                    message: "Please input your old Password!",
                  },
                ]}>
              <Input.Password className={"change-password__input"}/>
            </Form.Item>
          </div>
          <div>
            <div className={"change-password__label"}>New Password</div>
            <Form.Item name="newPassword" rules={[
                  {
                    required: true,
                    message: "Please input new password!",
                  },
                ]}>
              <Input.Password className={"change-password__input"}/>
            </Form.Item>
          </div>
          <div>
            <div className={"change-password__label"}>Confirm New Password</div>
            <Form.Item name="confirmNewPassword" rules={[
                  {
                    required: true,
                    message: "Please input confirm new password!",
                  },
                ]}>
              <Input.Password className={"change-password__input"}/>
            </Form.Item>
          </div>
          <div className="change-password__btns">
            <Button className="change-password__btn" loading={loader} htmlType="submit">CHANGE PASSWORD</Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default ChangePassword;
