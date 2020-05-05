import { MoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Table, Tabs } from "antd";
import React from "react";

const { TabPane } = Tabs;

export default function GigTable() {
  const internshipId = '5e6f2c5d3422b56f87738726'
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
      render: (jobTitle) => <Link to={`/specific-gig/${internshipId}`}>{jobTitle}</Link>,
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

  const gigData = [1, 2, 3].map((data, index) => {
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
    <div className="gig-list-main-block">
      <h2 className="myGig-heading">MY GIGS</h2>
      <Tabs defaultActiveKey="1" className="myTab" type="card">
        <TabPane tab="All" key="1" className="">
          <Table
            columns={columns}
            dataSource={gigData}
            pagination={false}
            // scroll={{ x: true }}
          />
        </TabPane>
        <TabPane tab="Active" key="2" className="">
          <Table columns={columns} dataSource={null} pagination={false} />
        </TabPane>
        <TabPane tab="Under Review" key="3" className="">
          <Table columns={columns} dataSource={gigData} pagination={false} />
        </TabPane>
        <TabPane tab="Closed" key="4" className="">
          <Table columns={columns} dataSource={null} pagination={false} />
        </TabPane>
        <TabPane tab="Draft" key="5" className="">
          <Table columns={columns} dataSource={gigData} pagination={false} />
        </TabPane>
      </Tabs>
    </div>
  );
}
