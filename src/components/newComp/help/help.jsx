import React, { useState } from "react";
import { Modal, Button, Input, notification } from "antd";
import { useEffect } from "react";
import Axios from "axios";
import { apiURL } from "../../constant/userToken";
import { getHeaders } from "../../../helpers/getHeaders";
const { TextArea } = Input;

// const Context = React.createContext({ name: 'Default' });

export default function Help() {
  const [api, contextHolder] = notification.useNotification();
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {}, []);
  const openNotification = (message) => {
    api.open({
      message: message,
      placement: "bottomLeft",
      closeIcon: <span></span>,
    });
  };
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async () => {
    // this.setState({ loading: true });
    if(!description || description.length === 0){
      openNotification("Add Some Description to Submit");
      return;
    }
    setLoading(true);
    // api request
    await Axios.post(`/company/help/add`,{description},getHeaders())
    .then((res) => {
      setVisible(false);
      setLoading(false);
      setDescription("")
      openNotification("Query Added Successfully");
    }).catch(err => {
      setVisible(false);
      setLoading(false);
      openNotification("Something went wrong");
    }) ;
   
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      {contextHolder}
      <span type="primary" onClick={showModal}>
        help
      </span>

      <Modal
        className="help"
        style={{ textAlign: "center" }}
        visible={visible}
        title={
          <span className="help__header">Tell us how we can help you?</span>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="help__footer">
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={handleOk}
            >
              Send
            </Button>
          </div>,
        ]}
      >
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="help__textarea"
          rows={4}
          placeholder="Description"
        />
      </Modal>
    </div>
  );
}
