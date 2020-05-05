import React, {useState,useEffect, useRef} from 'react';
import {Modal, Progress, Button, Carousel} from 'antd';
import randomImg from '../../assets/randomImg.jpg';
import remove from '../../assets/img/gigProfile/remove.svg';
import facebook from '../../assets/img/gigProfile/facebook.svg';
import instagram from '../../assets/img/gigProfile/instagram.svg';
import tiktok from '../../assets/img/gigProfile/tiktok.svg';
import report from '../../assets/img/gigProfile/report.svg'
import axios from 'axios';
import WorkerCardDetails from '../independentComponent/workerDetailsCard';
import { RightOutlined , LeftOutlined } from '@ant-design/icons';

export default function GigProfile(props) {
    const carousel = useRef();
    const randomArr=[1,2]
    console.log(props.isShow)
    const [visible, setVisible] = useState(false)
    const [details, setDetails] = useState(null)
    const [i, setI] = useState(0)

    // const [details, setDetails] = useState(null)
    // const [resume, setResume] = useState(null)

    const userIds = ['5e6f31f83422b56f87738747', '5e6f2da13422b56f8773872c', '5e6f5efb3422b56f8773875c'];
    
    useEffect(() => {
        const userId = props.userId;
        console.log('%c User Id is' + userId, 'font-size: 23px')
        const url = `resume/user/${userIds[i]}`;
        axios.get(url)
            .then(res => {
                const user = res.data.user;
                const resume = res.data.resume;
                console.log(res.data)
                setDetails(res.data)
            })
    }, [userIds[i]])

    const actionData = {
        internshipId: "5e6f2c5d3422b56f87738726",
        userId: details ? details.resume.user : null
      }
      const selectCandidateHandler = () =>{
        const url= 'internship/accept';
        axios.put(url, actionData)
          .then(res => {
            console.log(res.data)
            props.isUpdate()
          })
      }
    
      const shortlistCandidateHandler = () => {
        const url = 'internship/shortlist';
        axios.put(url, actionData)
          .then(res=> {
            console.log(res.data)
            props.isUpdate()
          })
      }
    
      const rejectCandidateHandler = () => {
        const url = 'internship/reject';
        axios.put(url,actionData)
          .then(res => {
            console.log(res.data)
            props.isUpdate()
          })
      }

    const showModal = () => {
       setVisible(true)
      };
    
      const handleOk = e => {
        console.log(e);
        props.isClose();
        setVisible(false)
      };
    
      const handleCancel = e => {
        console.log(e);
        setVisible(false)
        props.isClose()
      };

      const next = () => {
        carousel.current.next();
      }
      const previous = () => {
        carousel.current.prev();
      }
      const randomArray = [1,2]
    return (
        <div className="">
            
            <Modal
                width="80%"
                className="gig-profile-modal"
                footer={[]}
                // title="Basic Modal"
                visible={props.isShow}
                onOk={handleOk}
                onCancel={handleCancel}

                >
                <LeftOutlined onClick={previous} className="left-icon"  twoToneColor="#fff"/>
                <RightOutlined onClick={next} className="right-icon" twoToneColor="#fff" />

                    <Carousel
                    dots={false} 
                    ref={ref => {
                            console.log(ref);
                            carousel.current = ref;
                        }}>
    
                    {randomArray.map((el,i) =>  <div key={i} className="ant-modal-contnet">
                        {details ? <WorkerCardDetails user={details.user} />  : null } 
                        {details ? <section className="gig-details">
                            <div className="verification-status">
                                <div className="veri-stauts">
                                    <span className="title">Verification Status</span>  <br/>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                    <img className="img" src={remove} alt="" ></img> <span className="details">Not Verified</span> 
                                    </div>
                                    
                                </div>
                                <div className="digital-profile">
                                    <p>Digital Profiles</p>
                                    <div className="icons">
                                        <div className="single-icon">
                                            <img src={facebook} alt="" ></img>
                                            
                                            
                                        </div>
                                        <div className="single-icon">
                                        <img src={instagram} alt="" ></img>
                                        </div>
                                        <div className="single-icon">
                                        <img src={tiktok} alt="" ></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="offline-gigs">
                                    <p>Offline Gigs</p>
                                    <div className="details">Not Willing To Travel</div>
                                </div>
                            </div>
                            <div className="interview-ques">
                                <div className="title">Interview Questions</div>
                                { randomArr.map((el,index) =>  <div key={index} className="qna">
                                    <p className="question">1 . Interview Questions dummy text for an interview question this big?</p>
                                    <p className="answer">A. Interview Questions dummy text for an interview answer this big or a much bigger length?</p>
                                </div> )}
                            </div>
                            <div className="skills-and-lang">
                                <div style={{marginBottom: "1.5rem"}}>
                                    <div className="title1">Skills</div>
                                    <div className="details"> {details.resume.skills.map(skill => skill.name)} </div>
                                </div>

                                <div style={{marginBottom: "1.5rem"}}>
                                    <div className="title2">Languages</div>
                                    <div className="details"> Hindi, English, Marathi Rajasthani, Gujrati,  Malayalam </div>
                                </div>
                            </div>
                        </section> : null }
                        <section className="buttons">
                            <div className="report">
                                <img src={report} alt="" ></img> REPORT THIS APPLICATION
                            </div>
                            <div className="">
                            <Button onClick={rejectCandidateHandler} className="reject">Reject</Button>
                            <Button onClick={shortlistCandidateHandler} className="shortlist">Shortlist</Button>
                            <Button onClick={selectCandidateHandler} className="select">Select</Button>
                            </div>
                        </section>
                    </div>) }
                </Carousel>
                
            </Modal>
        </div>
    )
}
