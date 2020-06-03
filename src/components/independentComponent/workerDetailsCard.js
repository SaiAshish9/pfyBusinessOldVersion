import React, { useState, useEffect } from "react";
import { Modal, Progress, Button } from "antd";
import moment from "moment";

export default function workerDetailsCard(props) {
  const user = props.user ? props.user : null;

  function calculateAge(birthday) {
    // birthday is a date
    var ageDifMs = Date.now() - new Date(birthday).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <section className="gig-card">
      <div className="name-img">
        <img src={user.imgUrl} alt=""></img>
        <p className="name">
          {user.firstName} <br /> <span className="email">{user.email}</span>{" "}
        </p>
      </div>
      <div className="university-details">
        <div className="univ-name">
          {user.college ? user.college : "College Not Specified"}
        </div>
        <div className="other-details">
          <div className="gender">
            {user.gender === "M" ? "Male" : "Female"},{calculateAge(user.dob)}
          </div>
          <div className="city">{user.city}</div>
          <div className="mobile">{user.phone}</div>
        </div>
      </div>
      <div className="gig-scores">
        <Progress
          className="progress-bar"
          percent={user.resumeScore}
          showInfo={false}
        />
        <div className="percentage">Gig Score: {user.resumeScore}%</div>
      </div>
    </section>
  );
}
