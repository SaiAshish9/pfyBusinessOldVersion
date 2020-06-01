import React, { useState, useEffect, useRef } from "react";
import { Modal, Progress, Button, Carousel } from "antd";
import randomImg from "../../assets/randomImg.jpg";
import remove from "../../assets/img/gigProfile/remove.svg";
import facebook from "../../assets/img/gigProfile/facebook.svg";
import instagram from "../../assets/img/gigProfile/instagram.svg";
import tiktok from "../../assets/img/gigProfile/tiktok.svg";
import report from "../../assets/img/gigProfile/report.svg";
import axios from "axios";
import WorkerCardDetails from "../independentComponent/workerDetailsCard";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

export default function GigProfile(props) {
  const { userId, gig, answers, details } = props;
  const {questions} = gig
  const carousel = useRef();
  const randomArr = [1, 2];
  console.log(props.isShow);
  const [visible, setVisible] = useState(false);
  // const [, setDetails] = useState(null);

  // useEffect(() => {
  //   if (!details) {
  //     const url = `resume/user/${missionId}/${userId}`;
  //     axios.get(url).then((res) => setDetails(res.data));
  //   }
  // }, [visible]);

  const actionData = {
    missionId: gig._id,
    userId: details ? details._id : null,
  };
  const selectCandidateHandler = () => {
    const url = "mission/select ";
    axios.post(url, actionData).then((res) => {
      console.log(res.data);
      props.isUpdate();
    });
  };

  const shortlistCandidateHandler = () => {
    const url = "mission/shortlist";
    axios.post(url, actionData).then((res) => {
      console.log(res.data);
      props.isUpdate();
    });
  };

  const rejectCandidateHandler = () => {
    const url = "mission/reject";
    axios.post(url, actionData).then((res) => {
      console.log(res.data);
      props.isUpdate();
    });
  };

 
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const next = () => {
    carousel.current.next();
  };
  const previous = () => {
    carousel.current.prev();
  };

  const renderDigitalProfileLinks = (profile) => {
      const icons = {
          facebook:facebook,
          instagram:instagram,
          tiktok:tiktok,
      }

      return Object.keys(profile).map((key) =>{
          if(profile[key]){
              return (
                <div className="single-icon">
                   <a href={profile[key]}><img src={icons[facebook]} alt=""></img></a> 
                </div>
            )
          }
      })

  }
  const randomArray = [1, 2];
  return (
    <div className={props.className}>
      <div onClick={showModal}>{props.children}</div>
      <Modal
        width="80%"
        className="gig-profile-modal"
        footer={[]}
        // title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <LeftOutlined
          onClick={previous}
          className="left-icon"
          twoToneColor="#fff"
        />
        <RightOutlined
          onClick={next}
          className="right-icon"
          twoToneColor="#fff"
        />

        <Carousel
          dots={false}
          ref={(ref) => {
            console.log(ref);
            carousel.current = ref;
          }}
        >
          {randomArray.map((el, i) => (
            <div key={i} className="ant-modal-contnet">
              {details ? <WorkerCardDetails user={details} /> : null}
              {details ? (
                <section className="gig-details">
                  <div className="verification-status">
                    <div className="veri-stauts">
                      <span className="title">Verification Status</span> <br />
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img className="img" src={remove} alt=""></img>{" "}
                        <span className="details">Not Verified</span>
                      </div>
                    </div>
                    <div className="digital-profile">
                      <p>Digital Profiles</p>
                      <div className="icons">
                       {renderDigitalProfileLinks(details.digitalProfile)}
                      </div>
                    </div>
                    <div className="offline-gigs">
                      <p>Offline Gigs</p>
                      <div className="details">
                        {!details.offlineGigs.isWillingToTravel
                          ? "Not "
                          : ""}
                        Willing To Travel
                      </div>
                    </div>
                  </div>
                  <div className="interview-ques">
                    <div className="title">Interview Questions</div>
                    {questions.map((el, index) => (
                      <div key={index} className="qna">
                        <p className="question">
                          {el.question}
                        </p>
                        <p className="answer">
                         {answers[index]}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="skills-and-lang">
                    <div style={{ marginBottom: "1.5rem" }}>
                      <div className="title1">Skills</div>
                      <div className="details">
                      {details.skills.join(",")}
                        {/* {details.resume.skills.map((skill) => skill.name)}{" "} */}
                      </div>
                    </div>

                    <div style={{ marginBottom: "1.5rem" }}>
                      <div className="title2">Languages</div>
                      <div className="details">
                          {details.languages.join(",")}
                      </div>
                    </div>
                  </div>
                </section>
              ) : null}
              <section className="buttons">
                <div className="report">
                  <img src={report} alt=""></img> REPORT THIS APPLICATION
                </div>
                <div className="">
                  <Button onClick={rejectCandidateHandler} className="reject">
                    Reject
                  </Button>
                  <Button
                    onClick={shortlistCandidateHandler}
                    className="shortlist"
                  >
                    Shortlist
                  </Button>
                  <Button onClick={selectCandidateHandler} className="select">
                    Select
                  </Button>
                </div>
              </section>
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
}
