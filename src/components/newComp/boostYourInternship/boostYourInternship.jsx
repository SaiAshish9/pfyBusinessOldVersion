import React, {useState} from 'react';
import { Modal, Button } from 'antd';
import flatImg from './flat.png';


const  BoostYourInternship = (props) => {

    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    
      const showModal = () => {
        setVisible(true);
      };
    
    
      const handleOk = () => {
          setLoading(true);
          // call api, after success
          setLoading(false);
          setVisible(false)
      };
    
      const handleCancel = () => {
        // this.setState({ visible: false });
        setVisible(false)
      };

    return (
        <div style={{marginTop: "10rem"}}>
        <Button type="primary" onClick={showModal}>
          Open Modal with customized footer
        </Button>
        <Modal
        className="internship-booster"
        style={{textAlign: "center"}}
          visible={visible}
          title="Boost Your Internship Posting!"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button  key="submit" type="primary" loading={loading} onClick={handleOk}>
            Purchase
          </Button>,
            <Button style={{color: "#ec3f78", borderColor:"#ec3f78"}} key="back" onClick={handleCancel}>
              Not Now
            </Button>,
            
          ]}
        >
            <img src={flatImg} alt="flat img"/>
            <div style={{fontWeight: 500}}>
                <p style={{fontSize: "1.2rem"}}>Want to reach more students?</p>
                <p>Feature your internship on project X to get 5X <br/> more visibility and applicants </p>
                <hr/>
                <p>2 days at <span style={{color: "#ec3f78"}}>INR 550</span> <br/> 5 days at <span style={{color: "#ec3f78"}}>INR 1100</span> </p>

            </div>
            
        </Modal>
      </div>
    )
}

export default BoostYourInternship;
