import React from "react";
import { Progress } from "antd";
import phoneIcon from "./img/phoneIcon.svg";
import emailIcon from "./img/emailIcon.svg";
import locationIcon from "./img/locationIcon.svg";
import objectiveIcon from "./img/headingImg/objectiveIcon.svg";
import teamIcon from "./img/headingImg/team.svg";
import { isMoment } from "moment";

export default function UserCard(props) {
  const {firstname, city, email, phone, profileScore, imgUrl} = props.user;
  const {facebook, youtube, github, linkedin, quora, instagram, behance, dribbble, blog, medium} = props.digitalProfile;
  return (
    <div className="user-resume-dataBrief-block">
      <div className="userProfile-block">
        <div className="avatar-block">
          <div className="avatar-img-block">
            <img style={{width: "100%"}} src={imgUrl} alt=""></img>
          </div>
          <h2 style={{fontWeight:500, color: "#282c3f"}}>{firstname}</h2>
        </div>
        <div className="avatar-intro-block">
          <div className="residence-block">
            <img src={locationIcon} alt=""></img>
            <p style={{fontWeight:500, color: "#282c3f"}}>{city}</p>
          </div>
          <div className="mail-block">
            <img src={emailIcon} alt=""></img>
            <p style={{fontWeight:500, color: "#282c3f"}}>{email}</p>
          </div>
          <div className="number-block">
            <img src={phoneIcon} alt=""></img>
            <p style={{fontWeight:500, color: "#282c3f"}}>{phone}</p>
          </div>
        </div>
        <div className="divider-block"></div>
        <div className="profile-Score">
          <p className="profile-Score__para">Profile Score</p>
          <Progress strokeColor={{'0%': '#2acf18','100%': '#2acf18'}} percent={profileScore} status="active" />
        </div>
      </div>
      <div className="education-block-one">
        <div
          className="education-block-two"
          style={{
            // borderBottom: "1px solid"
          }}
        >
          <section style={{ display: "flex", padding: "0.5rem 0" }}>
            <img
              src={objectiveIcon}
              alt=""
              className="education-block-two-icon"
            ></img>
            <h2 className="education-block-two-heading" style={{fontSize: "21px"}}>Career Objective</h2>
          </section>
          <div style={{paddingTop: '1rem'}}>
            {props.careerObjectives}
          </div>
        </div>
      </div>
      <div className="education-block-one">
        <div
          className="education-block-two"
          style={{
            // borderBottom: "1px solid"
          }}
        >
          <section style={{ display: "flex",  padding: "0.5rem 0" }}>
            <img
              src={teamIcon}
              alt=""
              className="education-block-two-icon"
            ></img>
            <h2 className="education-block-two-heading" style={{fontSize: "23px"}}>Digital Profiles</h2>
          </section>
          <div className="resume-digital-profiles">
              {facebook ? <div className="digital-profile-container"><i className="fa fa-facebook-official fa-2x" style={{color: '#3c5a98'}}></i> <a href={"https://" + facebook} target="_blank"  className="link-text">{facebook}</a></div> : null}
              {facebook ? <div className="digital-profile-container"><i className="fa fa-facebook-official fa-2x" style={{color: '#3c5a98'}}></i> <a href={facebook} target="_blank"  className="link-text">{facebook}</a></div> : null}
              {facebook ? <div className="digital-profile-container"><i className="fa fa-facebook-official fa-2x" style={{color: '#3c5a98'}}></i> <a href={facebook} target="_blank"  className="link-text">{facebook}</a></div> : null}
              {instagram ? <div className="digital-profile-container"><i className="fa fa-instagram fa-2x" style={{color: "#dd2a7b"}}></i> <a href={"https://" + instagram} target="_blank"  className="link-text">{instagram}</a></div> : null}
              {linkedin ? <div className="digital-profile-container"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true" style={{color: "#0e76a8"}}></i><a href={"https://" + linkedin} target="_blank"  className="link-text">{linkedin}</a></div> : null}
              {youtube ? <div className="digital-profile-container"><i class="fa fa-youtube-play fa-2x" style={{color: "#FF0000"}} aria-hidden="true"></i><a href={"https://" + youtube} target="_blank"  className="link-text">{youtube}</a></div> : null}
              {github ? <div className="digital-profile-container"><i class="fa fa-github fa-2x" style={{color: "#333"}} aria-hidden="true"></i><a href={github} target="_blank"  className="link-text">{github}</a></div> : null}
              {behance ? <div className="digital-profile-container"><i class="fa fa-behance-square fa-2x" style={{color: "#053eff"}} aria-hidden="true"></i><a href={"https://" + behance} target="_blank"  className="link-text">{behance}</a></div> : null}
              {dribbble ? <div className="digital-profile-container"><i class="fa fa-dribbble fa-2x" style={{color: "#ea4c89"}} aria-hidden="true"></i><a href={"https://" + dribbble} target="_blank"  className="link-text">{dribbble}</a></div> : null}
              {quora ? <div className="digital-profile-container"><i class="fa fa-quora fa-2x" style={{color: "#AA2200"}} aria-hidden="true"></i><a href={"https://" + quora} target="_blank"  className="link-text">{quora}</a></div> : null}
              {blog ? <div className="digital-profile-container"><i class="fa fa-rss-square fa-2x" style={{color: ""}} aria-hidden="true"></i><a href={"https://" + blog} target="_blank"  className="link-text">{blog}</a></div> : null}
              {medium ? <div className="digital-profile-container"><i class="fa fa-medium fa-2x" style={{color: "black"}} aria-hidden="true"></i><a href={"https://" + medium} target="_blank"  className="link-text">{medium}</a></div> : null}            
              </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    // </div>
  );
}
