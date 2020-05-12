import { MoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Table, Tabs } from "antd";
import React, { useState,useEffect } from "react";
import moment from 'moment';

const { TabPane } = Tabs;

export default function GigTable({gigs}) {
  // const internshipId = '5e6f2c5d3422b56f87738726';
  const [filteredGigs, setfilteredGigs] = useState(null)

  const columns = [
    {
      title: "S.No",
      dataIndex: "serialNumber",
      key: "serialNumber",
    },
    {
      title: "Job Title",
      // dataIndex: "jobTitle",
      key: "jobTitle",
      render: (record) => <Link to={`/gigs/${record.id}`}>{record.jobTitle}</Link>,
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

  useEffect(() => {
    const acceptedGigs = gigs.filter(el => el.status === 1101)
    const underReviewGigs = gigs.filter(el => el.status === 1100)
    const rejectedGigs = gigs.filter(el => el.status === 1102)
    setfilteredGigs({acceptedGigs,underReviewGigs,rejectedGigs})
  }, [])

  const getTable = (array) => {
     return array ? array.map((data, index) => {
      return {
        key: index + 1,
        id: data._id,
        serialNumber: index + 1,
        jobTitle: data.title,
        location: data.location,
        application: 23,
        created: moment(data.createdAt).format('DD/MM/YYYY'),
        deadline: moment(data.missionEndDate).format('DD/MM/YYYY'),
        status: data.status === 1100 ? 'Under Review' : data.status === 1101 ? 'Accepted' : 'Rejected',
      };
    }) : null
  }
  const gigData = getTable(gigs)
  const acceptedGigData = filteredGigs ? getTable(filteredGigs.acceptedGigs)  : null
  const underReviewGigData = filteredGigs ? getTable(filteredGigs.underReviewGigs) : null
  const rejectedGigData = filteredGigs ? getTable(filteredGigs.rejectedGigs) : null


  return (
    <div className="gig-list-main-block">
      <h2 className="myGig-heading">MY GIGS</h2>
      <Tabs defaultActiveKey="1" className="myTab" type="card">
        <TabPane tab="All" key="1" className="">
          <Table columns={columns} dataSource={gigData} pagination={false} />
        </TabPane>
        <TabPane tab="Active" key="2" className="">
          {filteredGigs ? <Table columns={columns} dataSource={acceptedGigData} pagination={false} /> : null}
        </TabPane>
        <TabPane tab="Under Review" key="3" className="">
          {filteredGigs ? <Table columns={columns} dataSource={underReviewGigData} pagination={false} /> : null}
        </TabPane>
        <TabPane tab="Closed" key="4" className="">
          {filteredGigs ? <Table columns={columns} dataSource={rejectedGigData} pagination={false} /> : null}
        </TabPane>
        <TabPane tab="Draft" key="5" className="">
          <Table columns={columns} dataSource={gigData} pagination={false} />
        </TabPane>
      </Tabs>
    </div>
  );
}
