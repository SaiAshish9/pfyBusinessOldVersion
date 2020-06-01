import { MoreOutlined } from "@ant-design/icons";
import { Table, Tabs, Skeleton } from "antd";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { getHeaders } from "../helpers/getHeaders";
import Axios from "axios";
import moment from "moment";

const { TabPane } = Tabs;
const statusCodes = {
  1000:"Under Review",
  1001:"Accepted",
  1002:"Rejected",
}
export default function InternshipTable({ isDataSource }) {

  const [internships,setInternships] = useState([]);
  const [internshipsLoader,setInternshipsLoader] = useState(true);
  const columns = [
    {
      title: "S.No",
      dataIndex: "serialNumber",
      key: "serialNumber",
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
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
      render: (text, record) => <MoreOutlined />,
    },
  ];

  const internshipData = internships.map((data, index) => {
    return {
      key: data._id,
      serialNumber: index + 1,
      jobTitle: {_id:data._id,  title:data.designation},
      location: data.location.slice(0,1).join(","),
      application: data.totalApplications,
      created: moment(data.createdAt).format("DD MMM YYYY"),
      deadline: moment(data.applyBefore).format("DD MMM YYYY"),
      status: statusCodes[data.status],
    };
  });

  useEffect(() => {
    const fetchInternships = async () => {
    const url = `internship/fetch_internship_as_company?pageSize=3`;
    const response = await Axios.get(url,getHeaders());
      const data = response.data;
      setInternships(data);
      setInternshipsLoader(false)
    }
    fetchInternships();
  },[])
  if(internshipsLoader){
    return (
      <Skeleton active />
    )
  }
  return (
    <div className="internship-list-main-block">
      <h2 className="internship-heading">MY INTERNSHIPS</h2>
      <Tabs defaultActiveKey="1" className="myTab" type="card">
        <TabPane tab="All" key="1" className="">
          <Table
            columns={columns}
            dataSource={internshipData}
            pagination={false}
            // scroll={{ y: 240 }}
          />
        </TabPane>
        <TabPane tab="Active" key="2" className="">
          <Table
            columns={columns}
            dataSource={null}
            pagination={false}
            // scroll={{ y: 240 }}
          />
        </TabPane>
        <TabPane tab="Under Review" key="3" className="">
          <Table
            columns={columns}
            dataSource={internshipData}
            pagination={false}
            // scroll={{ y: 240 }}
          />
        </TabPane>
        <TabPane tab="Closed" key="4" className="">
          <Table
            columns={columns}
            dataSource={null}
            pagination={false}
            // scroll={{ y: 240 }}
          />
        </TabPane>
        <TabPane tab="Draft" key="5" className="">
          <Table
            columns={columns}
            dataSource={internshipData}
            pagination={false}
            // scroll={{ y: 240 }}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}
