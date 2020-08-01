import {
  MoreOutlined,
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Table, Tabs, Skeleton } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHeaders } from "../helpers/getHeaders";
import moment from "moment";
import axios from "axios";

const { TabPane } = Tabs;
const statusCodes = {
  1000: "Under Review",
  1001: "Accepted",
  1002: "Rejected",
  1003: "Ended",
};
export default function InternshipTable({ isDataSource }) {
  const [internships, setInternships] = useState([]);
  const [internshipsLoader, setInternshipsLoader] = useState(true);
  const columns = [
    {
      title: "S.No",
      dataIndex: "serialNumber",
      key: "serialNumber",
      width: 80,
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
      width: 200,

      render: (record) => (
        <Link to={`/internship/${record._id}`}>{record.title}</Link>
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
      render: (text, record) => (
        <div style={{ display: "flex", align: "center" }}>
          <EyeOutlined
            style={{
              cursor: "pointer",
              marginRight: 10,
            }}
          />
          <EditOutlined
            style={{
              cursor: "pointer",
              marginRight: 10,
            }}
          />
          <DeleteOutlined
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      ),
    },
  ];
  const tableData = (array) => {
    return array.map((data, index) => {
      return {
        key: data._id,
        serialNumber: index + 1,
        jobTitle: { _id: data._id, title: data.designation },
        location: data.location.slice(0, 1).join(","),
        application: data.totalApplications,
        created: moment(data.createdAt).format("DD MMM YYYY"),
        deadline: moment(data.applyBefore).format("DD MMM YYYY"),
        status: statusCodes[data.status],
      };
    });
  };
  const internshipData = tableData(internships);

  //const internshipData = !internshipsLoader ? tableData(Internships) : null;
  const active = tableData(internships.filter((el) => el.status === 1001));
  const underReview = tableData(internships.filter((el) => el.status === 1000));
  const closed = tableData(
    internships.filter((el) => el.status === 1002 || el.status === 1003)
  );

  const setInternshipData = async () => {
    const url = "internship/fetch_internship_as_company";
    axios.get(url, getHeaders()).then((res) => {
      const data = res.data;
      setInternships(data);
      setInternshipsLoader(false);
    });
  };
  useEffect(() => {
    setInternshipData();
  }, []);
  if (internshipsLoader) {
    return <Skeleton active />;
  }
  return (
    <div className="internship-list-main-block fadeIn">
      <h2 className="internship-heading">MY INTERNSHIPS</h2>
      <Tabs defaultActiveKey="1" className="myTab" type="card">
        <TabPane tab="All" key="1" className="">
          <Table
            columns={columns}
            dataSource={internshipData}
            pagination={false}
            scroll={{ y: 180 }}

            // scroll={{ y: 240 }}
          />
        </TabPane>
        <TabPane tab="Active" key="2" className="">
          <Table
            columns={columns}
            dataSource={active}
            pagination={false}
            scroll={{ y: 180 }}

            // scroll={{ y: 240 }}
          />
        </TabPane>
        <TabPane tab="Under Review" key="3" className="">
          <Table
            columns={columns}
            dataSource={underReview}
            pagination={false}
            scroll={{ y: 180 }}

            // scroll={{ y: 240 }}
          />
        </TabPane>
        <TabPane tab="Closed" key="4" className="">
          <Table
            columns={columns}
            dataSource={closed}
            pagination={false}
            scroll={{ y: 180 }}

            // scroll={{ y: 240 }}
          />
        </TabPane>
        <TabPane tab="Draft" key="5" className="">
          <Table
            columns={columns}
            dataSource={[]}
            pagination={false}
            scroll={{ y: 180 }}

            // scroll={{ y: 240 }}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}
