import React, {useState} from 'react';
import { Modal, Button, Radio, Input  } from 'antd';
const { TextArea } = Input

export default function ReportApplicant() {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };
  const [loading, setLoading ] = useState(false);
  const [visible, setVisible ] = useState(false);
  const [radioVal, setRadioVal ] = useState(1);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // this.setState({ loading: true });
    // setLoading(true);

    //send data to api
    // if(radioVal === 8){
    //   const data = {
    //     val: // 1, 2, 3, 4...,
    //     text: document.querySelector('.textareaVal')  
    //   } 
    // }

    // setTimeout(() => {
    //   this.setState({ loading: false, visible: false });
    // }, 3000);
    setLoading(false)
    setVisible(false)

  };

  const handleCancel = () => {
    // this.setState({ visible: false });
    setVisible(false);
  };

  const onChange = e => {
    console.log('radio checked', e.target.value);
    console.log(e.target)
    // this.setState({
    //   value: e.target.value,
    // });
    setRadioVal(e.target.value)
  };
    return (
      <div style={{marginTop: "10rem"}}>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        width="550px"
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
        <h4>Choose the reasons for reporting: </h4>
        <Radio.Group onChange={onChange} value={radioVal}>
        <Radio style={radioStyle} value={1}>
          Did not respond to any messages
        </Radio>
        <Radio style={radioStyle} value={2}>
          Did not respond to calls
        </Radio>
        <Radio style={radioStyle} value={3}>
          Used unprofessional language (Rude, vague or abusive) in application/messages
        </Radio>
        <Radio style={radioStyle} value={4}>
          Did not appear for interview after confirming
        </Radio>
        <Radio style={radioStyle} value={5}>
          Student decline the offer
        </Radio>
        <Radio style={radioStyle} value={6}>
          Did not join after accepting the offer
        </Radio>
        <Radio style={radioStyle} value={7}>
          Left the internship in between
        </Radio>
        <Radio style={radioStyle} value={8}>
          Other <br/>
        </Radio>
      </Radio.Group>
      {radioVal === 8 ? <TextArea className="textareaVal" rows={4}  /> : null}
        
      </Modal>
    </div>
    )
}
