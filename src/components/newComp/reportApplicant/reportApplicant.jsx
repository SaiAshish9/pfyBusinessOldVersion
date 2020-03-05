import React, {useState} from 'react';
import { Modal, Button } from 'antd';

export default function ReportApplicant() {
  const [loading, setLoading ] = useState(false);
  const [visible, setVisible ] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // this.setState({ loading: true });
    setLoading(true);
    // setTimeout(() => {
    //   this.setState({ loading: false, visible: false });
    // }, 3000);

  };

  const handleCancel = () => {
    // this.setState({ visible: false });
    setVisible(true);
  };

    return (
      <div style={{marginTop: "10rem"}}>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        className="report-applicant"
        visible={visible}
        title="Report Applicant"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
    )
}
