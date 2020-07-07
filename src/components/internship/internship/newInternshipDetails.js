import React, { Fragment, useState, useEffect } from "react";
import {
  Button,
  Tabs,
  Select,
  Table,
  Skeleton,
  message,
  Popconfirm,
  DatePicker,
} from "antd";
import randomImg from "../../../assets/randomImg.jpg";
import view from "../../../assets/img/internship/internshipDetails/view.svg";
import edit from "../../../assets/img/internship/internshipDetails/edit.svg";
import close from "../../../assets/img/internship/internshipDetails/close.svg";
import calendar from "../../../assets/img/internship/internshipDetails/calendar.svg";
import share from "../../../assets/img/internship/internshipDetails/share.svg";
import rocket from "../../../assets/img/internship/rocket.svg";
import BoostInternship from "../../newComp/boostYourInternship/boostYourInternship";
import ShareInternship from "../../newComp/shareInternship/shareInternship";
import axios from "axios";
import InternshipStatus from "../../newComp/internshipStatus/internshipStatus";
import WorkerDetails from "./WorkerDetails";
import { getHeaders } from "../../../helpers/getHeaders";
import moment from "moment";
import { CalendarOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
const { Option } = Select;

export default function NewInternshipDetails(props) {
  const internshipId = props.match.params.internshipId;

  const [isShowBoost, setIsShowBoost] = useState(false);
  const [isShowResume, setIsShowResume] = useState(false);
  const [isShowShareInternship, setIsShowShareInternship] = useState(false);

  const [clickedUserId, setClickedUserId] = useState(null);

  const [internship, setInternship] = useState(false);
  const [applicationStats, setApplicationStats] = useState(null);
  const [appliedApplicationsData, setAppliedApplicationsData] = useState({});
  const [allApplications, setAllApplications] = useState([]);
  const [currentTab, setCurrentTab] = useState("pending");
  const [selectDefault, setSelectDefault] = useState("most-recent");
  const [newDeadline, setNewDeadLine] = useState(null);
  const updateStatus = (applicationId, status) => {
    const applications = allApplications.map((application) => {
      if (application._id === applicationId) {
        console.log(application);
        application.status = status;
        console.log(application);

        return application;
      }
      return application;
    });
    const stats = setStats(applications);
    const filteredApplication = filterApplications(applications);
    setAllApplications(applications);
    setAppliedApplicationsData(filteredApplication);
    setApplicationStats(stats);
  };
  const totalStats = (array, status) =>
    array.length ? array.filter((el) => el.status === status * 1).length : 0;

  const filterApplications = (applications) => {
    const pending = applications.filter((el) => el.status === 300);
    const selected = applications.filter((el) => el.status === 302);
    const shortlisted = applications.filter((el) => el.status === 301);
    const rejected = applications.filter((el) => el.status === 303);
    return { pending, selected, shortlisted, rejected };
  };
  const setStats = (applications) => {
    const pending = totalStats(applications, 300);
    const shortlisted = totalStats(applications, 301);
    const selected = totalStats(applications, 302);
    return { pending, shortlisted, selected };
  };
  useEffect(() => {
    const url1 = `internship/company_fetchone/${internshipId}`;
    const url2 = `internship/get_applications/${internshipId}`;
    axios.get(url1, getHeaders()).then((res) => {
      const data = res.data;
      const stats = setStats(data.appliedUsers);
      setApplicationStats(stats);
      setInternship(data);
    });

    axios.get(url2, getHeaders()).then((res) => {
      let {
        data: { applications },
      } = res;
      applications = applications.sort(
        (a, b) =>
          new Date(b.lastUpdatedAt).getTime() -
          new Date(a.lastUpdatedAt).getTime()
      );
      setAllApplications(applications);
      const filter = filterApplications(applications);
      setAppliedApplicationsData(filter);
    });
  }, []);

  // console.log('APPLIED APPLICATIONS DATA', appliedApplicationsData)

  let i = 1;

  const boostIntermshipHandler = () => {
    setIsShowBoost(true);
  };
  const isCloseBoost = () => {
    setIsShowBoost(false);
  };
  const isShowShare = () => {
    setIsShowShareInternship(true);
  };
  const isCloseShare = () => {
    setIsShowShareInternship(false);
  };
  const changeDeadline = (applyBefore) => {
    axios
      .put(
        `/internship/change_deadline/${internship._id}`,
        { applyBefore },
        getHeaders()
      )
      .then(() => {
        message.success("Internship Deadline Changed");
        // const curInternship = internship;
        internship.applyBefore = moment(applyBefore).format("DD MMM YYYY");
        setInternship({...internship});
      });
  };
  const closeHiring = () => {
    changeDeadline(new Date().toISOString());
  };
  const extendDeadline = () => {
    changeDeadline(newDeadline.toISOString())
  }
  const getDatePicker = () => <DatePicker defaultValue={moment(internship.applyBefore)} onChange={setNewDeadLine} />

  const columns = [
    {
      title: "Name",
      //   dataIndex: "name",
      key: "name",
      render: (record) => (
        <WorkerDetails
          updateStatus={updateStatus}
          userId={record.id}
          className="name-and-img"
          applications={record.applications}
          // applications = {allApplications}
          internshipId={internshipId}
          index={record.key - 1}
          questions={internship.questions}
        >
          <img src={record.img} alt="" />
          <span className="name">{record.name}</span>
        </WorkerDetails>
      ),
    },
    {
      title: "Institute",
      dataIndex: "institute",
      key: "institute",
    },

    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },

    {
      title: "Resume Score",
      dataIndex: "score",
      key: "score",
      className: "gig-score",
      render: (score) => (
        <div className="resume-score">
          <div className={"progress-bar"}>
            <div className="inner" style={{ width: `${score}%` }}>
              <p>{score}%</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const tableData = (array) => {
    return array
      ? array.map((application, index) => {
          const { user } = application;
          return {
            key: index + 1,
            name: user.firstName,
            institute: user.college,
            city: user.city,
            score: user.resumeScore,
            img: user.imgUrl,
            id: user._id,
            applications:array,
          };
        })
      : null;
  };

  const pendingApplicationData = appliedApplicationsData
    ? tableData(appliedApplicationsData.pending)
    : null;
  const selectedApplicationData = appliedApplicationsData
    ? tableData(appliedApplicationsData.selected)
    : null;
  const shortlistedApplicationData = appliedApplicationsData
    ? tableData(appliedApplicationsData.shortlisted)
    : null;
  const rejectedApplicationData = appliedApplicationsData
    ? tableData(appliedApplicationsData.rejected)
    : null;

  const tabHandler = (val) => {
    setCurrentTab(val);
    setSelectDefault("most-recent");
  };

  const selectHandler = (value) => {
    setSelectDefault(value);
    let oldApplication;
    let sortedApplication;
    if (currentTab === "pending")
      oldApplication = appliedApplicationsData.pending;
    else if (currentTab === "selected")
      oldApplication = appliedApplicationsData.selected;
    else if (currentTab === "shortlisted")
      oldApplication = appliedApplicationsData.shortlisted;
    else oldApplication = appliedApplicationsData.rejected;

    if (value === "resume-score")
      sortedApplication = oldApplication.sort(
        (a, b) => b.user.resumeScore - a.user.resumeScore
      );
    else if (value === "most-recent")
      sortedApplication = oldApplication.sort(
        (a, b) =>
          new Date(b.lastUpdatedAt).getTime() -
          new Date(a.lastUpdatedAt).getTime()
      );

    // console.log('sortedApplication ', sortedApplication)
    setAppliedApplicationsData({
      ...appliedApplicationsData,
      [value]: sortedApplication,
    });
  };
  return (
    <Fragment>
      <div className="internship-details-block">
        {internship ? (
          <div className="internship-summary-and-overview-block">
            <div className="summary-block">
              <h1 className="heading">{internship.designation}</h1>
              <div className="suumary-details">
                <div>
                  Stipend <br />{" "}
                  <span>
                    &#8377;{" "}
                    {internship.stipendType === "negotiable"
                      ? internship.minStipend + "-" + internship.maxStipend
                      : internship.stipendType === "unpaid"
                      ? "Unpaid"
                      : internship.stipend}
                  </span>{" "}
                </div>
                <div>
                  Deadline <br /> <span>{internship.applyBefore}</span>{" "}
                </div>
                <div>
                  Duration <br /> <span>{internship.duration}</span>{" "}
                </div>
                <Button onClick={boostIntermshipHandler} className="boost-btn">
                  {" "}
                  <img src={rocket} alt="" /> Boost Internship{" "}
                </Button>
              </div>
              <div className="action-buttons">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={internship.dynamicLink}
                >
                  <Button className="view-btn">
                    <img src={view} alt="" /> View Internship
                  </Button>{" "}
                </a>
                {/* <Button className="edit-btn">
                  <img src={edit} alt="" /> Edit Internship
                </Button> */}
                <Popconfirm
                  onConfirm={closeHiring}
                  title="Are you sure close this Internship?"
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="close-btn">
                    <img src={close} alt="" /> Close Hiring
                  </Button>
                </Popconfirm>
                <Popconfirm
                  icon={<CalendarOutlined />}
                  onConfirm={extendDeadline}
                  title={getDatePicker()}
                  okText="Yes"
                  cancelText="No"
                >
                <Button className="extend-btn">
                  <img src={calendar} alt="" /> Extend Deadline
                </Button>
                </Popconfirm>
                <Button onClick={isShowShare} className="share-btn">
                  <img src={share} alt="" /> Share Internship
                </Button>
              </div>
            </div>
            {applicationStats ? (
              <div className="overview-block">
                <h1 className="heading">Application Overview</h1>
                <div className="details">
                  <div className="single-detail">
                    <p>Pending</p> <span> {applicationStats.pending} </span>
                  </div>
                  <div className="single-detail">
                    <p>Shortlisted</p>{" "}
                    <span>{applicationStats.shortlisted}</span>
                  </div>
                  <div className="single-detail">
                    <p>Selected</p> <span>{applicationStats.selected}</span>
                  </div>
                </div>
              </div>
            ) : (
              <Skeleton active />
            )}
          </div>
        ) : (
          <Skeleton active />
        )}
        <div className="interns-application-block">
          <div className="heading">
            <h2>APPLICATIONS</h2>
            <div className="filter">
              <p>Sort By </p>
              <Select
                value={selectDefault}
                style={{ width: 120 }}
                onChange={selectHandler}
              >
                <Option value="most-recent">Most Recent</Option>
                <Option value="resume-score">Resume Score</Option>
              </Select>
            </div>
          </div>

          <Tabs
            onChange={tabHandler}
            defaultActiveKey={currentTab}
            className="tab"
            type="card"
          >
            <TabPane tab="Pending" key="pending" className="">
              <Table

                className="applied-gigs"
                columns={columns}
                dataSource={pendingApplicationData}
                pagination={false}
                
                // scroll={{ y: 240 }}
              />
            </TabPane>
            <TabPane tab="Shortlisted" key="shortlisted" className="">
              <Table
                className="applied-gigs"
                columns={columns}
                dataSource={shortlistedApplicationData}
                pagination={false}
                // scroll={{ y: 240 }}
              />
            </TabPane>
            <TabPane tab="Selected" key="selected" className="">
              <Table
                className="applied-gigs"
                columns={columns}
                dataSource={selectedApplicationData}
                pagination={false}
                // scroll={{ y: 240 }}
              />
            </TabPane>
            <TabPane tab="Rejected" key="rejected" className="">
              <Table
                className="applied-gigs"
                columns={columns}
                dataSource={rejectedApplicationData}
                pagination={false}
                // scroll={{ y: 240 }}
              />
            </TabPane>
          </Tabs>
        </div>
      </div>
      <BoostInternship isShowBoost={isShowBoost} isCloseBoost={isCloseBoost} />
      <ShareInternship
        isShow={isShowShareInternship}
        isClose={isCloseShare}
        intershipId={null}
      />
    </Fragment>
  );
}
