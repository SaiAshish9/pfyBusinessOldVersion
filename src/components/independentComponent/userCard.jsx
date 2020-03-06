import React from "react";
import { Progress } from "antd";
import phoneIcon from "./img/phoneIcon.svg";
import emailIcon from "./img/emailIcon.svg";
import locationIcon from "./img/locationIcon.svg";
import objectiveIcon from "./img/headingImg/objectiveIcon.svg";
import teamIcon from "./img/headingImg/team.svg";

export default function UserCard() {
  return (
    <div className="user-resume-dataBrief-block">
      <div className="userProfile-block">
        <div className="avatar-block">
          <div className="avatar-img-block">
            <img src={""} alt=""></img>
          </div>
          <h2>{"firstName"}</h2>
        </div>
        <div className="avatar-intro-block">
          <div className="residence-block">
            <img src={locationIcon} alt=""></img>
            <p>{"city"}</p>
          </div>
          <div className="mail-block">
            <img src={emailIcon} alt=""></img>
            <p>{"email"}</p>
          </div>
          <div className="number-block">
            <img src={phoneIcon} alt=""></img>
            <p>{"phone"}</p>
          </div>
        </div>
        <div className="divider-block"></div>
        <div className="profile-Score">
          <p className="profile-Score__para">Profile Score</p>
          <Progress percent={50} status="active" />
        </div>
      </div>
      <div className="education-block-one">
        <div
          className="education-block-two"
          style={{
            borderBottom: "1px solid"
          }}
        >
          <section style={{ display: "flex" }}>
            <img
              src={objectiveIcon}
              alt=""
              className="education-block-two-icon"
            ></img>
            <h2 className="education-block-two-heading">Career Objective</h2>
          </section>
        </div>
      </div>
      <div className="education-block-one">
        <div
          className="education-block-two"
          style={{
            borderBottom: "1px solid"
          }}
        >
          <section style={{ display: "flex" }}>
            <img
              src={teamIcon}
              alt=""
              className="education-block-two-icon"
            ></img>
            <h2 className="education-block-two-heading">Digital Profiles</h2>
          </section>
        </div>
      </div>
    </div>
  );
}
