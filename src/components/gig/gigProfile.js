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
import { RightOutlined, LeftOutlined, GithubFilled } from "@ant-design/icons";
import {
  MISSION_APPLIED,
  MISSION_WAITLIST,
  MISSION_SELECTED,
  MISSION_REJECTED,
  MISSION_COMPLETED,
  MISSION_FAILED,
} from "../constant/statusCodes";
import Submission from "./Submission";

export default function GigProfile(props) {
  const { status, gig, answers, details } = props;
  const { questions } = gig;
  const carousel = useRef();
  const [visible, setVisible] = useState(false);
  console.log(status);
  const actionData = {
    missionId: gig._id,
    userId: details ? details._id : null,
  };
  const selectCandidateHandler = () => {
    const url = "mission/select ";
    axios.post(url, actionData).then((res) => {
      console.log(res.data);
      setVisible(false);
      props.isUpdate();
    });
  };

  const shortlistCandidateHandler = () => {
    const url = "mission/shortlist";
    axios.post(url, actionData).then((res) => {
      console.log(res.data);
      setVisible(false);
      props.isUpdate();
    });
  };

  const rejectCandidateHandler = () => {
    const url = "mission/reject";
    axios.post(url, actionData).then((res) => {
      console.log(res.data);
      setVisible(false);
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

  const renderButtons = () => {
    console.log(gig.status);
    const reject = (
      <Button onClick={rejectCandidateHandler} className="reject">
        Reject
      </Button>
    );
    const shortlist = (
      <Button onClick={shortlistCandidateHandler} className="shortlist">
        Shortlist
      </Button>
    );
    const select = (
      <Button onClick={selectCandidateHandler} className="select">
        Select
      </Button>
    );
    switch (status) {
      case MISSION_APPLIED:
        return [reject, shortlist, select];
      case MISSION_WAITLIST:
        return [reject, select];
      default:
        return [];
    }
  };
  const renderDigitalProfileLinks = (profile) => {
    const icons = {
      facebook: facebook,
      instagram: instagram,
      tiktok: tiktok,
    };

    return Object.keys(profile).map((key) => {
      if (profile[key]) {
        return (
          <div className="single-icon">
            <a href={profile[key]}>
              <img src={icons[key]} alt=""></img>
            </a>
          </div>
        );
      }
    });
  };

  const renderQuestions = () => {
    if (questions && questions.length > 0) {
      return (
        <div className="interview-ques">
          <div className="title">Interview Questions</div>
          {questions.map((el, index) => (
            <div key={index} className="qna">
              <p className="question">{el.question}</p>
              <p className="answer">{answers[index]}</p>
            </div>
          ))}
        </div>
      );
    }
  };

  const renderSkills = () => {
    if (details.skills && details.skills.length > 0) {
      return (
        <div style={{ marginBottom: "1.5rem" }}>
          <div className="title1">Skills</div>
          <div className="details">{details.skills.join(", ")}</div>
        </div>
      );
    }
  };
  const renderLanguages = () => {
    if (details.languages && details.languages.length > 0) {
      return (
        <div style={{ marginBottom: "1.5rem" }}>
          <div className="title2">Languages</div>
          <div className="details">{details.languages.join(", ")}</div>
        </div>
      );
    }
  };
  const randomArray = [1, 2];
  console.log(gig.status);

  const renderContent = () => {
    if (status === MISSION_SELECTED) {
      return (
        <div className="submission__container">
          <Submission tasks={gig.tasks} submissions={details.submissions} missionId={gig._id} userId={details._id}/>
          <section className="gig-details">
          <div className="verification-status">
            <div className="veri-stauts ">
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
            {/* <div className="offline-gigs">
              <p>Offline Gigs</p>
              <div className="details">
                {!details.offlineGigs.isWillingToTravel ? "Not " : ""}
                Willing To Travel
              </div>
            </div>
           */}
            {renderSkills()}
            {renderLanguages()}
          
              </div>
          </section>
        </div>
      );
    } else {
      return (
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
                {!details.offlineGigs.isWillingToTravel ? "Not " : ""}
                Willing To Travel
              </div>
            </div>
          </div>
          {renderQuestions()}
          <div className="skills-and-lang">
            {renderSkills()}
            {renderLanguages()}
          </div>
        </section>
      );
    }
  };

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
              {renderContent()}
              <section className="buttons">
                <div className="report">
                  <img src={report} alt=""></img> REPORT THIS APPLICATION
                </div>
                <div>{renderButtons()}</div>
              </section>
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
}
