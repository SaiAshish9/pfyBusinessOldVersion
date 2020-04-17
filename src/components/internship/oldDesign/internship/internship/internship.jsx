import { Tabs } from "antd";
import React, {useState, useEffect} from "react";
// import showOffImg from "../../../assets/img/gig/showOffImg.svg";
// import showOffImg from "../";
// import ExistingInternship from "./existingInternship";
// import NewInternship from "./newInternship";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const { TabPane } = Tabs;

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
    <div className="gig-main-block">
      <h1 className="gig-main__header">Internship</h1>
      <div className="showOff-block">
        <img src={"showOffImg"} alt="" className="showOff__img" />
        <h1 className="showOff__h1">
          Some Dummy Text For The Representation !
        </h1>
        <p className="showOff__p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when.
        </p>
      </div>
      <Tabs defaultActiveKey="1" className="new-or-existing-gig-block">
        <TabPane tab="New Internships" key="1">
          {/* <NewInternship></NewInternship> */}
        </TabPane>
        <TabPane
          tab="Existing Internships"
          key="2"
          className="existing-gig-blocsk"
        >
          {/* <ExistingInternship></ExistingInternship> */}
        </TabPane>
      </Tabs>
    </div>
  );
}
