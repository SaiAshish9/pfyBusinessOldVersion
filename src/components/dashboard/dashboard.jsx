import React, {useState, useEffect} from "react";
import { Button, Tabs, Table, Skeleton } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import GigTable from "../gigTable";
import InternshipTable from "../internshipTable";
import axios from 'axios'

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
  const [gigs, setGigs] = useState(null);

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

  useEffect(() => {
    const url = `mission/get_company_missions`;
    axios.get(url)
      .then(res => {
        const {data} = res
        console.log('GIGS ARE ',data)
        setGigs(data)
      })
  }, [])

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

      {gigs ? <GigTable gigs={gigs} /> : <Skeleton active /> }
      <InternshipTable />
    </div>
  );
}
