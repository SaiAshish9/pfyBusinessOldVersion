import React, { useState, useEffect } from "react";
import { Button, Tabs, Table, Skeleton } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import GigTable from "../gigTable";
import InternshipTable from "../internshipTable";
import axios from "axios";
import cookie from "js-cookie";
import { getHeaders } from "../../helpers/getHeaders";

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
            <Button className="campus-hiring-button">{content.button}</Button>
          </div>
        ))}
      </div>

      <GigTable />
      <InternshipTable />
    </div>
  );
}
