import React, { useState, useEffect } from "react";
import { Button, Tabs, Table, Skeleton } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import GigTable from "../gigTable";
import InternshipTable from "../internshipTable";
import axios from "axios";
import cookie from "js-cookie";
import { getHeaders } from "../../helpers/getHeaders";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

const campusHiringContent = [
  {
    header: "Grow your Business",
    para:
      "Achieve your business goals in a cost-efficient manner using on-demand workers comprising of college students and young adults.",
    button: "Create a Gig",
    link:"/gigs"

  },
  {
    header: "Hire Interns",
    para:
      "Hire talented students from top colleges across India for free. Post an Internship today, review applications, and start onboarding.",
    button: "Post an Internship",
    link:"/internship"

  },
  {
    header: "Engage with Students",
    para:
      "Engage with college students like never before both online & offline. Also, launch exclusive student offers using our database of verified students.",
    button: "Go to Campus",
    link:"/campus-marketing"
  },
];

export default function Dashboard() {


  return (
    <div className="dashboard-main-block">
      <div className="campus-hiring-main-block">
        {campusHiringContent.map((content, index) => (
          <div
            className="campus-hiring-block"
            key={index}
           // style={{ margin: index === 1 ? "0px 30px" : "0px 0px" }}
          >
            <h3 className="campus-hiring-header">{content.header}</h3>
            <p className="campus-hiring-para">{content.para}</p>
            <Link to={content.link}><Button className="campus-hiring-button">{content.button}</Button></Link>
          </div>
        ))}
      </div>

      <GigTable />
      <InternshipTable />
    </div>
  );
}
