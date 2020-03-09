import React, {useEffect, useState} from "react";
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
import axios from 'axios';
import { Fragment } from "react";

export default function UserResume() {
  const [resume, setResume] = useState({})
  const [user, setUser] = useState({})
  useEffect(() => {
    const userId = "5e2d6ffbacb703745ebc0f06";
    const url = `resume/user/${userId}`;
    axios.get(url)
      .then(res => {
        const resumeData = res.data.resume;
        const userData = res.data.user;
        console.log(resumeData)
        setResume(resumeData)
        setUser(userData)
      })
  },[])

  const edu = Object.entries(resume) && resume.constructor === Object && resume.education;
  // if(resume){
  //   edu = {resume.education}
  // }
  console.log(edu)

  return (
    <Fragment>
      {/* const {...resume} = resume; */}
     { Object.entries(resume).length > 0 ? 
     
    <div className="resume-with-userCard-block">
      <UserCard resume={resume} />
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
            <div style={{padding: "1rem 0"}}>
              {resume.education.PG ?
              <div className={"education"} style={{borderBottom: "1px solid #ccc"}}>
              <p className="heading">{"Post Graduation"}</p>
              <div className="sub-head">{edu.PG.instituteName}</div>
              <div className="sub-head">{edu.PG.course}</div>
              <div className="sub-head">{edu.PG.marks.val} {edu.PG.marks.type}</div>
              <div className="sub-head">{edu.PG.endYear}</div>
              </div>
              :null}

              {resume.education.UG ? 
              <div className={"education"} style={{borderBottom: "1px solid #ccc"}}>
              <p className="heading">{"Graduation"}</p>  
              <div className="sub-head">{edu.UG.instituteName}</div>  
              <div className="sub-head">{edu.UG.course}</div>
              <div className="sub-head">{edu.UG.marks.val} {edu.UG.marks.type}</div>
              <div className="sub-head">{edu.UG.endYear}</div>
              </div>
            : null}

            {resume.education.diploma ? 
              <div className={"education"} style={{borderBottom: "1px solid #ccc"}}>
              <p className="heading">{"Diploma"}</p>  
              <div className="sub-head">{edu.diploma.instituteName}</div>  
              <div className="sub-head">{edu.diploma.course}</div>
              <div className="sub-head">{edu.diploma.marks.val} {edu.diploma.marks.type}</div>
              <div className="sub-head">{edu.diploma.endYear}</div>
              </div>
            : null}

            {resume.education.tenth ? 
              <div className={"education"} style={{borderBottom: "1px solid #ccc"}}>
              <p className="heading">{"Class 10th"}</p>  
              <div className="sub-head">{edu.tenth.instituteName}</div>  
              <div className="sub-head">{edu.tenth.course}</div>
              <div className="sub-head">{edu.tenth.marks.val} {edu.tenth.marks.type}</div>
              <div className="sub-head">{edu.tenth.endYear}</div>
              </div>
            : null}

            {resume.education.twelfth ? 
              <div className={"education"} style={{borderBottom: "1px solid #ccc"}}>
              <p className="heading">{"Class 12th"}</p>  
              <div className="sub-head">{edu.twelfth.instituteName}</div>  
              <div className="sub-head">{edu.twelfth.course}</div>
              <div className="sub-head">{edu.twelfth.marks.val} {edu.twelfth.marks.type}</div>
              <div className="sub-head">{edu.twelfth.endYear}</div>
              </div>
            : null}
            </div>
              
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
              // borderBottom: "1px solid"
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
            
              {resume.workExperience ? resume.workExperience.map(workEx =>
              <div className="work-experience">
                <div className="org">{workEx.organisation} </div>
                <div className="designation"> {workEx.designation} </div>
                <div className="description"> {workEx.description} </div>
              <div className="location">{workEx.location}</div>
              <div className="duration">
                {/* {workEx.start.month} {workEx.start.year}-{workEx.end.month} {workEx.start.year} */}
                Aug 2015 - Jan 2016
                </div>
              </div>
              
              ) : null}
              
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
    </div> : null }
    </Fragment>
  );
}
