import React, {useState, useEffect} from "react";
import { Button, notification } from "antd";
import { useHistory } from "react-router-dom";
import QuickStat from "./quickStat";
import UserInternship from "./userInternship";
import axios from 'axios';

export default function Internship() {
  const history = useHistory();

  const handleNotification = () => {
    history.push("/user-resume");
  };

  const [internship, setInternship] = useState(null);

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
          // setApprovedApplication(approvedApp)
          // setUnderReviewApplication(underReviewApp)
          // setRejectedApplication(rejectedApp)
          // setTotalApplication(internships.length)
          // setPendingApplication(internships.length - (underReviewApp.length + rejectedApp.length))
          const pendingApp = (internships.length - (underReviewApp.length + rejectedApp.length))

          const obj = {approvedApp:approvedApp,underReviewApp: underReviewApp, rejectedApp: rejectedApp, totalApplication: internships.length, pendingApplication: pendingApp }
          setInternship(obj)
      })
  }, [])
  // const {approvedApplication, underReviewApplication, rejectedApplication, totalApplication, pendingApplication} = props;

  return (
    <div className="internship-main-block">
      {internship ? <QuickStat totalApplication={internship.totalApplication}></QuickStat> : null}
      {internship ? <UserInternship approvedApplication={internship.approvedApp} underReviewApplication={internship.underReviewApp} rejectedApplication={internship.rejectedApp} totalApplication={internship.totalApplication} pendingApplication={internship.pendingApplication} /> : null}
    </div>
  );
}
