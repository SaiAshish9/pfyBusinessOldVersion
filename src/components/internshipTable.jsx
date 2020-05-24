import { MoreOutlined } from "@ant-design/icons";
import { Table, Tabs } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const { TabPane } = Tabs;

export default function InternshipTable({ isDataSource }) {
  const internshipId = "5e6f2c5d3422b56f87738726";

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
      render: (jobTitle) => (
        <Link to={`/internship/${internshipId}`}>{jobTitle}</Link>
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

  const internshipData = [1, 2, 3].map((data, index) => {
    return {
      key: index + 1,
      serialNumber: index + 1,
      jobTitle: "Business Development",
      location: "Multiple",
      application: 23,
      created: "23/10/2020",
      deadline: "25/10/2020",
      status: "Under Review",
    };
  });
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
