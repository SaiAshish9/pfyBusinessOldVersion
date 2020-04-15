import React, {useState, Fragment} from 'react';
import { Modal, Button, message } from 'antd';
import facebookSvg from './icons/facebook.svg';
import linkedSvg from './icons/linkedin.svg';
import twitterSvg from './icons/twitter.svg';
import linkSvg from './icons/link-icon.svg';
import ShareLink from 'react-facebook-share-link';
import {FacebookShareButton, LinkedinShareButton, TwitterShareButton} from 'react-share';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const url = "https://pracify.com/internshp/"



export default function ShareInternship({show, isClose, intershipId}) {

  const handleCancel = e => {
    console.log(e);
    isClose();
    // setVisible(false)
  };

  // do nothing
  // const iconClickHandler = () =>{
  // }


    return (
        <div style={{marginTop: "10rem"}}>
            {/* <Button type="primary" onClick={showModal}>
              Open Modal
            </Button> */}
        <Modal
            className="share-internship-modal"
            width="300px"
            style={{fontSize: "2rem"}}
            font="28px"
            footer={[]}
          title="Share Internship"
          visible={show}
          // onOk={handleOk}
          onCancel={handleCancel}
        >
          {/* <ShareLink link={'https://pracify.com/internship/' + intershipId} >
              {link => (
                <a href={link} target='_blank'>
                  <div className="item" >
                  <img src={facebookSvg} alt="facebook-icon"/><p className="text" >Facebook</p>
                </div>
                </a>
                
              )}
          </ShareLink> */}
          <FacebookShareButton  url={url + intershipId} style={{width: "100%"}}>
          <div className="item" >
            <img src={facebookSvg} alt="facebook-icon"/><p className="text" >Facebook </p>
          </div>
          </FacebookShareButton>
          
          
          <LinkedinShareButton title={"internship"} summary={"get internship" } source={"pracify"} url={url+'/'+ intershipId} style={{width: "100%"}}>
          <div className="item"  >
            <img src={linkedSvg} alt="facebook-icon"/><p className="text" >Linkedin</p>
          </div>
          </LinkedinShareButton>

          <TwitterShareButton url={url+'/'+ intershipId} title={"test"} hashtags={['internship']} style={{width: "100%"}}>
          <div className="item"  >
            <img src={twitterSvg} alt="facebook-icon"/><p className="text" >Twitter</p>
          </div>
          </TwitterShareButton>
          
          <CopyToClipboard text={url+intershipId}
            onCopy={() => message.info('Copied')}>
            <div className="item"  >
              <img src={linkSvg} alt="copy-icon"/><p className="text" >Copy Link</p>
            </div>
          </CopyToClipboard>
          
        </Modal>
        </div>
    )
}
