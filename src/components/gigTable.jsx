import { MoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Table, Tabs, Skeleton } from "antd";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Axios from "axios";
import { getHeaders } from "../helpers/getHeaders";

const { TabPane } = Tabs;

export default function GigTable(props) {
  const {count} = props;
  const [gigs, setGigs] = useState([]);
  const [gigsLoader, setGigsLoader] = useState(true);
  const [filteredGigs, setfilteredGigs] = useState(null);
  useEffect(() => {
    const query = count ? `?pageSize=${count}` : ``
    const url = `mission/get_company_missions${query}`;
    setGigsLoader(true);
    Axios.get(url, getHeaders
    ())
      .then((res) => {
        const { data } = res;
        console.log("GIGS ARE ", data);
        setGigs(data);
        setGigsLoader(false);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);
  const columns = [
    {
      title: "S.No",
      dataIndex: "serialNumber",
      key: "serialNumber",
      width:80
    },
    {
      title: "Job Title",
      key: "jobTitle",
      ellipsis: {
        showTitle: false,
      },
      width:200,
      render: (record) => {
        return(
        <Link to={`/gigs/${record.id}`}>{record.jobTitle}</Link>
      )},
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
    const acceptedGigs = gigs.filter((el) => el.status === 1101);
    const underReviewGigs = gigs.filter((el) => el.status === 1100);
    const rejectedGigs = gigs.filter((el) => el.status === 1102);
    setfilteredGigs({ acceptedGigs, underReviewGigs, rejectedGigs });
  }, []);

  const getTable = (array) => {
    return array
      ? array.map((data, index) => {
        console.log(data)
          return {
            key: index + 1,
            id: data._id,
            serialNumber: index + 1,
            jobTitle:data.title,
            location: data.location,
            application: data.appliedUsers.length,
            created: moment(data.createdAt).format("DD MMM YYYY"),
            deadline: moment(data.missionEndDate).format("DD MMM YYYY"),
            status:
              data.status === 1100
                ? "Under Review"
                : data.status === 1101
                ? "Accepted"
                : "Rejected",
          };
        })
      : null;
  };
  const gigData = getTable(gigs);
  const acceptedGigData = filteredGigs
    ? getTable(filteredGigs.acceptedGigs)
    : null;
  const underReviewGigData = filteredGigs
    ? getTable(filteredGigs.underReviewGigs)
    : null;
  const rejectedGigData = filteredGigs
    ? getTable(filteredGigs.rejectedGigs)
    : null;
  if(gigsLoader){
    return (
      <Skeleton active />
    )
  }
  return (
    <div className="gig-list-main-block fadeIn">
      <h2 className="myGig-heading">MY GIGS</h2>
      <Tabs defaultActiveKey="1" className="myTab" type="card">
        <TabPane tab="All" key="1" className="">
          <Table
            columns={columns}
            dataSource={gigData}
            pagination={false}
            yScroll={true}
           scroll={{ y: 180}}
          />
        </TabPane>
        <TabPane tab="Active" key="2" className="">
          {filteredGigs ? (
            <Table
              columns={columns}
              dataSource={acceptedGigData}
              pagination={false}
           scroll={{ y: 180}}

             // scroll={{ y: 240 }}
            />
          ) : null}
        </TabPane>
        <TabPane tab="Under Review" key="3" className="">
          {filteredGigs ? (
            <Table
              columns={columns}
              dataSource={underReviewGigData}
              pagination={false}
            //  scroll={{ y: 240 }}
            />
          ) : null}
        </TabPane>
        <TabPane tab="Closed" key="4" className="">
          {filteredGigs ? (
            <Table
              columns={columns}
              dataSource={rejectedGigData}
              pagination={false}
           scroll={{ y: 180}}
              
            //  scroll={{ y: 240 }}
            />
          ) : null}
        </TabPane>
        <TabPane tab="Draft" key="5" className="">
          <Table
            columns={columns}
            dataSource={gigData}
            pagination={false}
           scroll={{ y: 180}}

            //scroll={{ y: 240 }}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}
