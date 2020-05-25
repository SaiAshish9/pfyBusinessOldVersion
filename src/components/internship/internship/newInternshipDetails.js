import React, { Fragment, useState, useEffect } from "react";
import { Button, Tabs, Select, Table, Skeleton } from "antd";
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
  const [appliedApplicationsData, setAppliedApplicationsData] = useState(null);
  const [currentTab, setCurrentTab] = useState("pending");
  const [selectDefault, setSelectDefault] = useState("most-recent");

  const totalStats = (array, status) =>
    array.length ? array.filter((el) => el.status === status * 1).length : 0;

  // const appliedApplicationsWithStatus = (array, status) => array.length ?  array.filter(el => el.status === status*1 ) : []

  useEffect(() => {
    const url1 = `internship/company_fetchone/${internshipId}`;
    const url2 = `internship/get_applications/${internshipId}`;
    axios.get(url1,getHeaders()).then((res) => {
      const data = res.data;
      // console.log(data)

      const pending = totalStats(data.appliedUsers, 300);
      const shortlisted = totalStats(data.appliedUsers, 302);
      const selected = totalStats(data.appliedUsers, 301);

      // console.log('PENDING '+ pending+ ' shortlisted ' + shortlisted + ' selected ')
      setApplicationStats({ pending, shortlisted, selected });
      setInternship(data);
    });

    axios.get(url2,getHeaders()).then((res) => {
      const {
        data: { applications },
      } = res;
      console.log("APPLIED APPLICATIONS DATA ", res.data);
      // setAppliedApplicationsData(data.applications)
      const pending = applications
        .filter((el) => el.status === 300)
        .sort(
          (a, b) =>
            new Date(b.lastUpdatedAt).getTime() -
            new Date(a.lastUpdatedAt).getTime()
        );
      const selected = applications
        .filter((el) => el.status === 301)
        .sort(
          (a, b) =>
            new Date(b.lastUpdatedAt).getTime() -
            new Date(a.lastUpdatedAt).getTime()
        );
      const shortlisted = applications
        .filter((el) => el.status === 302)
        .sort(
          (a, b) =>
            new Date(b.lastUpdatedAt).getTime() -
            new Date(a.lastUpdatedAt).getTime()
        );
      const rejected = applications
        .filter((el) => el.status === 303)
        .sort(
          (a, b) =>
            new Date(b.lastUpdatedAt).getTime() -
            new Date(a.lastUpdatedAt).getTime()
        );
      // console.log(pending,selected,shortlisted,rejected)
      setAppliedApplicationsData({ pending, selected, shortlisted, rejected });
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
  const openResumeModal = (userId) => {
    setClickedUserId(userId);
    setIsShowResume(true);
  };
  const isCloseResume = () => {
    setIsShowResume(false);
    setClickedUserId(null);
  };

  // useEffect(() => {
  //     setIsShowResume(true)
  // }, [clickedUserId])

  // onClick={(InternshipId) => openModel(InternshipId)}
  const columns = [
    {
      title: "Name",
      //   dataIndex: "name",
      key: "name",
      render: (record) => (
        <div
          onClick={() => openResumeModal(record.id)}
          className="name-and-img"
        >
          <img src={record.img} alt="" />
          <span className="name">{record.name}</span>
        </div>
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
      ? array.map(
          ({ user: { firstName, city, resumeScore, imgUrl, _id } }, index) => {
            return {
              key: index + 1,
              name: firstName,
              institute: "Netaji Subhash Institute of Technology",
              city: city,
              score: resumeScore,
              img: imgUrl,
              id: _id,
            };
          }
        )
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
      {clickedUserId ? (
        <WorkerDetails
          isShow={isShowResume}
          isClose={isCloseResume}
          internshipId={internshipId}
          userId={clickedUserId}
        />
      ) : null}
      <div className="internship-details-block">
        {internship ? (
          <div className="internship-summary-and-overview-block">
            <div className="summary-block">
              <h1 className="heading">Business Development Internship</h1>
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
                <Button className="view-btn">
                  <img src={view} alt="" /> View Internship
                </Button>
                <Button className="edit-btn">
                  <img src={edit} alt="" /> Edit Internship
                </Button>
                <Button className="close-btn">
                  <img src={close} alt="" /> Close Hiring
                </Button>
                <Button className="extend-btn">
                  <img src={calendar} alt="" /> Extend Deadline
                </Button>
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
                scroll={{ y: 240 }}
              />
            </TabPane>
            <TabPane tab="Shortlisted" key="shortlisted" className="">
              <Table
                className="applied-gigs"
                columns={columns}
                dataSource={shortlistedApplicationData}
                pagination={false}
                scroll={{ y: 240 }}
              />
            </TabPane>
            <TabPane tab="Selected" key="selected" className="">
              <Table
                className="applied-gigs"
                columns={columns}
                dataSource={selectedApplicationData}
                pagination={false}
                scroll={{ y: 240 }}
              />
            </TabPane>
            <TabPane tab="Rejected" key="rejected" className="">
              <Table
                className="applied-gigs"
                columns={columns}
                dataSource={rejectedApplicationData}
                pagination={false}
                scroll={{ y: 240 }}
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
