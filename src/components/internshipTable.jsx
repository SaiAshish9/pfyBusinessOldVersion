import { MoreOutlined } from "@ant-design/icons";
import { Table, Tabs } from "antd";
import React from "react";
const { TabPane } = Tabs;

export default function InternshipTable({ isDataSource }) {
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
      // ellipsis: true,
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
      <h2 className="internship-heading">MY Internships</h2>
      <Tabs defaultActiveKey="1" className="myTab" type="card">
        <TabPane tab="All" key="1" className="">
          <Table
            columns={columns}
            dataSource={internshipData}
            pagination={false}
          />
        </TabPane>
        <TabPane tab="Active" key="2" className="">
          <Table columns={columns} dataSource={null} pagination={false} />
        </TabPane>
        <TabPane tab="Under Review" key="3" className="">
          <Table
            columns={columns}
            dataSource={internshipData}
            pagination={false}
          />
        </TabPane>
        <TabPane tab="Closed" key="4" className="">
          <Table columns={columns} dataSource={null} pagination={false} />
        </TabPane>
        <TabPane tab="Draft" key="5" className="">
          <Table
            columns={columns}
            dataSource={internshipData}
            pagination={false}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}
