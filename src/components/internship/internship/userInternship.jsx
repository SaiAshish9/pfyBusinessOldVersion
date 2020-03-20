import React, {useEffect, useState} from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { ApprovedCardStat } from "./cardStat";
import { UnderReviewCardStat } from "./cardStat";
import { EndedCardStat } from "./cardStat";
import { RejectedCardStat } from "./cardStat";
import axios from 'axios';

export default function UserInternship() {
  const history = useHistory();

  const handleNewInternshipForm = () => {
    history.push("/internship/form");
  };
  
  // const [internships, setInternships] = useState(null);
  const [approvedApplication, setApprovedApplication] = useState(null);
  const [underReviewApplication, setUnderReviewApplication] = useState(null);
  const [rejectedApplication, setRejectedApplication] = useState(null);
  const [totalApplication, setTotalApplication] = useState(null);
  const [pendingApplication, setPendingApplication] = useState(null);

  useEffect(() => {
    console.log("hey useEffect is running")
    const url = "internship/fetch_internship_as_company";
    axios.get(url)
      .then(res => {
          const internships = res.data; 
          console.log(res.data)
          const approvedApp = internships.filter(el => el.status === 1001)
          const underReviewApp = internships.filter(el => el.status === 1000)
          const rejectedApp = internships.filter(el => el.status === 1002)
          setApprovedApplication(approvedApp)
          setUnderReviewApplication(underReviewApp)
          setRejectedApplication(rejectedApp)

          setTotalApplication(internships.length)
          setPendingApplication(internships.length - (underReviewApp.length + rejectedApp.length))
      })
  }, [])
  

  return (
    <div className="user-internship-main-block">
      <div className="user-internship-header-block">
        <h2 className="user-internship__h2">Your Internship</h2>
        <Button onClick={handleNewInternshipForm}>+New Internship</Button>
      </div>
      <div className="internship-stat-block">
        <h2>Approved</h2>
        {approvedApplication ? approvedApplication.map(internship => 
          <ApprovedCardStat internship={internship} totalApplication={totalApplication} pendingApplication={pendingApplication} />
        ) : null }
        
      </div>
      <div className="internship-stat-block">
        <h2>Under Review</h2>
        {
          underReviewApplication ? underReviewApplication.map(internship => 
            <UnderReviewCardStat internship={internship} totalApplication={totalApplication} pendingApplication={pendingApplication} />
            ):null
        }
        
      </div>
      <div className="internship-stat-block">
        <h2>Ended</h2>
        <EndedCardStat />
      </div>
      <div className="internship-stat-block">
        <h2>Rejected</h2>
        {rejectedApplication ? rejectedApplication.map(internship => 
          <RejectedCardStat internship={internship} totalApplication={totalApplication} pendingApplication={pendingApplication} />
        ) : null}
        
      </div>
    </div>
  );
}
