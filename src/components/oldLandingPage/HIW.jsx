import React from "react";
import circle16 from "../../assets/img/landingPage/circle16.svg";
import circle38 from "../../assets/img/landingPage/circle38.svg";
import HIWImg from "../../assets/img/landingPage/HIWImg.svg";

export default function HIW() {
  return (
    <div className="hiw-main-block">
      <div className="hiw-header-block">
        <h1 className="hiw__header">
          HOW IT WORKS?
          <img src={circle16} alt="" className="header-img-one" />
          <img src={circle38} alt="" className="header-img-two" />
        </h1>
      </div>

      <p className="hiw__para">
        From creating a gig to reviewing the performance of gig workers, <br />
        we make the process easy and seamless!
      </p>
      <img src={HIWImg} alt="" className="hiw__img" />
      <div className="can-do-block-one">
        <h2 className="can-do__header">CREATE A GIG</h2>
        <p className="can-do__para">
          Chose tasks you want gig workers to perform in our partner dashboard
          and launch a Gig.
        </p>
      </div>
      <div className="can-do-block-two">
        <h2 className="can-do__header">HIRE GIG WORKERS</h2>
        <p className="can-do__para">
          Select Gig worker which match your requirement so that they can start
          performing tasks.
        </p>
      </div>
      <div className="can-do-block-three">
        <h2 className="can-do__header">REVIEW PERFORMANCE</h2>
        <p className="can-do__para">
          Review work submitted by gig workers in our partner dashboard and pay
          only for workers you approve
        </p>
      </div>
    </div>
  );
}
