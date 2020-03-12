import React from "react";
import icon1 from "../img/internshipPostedIcon.svg";
import icon2 from "../img/applicationReceiveIcon.svg";
import icon3 from "../img/internshipView.svg";

export default function QuickStat(props) {
  const {totalApplication} = props;
  return (
    <div className="quick-stat-block">
      <div className="quick-stat-content-block">
        <p className="quick-stat__p">Quick Stats</p>
      </div>
      <div className="stat-brief-block">
        <div className="state-brief-sub-block">
          <div
            className="state-brief-img-block"
            style={{ backgroundColor: "#f7b924" }}
          >
            <img src={icon1} alt="" className="state-brief__img" />
          </div>
          <div className="stat-brief-content-block">
            <p className="state-brief__p">Internship Posted</p>
            <h2 className="state-brief__h2">{totalApplication}</h2>
          </div>
        </div>
        <div className="state-brief-sub-block">
          <div
            className="state-brief-img-block"
            style={{ backgroundColor: "#7a49f3" }}
          >
            <img src={icon2} alt="" className="state-brief__img" />
          </div>
          <div className="stat-brief-content-block">
            <p className="state-brief__p">Application Received</p>
            <h2 className="state-brief__h2">Dummy data</h2>
          </div>
        </div>
        <div className="state-brief-sub-block">
          <div
            className="state-brief-img-block"
            style={{ backgroundColor: "#4eca8a" }}
          >
            <img src={icon3} alt="" className="state-brief__img" />
          </div>
          <div className="stat-brief-content-block">
            <p className="state-brief__p">Internship View</p>
            <h2 className="state-brief__h2">Dummy data</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
