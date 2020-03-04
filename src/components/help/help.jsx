import React, {useState} from 'react';
import { Modal, Button, Input } from 'antd';
const { TextArea } = Input;


export default function Help() {

    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    
      const showModal = () => {
        setVisible(true);
      };
    
      const handleOk = () => {
        // this.setState({ loading: true });
        setLoading(true);
        // api request
        setVisible(false)
        setLoading(false)
      };
    
      const handleCancel = () => {
        setVisible(false);
      };

    return (
        <div style={{marginTop: "10rem"}}>
        <Button type="primary" onClick={showModal}>
          Open Modal with customized footer
        </Button>
        
        <Modal
            style={{textAlign: "center"}}
          visible={visible}
          title="How  can we help?"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
              Send
            </Button>,
          ]}
        >
            <TextArea rows={4} placeholder="choose the reasons for reporting:" style={{backgroundColor: "#f2f2f2"}} />
        </Modal>
      </div>
    )
}
