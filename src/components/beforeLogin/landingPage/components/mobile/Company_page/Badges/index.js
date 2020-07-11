import React from "react";
import { Typography } from "antd";
import Hire from "../../../../assets/images/easyToHire.png";
import Manage from "../../../../assets/images/easyToManage.png";
import Professionally from "../../../../assets/test1/Professionally.svg";
import Measure from "../../../../assets/images/easyToMeasure.png";

const data = [
  {
    title: "Easy to Hire",
    icon: Hire,
  },
  {
    title: "Easy to Manage",
    icon: Manage,
  },
  {
    title: "Easy to Measure",
    icon: Measure,
  },
  {
    title: "Easy to Scale",
    icon: Professionally,
  },
];

const Badges = () => (
  <div
    style={{
      margin: "3rem 0",
      background: "#fff",
      display: "flex",
      fontSize: "1rem",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
    }}
  >
    <p
      style={{
        color: "#333e49",
        fontSize: '1.5rem',
        textAlign: "center",
        lineHeight: "32px",
        fontFamily: "Inter-Medium",
        marginBottom: 68,
      }}
    >
      Streamlined Recruiting.<br/> Easy Management.<br/> Killer Savings.
    </p>

    {data.map((i, k) => (
      <div
        key={k}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{
            // height:128.8,
            width: "36vw",
          }}
          data-aos="zoom-in"
          src={i.icon}
          alt={k}
        />

        <Typography
          style={{
            color: " #333e49",
            // fontSIze: 50,
            // fontWeight:'bold',
            lineHeight: "22px",
            marginTop: "1rem",
            marginBottom: "3rem",
            fontSIze: 15,
          }}
        >
          {i.title}
        </Typography>
      </div>
    ))}
  </div>
);

export default Badges;
