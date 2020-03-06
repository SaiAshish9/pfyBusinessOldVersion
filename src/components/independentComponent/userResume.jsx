import React from "react";
import { Button } from "antd";
import UserCard from "./userCard";
import "./_userResume.scss";
import educationIcon from "./img/headingImg/educationIcon.svg";
import experienceIcon from "./img/headingImg/experienceIcon.svg";
import positionIcon from "./img/headingImg/positionIcon.svg";
import skillIcon from "./img/headingImg/skillIcon.svg";
import teamIcon from "./img/headingImg/team.svg";
import trainingIcon from "./img/headingImg/trainingIcon.svg";
import objectiveIcon from "./img/headingImg/objectiveIcon.svg";

export default function UserResume() {
  return (
    <div className="resume-with-userCard-block">
      <UserCard />
      <div className="resume-block">
        <div className="education-block-one">
          <div className="education-block-two">
            <section style={{ display: "flex" }}>
              <img
                src={objectiveIcon}
                alt=""
                className="education-block-two-icon"
              ></img>
              <h2 className="education-block-two-heading">
                {"Interview Questions & Answers"}
              </h2>
            </section>
          </div>
        </div>

        <div className="education-block-one">
          <div className="education-block-two">
            <section style={{ display: "flex" }}>
              <img
                src={educationIcon}
                alt=""
                className="education-block-two-icon"
              ></img>
              <h2 className="education-block-two-heading">Education</h2>
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
                src={skillIcon}
                alt=""
                className="education-block-two-icon"
              ></img>
              <h2 className="education-block-two-heading">Skills</h2>
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
                src={experienceIcon}
                alt=""
                className="education-block-two-icon"
              ></img>
              <h2 className="education-block-two-heading">Work Experience</h2>
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
                src={positionIcon}
                alt=""
                className="education-block-two-icon"
              ></img>
              <h2 className="education-block-two-heading">
                Positions of responsibilities
              </h2>
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
                src={trainingIcon}
                alt=""
                className="education-block-two-icon"
              ></img>
              <h2 className="education-block-two-heading">Training</h2>
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
              <h2 className="education-block-two-heading">Projects</h2>
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
              <h2 className="education-block-two-heading">Achievements</h2>
            </section>
          </div>
        </div>
      </div>
      <div className="apply-block">
        <div>
          <Button className="download-footer-button" size="small">
            Download
          </Button>
          <Button className="report-footer-button" size="small">
            Report
          </Button>
        </div>
        <div>
          <Button className="select-footer-button" type="primary" size="small">
            Select
          </Button>
          <Button
            className="shortlist-footer-button"
            type="primary"
            size="small"
          >
            Shortlist
          </Button>
          <Button className="reject-footer-button" type="primary" size="small">
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}
