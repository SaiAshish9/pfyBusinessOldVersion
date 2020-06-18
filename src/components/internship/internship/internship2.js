import React, { Fragment, useState, useEffect } from "react";
import { Button, Tabs, Table, Skeleton } from "antd";
import NewCreateInternship from "../internshipForm/newCreateInternship";
import { MoreOutlined } from "@ant-design/icons";
// import rocket from '../../../assets/img/boostInternship/rocket.svg'
import rocket from "../../../assets/img/internship/rocket.svg";
import plus from "../../../assets/img/internship/plus.svg";
import BoostInternship from "../../newComp/boostYourInternship/boostYourInternship";
import { useHistory } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { arrayValidation } from "../../validation/validation";
import { getHeaders } from "../../../helpers/getHeaders";

const { TabPane } = Tabs;

export default function Internship2() {
  const history = useHistory();
  const [Internships, setInternships] = useState(null);
  const [internshipsLoader,setInternshipsLoader] = useState(true);
  const [collectiveData, setCollectiveData] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const [isShowBoost, SetIsShowBoost] = useState(false);
  const handleCreateInternship = () => {
    setIsShow(true);
    console.log("open create internship modal");
  };

  const close = () => {
    setIsShow(false);
  };

  const openBoostInternship = () => {
    SetIsShowBoost(true);
  };
  const isCloseBoost = () => {
    SetIsShowBoost(false);
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "serialNumber",
      width: 80,
      key: "serialNumber",
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      width: 250,
      ellipsis: {
        showTitle: false,
      },
      key: "jobTitle",
      render: (text, record) => (
        <div style={{ color: "blue", cursor: "pointer", display: "flex" }}>
          <span onClick={() => handleInternship(record.id)}>
            {record.jobTitle}
          </span>{" "}
          <img
            onClick={openBoostInternship}
            className="rocket-img-table"
            src={rocket}
            alt=""
          />{" "}
        </div>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Application",
      dataIndex: "application",
      key: "application",
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
    },
    {
      title: "Deadline",
      dataIndex: "deadline",
      key: "deadline",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => <MoreOutlined />,
    },
  ];
  const setInternshipData = async () => {
    const url = "internship/fetch_internship_as_company";
    axios.get(url,getHeaders()).then((res) => {
      const data = res.data;
      console.log("internships ", res.data);
      const totalViews =
        (arrayValidation(data) &&
        data.map((el) => el.views).reduce((acc, curr) => acc + curr)) || 0
      const totalInternships = data.length;
      const totalApplicationReceived =
        (arrayValidation(data) &&
        data
          .map((el) => el.totalApplications)
          .reduce((acc, curr) => acc + curr)) || 0;
      console.log(
        "TOTAL VIEWS " +
          totalViews +
          "totalInternships " +
          totalInternships +
          " totalApplications " +
          totalApplicationReceived
      );
      const collectiveData = {
        totalViews,
        totalInternships,
        totalApplicationReceived,
      };
      setCollectiveData(collectiveData);
      setInternships(data);
      setInternshipsLoader(false)
    });
  }
  useEffect(() => {
    setInternshipData()
  }, []);

  const tableData = (array) => {
    return array.map(
      (
        { _id, designation, totalApplications, createdAt, status,location, applyBefore },
        index
      ) => {
        return {
          key: index + 1,
          serialNumber: index + 1,
          id: _id,
          jobTitle: designation,
          location: location,
          application: totalApplications,
          created: moment(createdAt).format("DD MMM YYYY"),
          deadline: moment(applyBefore).format("DD MMM YYYY"),
          status:
            status === 1000
              ? "Under Review"
              : status === 1001
              ? "Approved"
              : "Rejected",
            
        };
      }
    );
  };

  const internshipData = !internshipsLoader ? tableData(Internships) : null;
  const active = Internships
    ? tableData(Internships.filter((el) => el.status === 1001))
    : null;
  const underReview = Internships
    ? tableData(Internships.filter((el) => el.status === 1000))
    : null;
  const closed = Internships
    ? tableData(Internships.filter((el) => el.status === 1002))
    : null;

  const handleInternship = (id) => {
    history.push("/internship/" + id);
  };
  return (
    <Fragment>
      <NewCreateInternship isShow={isShow} setInternshipData={setInternshipData} close={close} />
      <BoostInternship isShowBoost={isShowBoost} isCloseBoost={isCloseBoost} />
      <div className="internship-block">
        {collectiveData ? (
          <div className="internship-cards fadeIn">
            <div className="card">
              <h2>Total Internship Views</h2>
              <span>{collectiveData.totalViews}</span>
            </div>
            <div className="card">
              <h2>Total Internships Posted</h2>
              <span>{collectiveData.totalInternships}</span>
            </div>
            <div className="card">
              <h2>Total Applications Received</h2>
              <span>{collectiveData.totalApplicationReceived}</span>
            </div>
          </div>
        ) : (
          <Skeleton active />
        )}
        <div className="boost-and-create-internship">
          <div className="boost">
           
              {" "}
              Not receiving enough applications? Click on{" "}
              <img className="rocket-img" src={rocket} alt="" /> to boost your
              Internship now!
           
          </div>
          <Button
            onClick={handleCreateInternship}
            className="new-internship-btn"
          >
            {" "}
            <img style={{ marginRight: "0.5rem" }} src={plus} alt="" /> NEW
            INTERNSHIP
          </Button>
        </div>
        <div className="internship-list-main-block">
          <h2 className="internship-heading">MY INTERNSHIPS</h2>
          <Tabs defaultActiveKey="1" className="myTab" type="card">
            <TabPane tab="All" key="1" className="">
              <Table
                columns={columns}
                dataSource={internshipData}
                pagination={false}
                scroll={{ y: 240 }}
                // tableLayout="auto"
                // scroll={{}}
              />
            </TabPane>
            <TabPane tab="Active" key="2" className="">
              <Table
                columns={columns}
                dataSource={active}
                pagination={false}
                scroll={{ y: 240 }}
              />
            </TabPane>
            <TabPane tab="Under Review" key="3" className="">
              <Table
                columns={columns}
                dataSource={underReview}
                pagination={false}
                scroll={{ y: 240 }}
              />
            </TabPane>
            <TabPane tab="Closed" key="4" className="">
              <Table
                columns={columns}
                dataSource={closed}
                pagination={false}
                scroll={{ y: 240 }}
              />
            </TabPane>
            <TabPane tab="Draft" key="5" className="">
              <Table
                columns={columns}
                dataSource={[]}
                pagination={false}
                scroll={{ y: 240 }}
              />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Fragment>
  );
}
