import React from "react";
import { Button, Tabs, Table } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const { TabPane } = Tabs;

const campusHiringContent = [
  {
    header: "Campus Hiring",
    para:
      "Hire directly from colleges and invite candidates to take AI-based assessments on Perspectico AI. Post your job, Set up your test and invite colleges. See the magic!",
    button: "START HIRING",
  },
  {
    header: "Campus Hiring",
    para:
      "Hire directly from colleges and invite candidates to take AI-based assessments on Perspectico AI. Post your job, Set up your test and invite colleges. See the magic!",
    button: "START HIRING",
  },
  {
    header: "Campus Hiring",
    para:
      "Hire directly from colleges and invite candidates to take AI-based assessments on Perspectico AI. Post your job, Set up your test and invite colleges. See the magic!",
    button: "START HIRING",
  },
];

export default function Dashboard() {
  const history = useHistory();
  console.log("run!");

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
  console.log(gigData);

  return (
    <div className="dashboard-main-block">
      <div className="campus-hiring-main-block">
        {campusHiringContent.map((content, index) => (
          <div
            className="campus-hiring-block"
            key={index}
            style={{ margin: index === 1 ? "0px 30px" : "0px 0px" }}
          >
            <h3 className="campus-hiring-header">{content.header}</h3>
            <p className="campus-hiring-para">{content.para}</p>
            <Button className="campus-hiring-button">{content.button}</Button>
          </div>
        ))}
      </div>
      <div className="gig-list-main-block">
        <h2 className="myGig-heading">MY GIGS</h2>
        <Tabs defaultActiveKey="1" className="myTab" type="card">
          <TabPane tab="All" key="1" className="">
            <Table columns={columns} dataSource={gigData} pagination={false}  />
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
      <div className="internship-list-main-block">
        <h2 className="internship-heading">MY Internships</h2>
        <Tabs defaultActiveKey="1" className="myTab" type="card">
          <TabPane tab="All" key="1" className="">
            <Table columns={columns} dataSource={gigData} pagination={false} />
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
    </div>
  );
}
