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
  const {
    gig,
    index,
    changeTaskStatus,
    array,
    changeApplicationStatus,
  } = props;
  const [details, setDetails] = useState(array[index].userId);
  const [status, setStatus] = useState(array[index].status);
  const [answers, setAnswers] = useState(array[index].answers);
  const [curIndex, setCurIndex] = useState(index);
  const [selectLoader, setSelectLoader] = useState(false);
  const [shortlistLoader, setShortlistLoader] = useState(false);
  const [rejectLoader, setRejectLoader] = useState(false);

  const { questions } = gig;
  const carousel = useRef();
  const [visible, setVisible] = useState(false);
  console.log(status);
  const actionData = {
    missionId: gig._id,
    userId: details ? details._id : null,
  };
  const selectCandidateHandler = () => {
    setSelectLoader(true);
    const url = "mission/select ";
    axios
      .post(url, actionData)
      .then((res) => {
        setSelectLoader(false);
        changeApplicationStatus(array[curIndex]._id, MISSION_SELECTED);
        next();
      })
      .catch(() => {
        setSelectLoader(false);
      });
  };

  const shortlistCandidateHandler = () => {
    setShortlistLoader(true);
    const url = "mission/shortlist";
    axios
      .post(url, actionData)
      .then((res) => {
        setShortlistLoader(false);
        changeApplicationStatus(array[curIndex]._id, MISSION_WAITLIST);
        next();
      })
      .catch((err) => {
        setShortlistLoader(false);
      });
  };

  const rejectCandidateHandler = () => {
    setRejectLoader(true);
    const url = "mission/reject";
    axios
      .post(url, actionData)
      .then((res) => {
        setRejectLoader(false);

        changeApplicationStatus(array[curIndex]._id, MISSION_REJECTED);
        next();
      })
      .catch((err) => {
        setRejectLoader(false);
      });
  };

  const showModal = () => {
    setDetails(array[index].userId);
    setAnswers(array[index].answers);
    setStatus(array[index].status);
    setCurIndex(index);
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const next = () => {
    if (array.length === 0) {
      setVisible(false);
      return;
    }
    carousel.current.next();
    const newIndex = (curIndex + 1) % array.length;
    setDetails(array[newIndex].userId);
    setAnswers(array[newIndex].answers);
    setStatus(array[newIndex].status);
    setCurIndex(newIndex);
  };
  const previous = () => {
    if (array.length === 0) {
      setVisible(false);
      return;
    }
    carousel.current.prev();
    const newIndex = curIndex - 1 < 0 ? array.length - 1 : curIndex - 1;
    setDetails(array[newIndex].userId);
    setAnswers(array[newIndex].answers);
    setStatus(array[newIndex].status);
    setCurIndex(newIndex);
  };

  const renderButtons = () => {
    console.log(gig.status);
    const reject = (
      <Button onClick={rejectCandidateHandler} loading={rejectLoader} className="reject">
        Reject
      </Button>
    );
    const shortlist = (
      <Button onClick={shortlistCandidateHandler} loading={shortlistLoader} className="shortlist">
        Shortlist
      </Button>
    );
    const select = (
      <Button onClick={selectCandidateHandler} loading={selectLoader} className="select">
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

  const renderContent = () => {
    if (status === MISSION_SELECTED) {
      return (
        <div className="submission__container">
          <Submission
            tasks={gig.tasks}
            changeTaskStatus={changeTaskStatus}
            submissions={details.submissions}
            missionId={gig._id}
            userId={details._id}
          />
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
          {array.map((el, i) => (
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
