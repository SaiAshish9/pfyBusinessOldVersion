import React from "react";
import boostInternshipIcon from "../img/boostInternshipIcon.svg";
import moreIcon from "../img/moreIcon.svg";
import approvedInternshipIcon from "../img/approvedInternshipIcon.svg";
import underReviewInternIcon from "../img/underReviewInternIcon.svg";
import endedInternshipIcon from "../img/endedInternshipIcon.svg";
import { Button } from "antd";

export function ApprovedCardStat() {
  return (
    <div className="approved-card-main-block">
      <div className="approved-card-img-block">
        <img
          src={approvedInternshipIcon}
          alt=""
          className="approved-card__img"
        />
      </div>
      <div className="approved-internship-content-block">
        <div className="approved-internship-title-block">
          <h2 className="approved-internship-title__h2">
            Business Development
          </h2>
          <img src={moreIcon} alt="" />
        </div>
        <div className="approved-internship-brief-block">
          <p className="approved-internship-brief__p">Total Applications :</p>
          <p className="approved-internship-brief__p">Pending Applications :</p>
          <Button
            className="approved-internship-brief__button"
            type="primary"
            shape="round"
          >
            <img src={boostInternshipIcon} alt=""></img>Boost Internship
          </Button>
        </div>
      </div>
    </div>
  );
}

export function UnderReviewCardStat() {
  return (
    <div className="underReview-card-main-block">
      <div className="underReview-card-img-block">
        <img
          src={underReviewInternIcon}
          alt=""
          className="underReview-card__img"
        />
      </div>
      <div className="underReview-internship-content-block">
        <div className="underReview-internship-title-block">
          <h2 className="underReview-internship-title__h2">
            Business Development
          </h2>
          <img src={moreIcon} alt="" />
        </div>
        <div className="underReview-internship-brief-block">
          <p className="underReview-internship-brief__p">
            Total Applications :
          </p>
          <p className="underReview-internship-brief__p">
            Pending Applications :
          </p>
        </div>
      </div>
    </div>
  );
}

export function EndedCardStat() {
  return (
    <div className="ended-card-main-block">
      <div className="ended-card-img-block">
        <img src={endedInternshipIcon} alt="" className="ended-card__img" />
      </div>
      <div className="ended-internship-content-block">
        <div className="ended-internship-title-block">
          <h2 className="ended-internship-title__h2">Business Development</h2>
          <img src={moreIcon} alt="" />
        </div>
        <div className="ended-internship-brief-block">
          <p className="ended-internship-brief__p">Total Applications :</p>
          <p className="ended-internship-brief__p">Pending Applications :</p>
        </div>
      </div>
    </div>
  );
}

export function RejectedCardStat() {
  return (
    <div className="rejected-card-main-block">
      <div className="rejected-card-img-block">
        <img src={endedInternshipIcon} alt="" className="rejected-card__img" />
      </div>
      <div className="rejected-internship-content-block">
        <div className="rejected-internship-title-block">
          <h2 className="rejected-internship-title__h2">
            Business Development
          </h2>
          <img src={moreIcon} alt="" />
        </div>
        <div className="rejected-internship-brief-block">
          <p className="rejected-internship-brief__p">Total Applications :</p>
          <p className="rejected-internship-brief__p">Pending Applications :</p>
        </div>
      </div>
    </div>
  );
}
