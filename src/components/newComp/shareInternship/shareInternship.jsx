import React, {useState} from 'react';
import { Modal, Button } from 'antd';
import facebookSvg from './icons/facebook.svg';
import linkedSvg from './icons/linkedin.svg';
import twitterSvg from './icons/twitter.svg';
import linkSvg from './icons/link-icon.svg';


export default function ShareInternship() {

    // state = { visible: false };
    const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true)

  const handleOk = e => {
    console.log(e);
    setVisible(false)
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false)
  };

  const iconClickHandler = () =>{
    //TODO go to that particular link
  }

    return (
        <div style={{marginTop: "10rem"}}>
            <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
            className="share-internship-modal"
            width="300px"
            style={{fontSize: "2rem"}}
            font="28px"
            footer={[]}
          title="Share Internship"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="item" onClick={iconClickHandler} >
            <img src={facebookSvg} alt="facebook-icon"/><p className="text" >Facebook</p>
          </div>
          <div className="item" onClick={iconClickHandler} >
            <img src={linkedSvg} alt="facebook-icon"/><p className="text" >Linkedin</p>
          </div>
          <div className="item" onClick={iconClickHandler} >
            <img src={twitterSvg} alt="facebook-icon"/><p className="text" >Twitter</p>
          </div>
          <div className="item" onClick={iconClickHandler} >
            <img src={linkSvg} alt="facebook-icon"/><p className="text" >Copy Link</p>
          </div>
        </Modal>
        </div>
    )
}
