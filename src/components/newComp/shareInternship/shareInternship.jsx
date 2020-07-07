import React, {useState, Fragment} from 'react';
import { Modal, Button, message } from 'antd';
import facebookSvg from '../../../assets/img/shareInternship/facebook.jpg';
import linkedSvg from '../../../assets/img/shareInternship/linkedIn.jpg';
import twitterSvg from '../../../assets/img/shareInternship/twitter.svg';
import linkSvg from '../../../assets/img/shareInternship/copyLink.svg';
// import ShareLink from 'react-facebook-share-link';
import {FacebookShareButton, LinkedinShareButton, TwitterShareButton} from 'react-share';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const url = "https://pracify.com/internshp/"



export default function ShareInternship({isShow, isClose, intershipId}) {

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
            width="378px"
            style={{fontSize: "2rem"}}
            font="28px"
            footer={[]}
          // title="Share Internship"
          visible={isShow}
          // onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="header">
            <div className="text">Share Internship</div>
            <div className="border-bottom"></div>
          </div>
          
          <div className="social-media-icons" >
            <div className="social-media-icon" >
              <FacebookShareButton  url={url + intershipId} style={{width: "100%"}}>
                <img src={facebookSvg} alt="facebook-icon"/>
              </FacebookShareButton>
            </div>
            <div className="social-media-icon">
              <LinkedinShareButton title={"internship"} summary={"get internship" } source={"pracify"} url={url+'/'+ intershipId} style={{width: "100%"}}>
              <img src={linkedSvg} alt="facebook-icon"/>
            </LinkedinShareButton>
            </div>
            <div  className="social-media-icon">
              <TwitterShareButton url={url+'/'+ intershipId} title={"test"} hashtags={['internship']} style={{width: "100%"}}>
              <img src={twitterSvg} alt="facebook-icon"/>
            </TwitterShareButton>
            </div>
            <div style={{cursor: "pointer"}} className="social-media-icon">
              <CopyToClipboard text={url+intershipId}
              onCopy={() => message.info('Copied')}>
                <img className="copy-icon-style" src={linkSvg} alt="copy-icon"/>
            </CopyToClipboard>
            </div>
          </div>
          

          {/* <FacebookShareButton  url={url + intershipId} style={{width: "100%"}}>
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
          </CopyToClipboard> */}
          
        </Modal>
        </div>
    )
}
