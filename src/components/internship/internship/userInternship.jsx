import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { ApprovedCardStat } from "./cardStat";
import { UnderReviewCardStat } from "./cardStat";
import { EndedCardStat } from "./cardStat";
import { RejectedCardStat } from "./cardStat";

export default function UserInternship() {
  const history = useHistory();

  const handleNewInternshipForm = () => {
    history.push("/internship/form");
  };

  return (
    <div className="user-internship-main-block">
      <div className="user-internship-header-block">
        <h2 className="user-internship__h2">Your Internship</h2>
        <Button onClick={handleNewInternshipForm}>+New Internship</Button>
      </div>
      <div className="internship-stat-block">
        <h2>Approved</h2>
        <ApprovedCardStat />
      </div>
      <div className="internship-stat-block">
        <h2>Under Review</h2>
        <UnderReviewCardStat />
      </div>
      <div className="internship-stat-block">
        <h2>Ended</h2>
        <EndedCardStat />
      </div>
      <div className="internship-stat-block">
        <h2>Rejected</h2>
        <RejectedCardStat />
      </div>
    </div>
  );
}
