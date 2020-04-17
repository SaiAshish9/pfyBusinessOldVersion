import React, {useState, useEffect} from "react";
import { Button, notification, Switch } from "antd";
import { useHistory } from "react-router-dom";
import QuickStat from "./quickStat";
import UserInternship from "./userInternship";
import axios from 'axios';
import { Fragment } from "react";
import {Skeleton} from 'antd';
// import { LoadingOutlined } from '@ant-design/icons';
// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


export default function Internship() {
  const history = useHistory();

  const handleNotification = () => {
    history.push("/user-resume");
  };

  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("hey useEffect is running")
    const url = "internship/fetch_internship_as_company";
    axios.get(url)
      .then(res => {
        
          const internships = res.data; 
          console.log(res.data)
          console.log(res)
          console.log('TOTAL INTERNSHIPS ' + internships.length)
          const totalInternshipOfCompany = internships.length;
          const approvedApp = internships.filter(el => el.status === 1001)
          const underReviewApp = internships.filter(el => el.status === 1000)
          const rejectedApp = internships.filter(el => el.status === 1002)
          // setApprovedApplication(approvedApp)
          // setUnderReviewApplication(underReviewApp)
          // setRejectedApplication(rejectedApp)
          // setTotalApplication(internships.length)
          // setPendingApplication(internships.length - (underReviewApp.length + rejectedApp.length))
          const pendingApp = (internships.length - (underReviewApp.length + rejectedApp.length))

          const totalApplicationOfCompany = internships.map(data => data.totalApplications).reduce((acc, curr) => acc + curr) ;
          const totalViewsOfCompany = internships.map(app => app.views).reduce((acc, curr) => acc + curr);
          console.log("TOTAL APPLICATION "+ totalApplicationOfCompany)

          const obj = {approvedApp:approvedApp,underReviewApp: underReviewApp,
                        rejectedApp: rejectedApp, totalInternshipOfCompany: totalInternshipOfCompany,
                        totalApplicationOfCompany: totalApplicationOfCompany,
                        totalViewsOfCompany:totalViewsOfCompany, pendingApplication: pendingApp }
          setInternship(obj)
          console.log('%c OBJECT ', 'font-size: 25px, color: red')
          console.log(obj)
          setLoading(false)
      })
  }, [])
  return (
    <Fragment>
    { !loading ? <div className="internship-main-block">
      {internship ? <QuickStat totalInternshipOfCompany={internship.totalInternshipOfCompany} totalApplicationOfCompany={internship.totalApplicationOfCompany} totalViewsOfCompany={internship.totalViewsOfCompany} ></QuickStat> : null}
      {internship ? <UserInternship approvedApplication={internship.approvedApp} underReviewApplication={internship.underReviewApp} rejectedApplication={internship.rejectedApp} totalApplication={internship.totalApplication} pendingApplication={internship.pendingApplication} /> : null}
    </div> : 
    <div style={{margin: "3rem 0", padding: "5rem"}}>
      <Skeleton  avatar paragraph={{ rows: 4 }} />
      <div style={{margin: "2rem 0", padding:"3rem", width: "682px" }} >
      <Skeleton  avatar paragraph={{ rows: 2 }} />
      </div>
    </div> }
    </Fragment>
  );
}
