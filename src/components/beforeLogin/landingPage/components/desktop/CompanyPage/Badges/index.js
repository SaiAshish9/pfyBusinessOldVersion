import React from "react";
import { Typography } from "antd";
// import Certification from "../../assets/svgs/certification";
// import Bars from "../../assets/svgs/bars";

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
      padding: "10rem 15rem",
    }}
  >
    <p
      style={{
        color: "#333e49",
        fontSize: 32,
        textAlign: "center",
        lineHeight: '32px',
        fontFamily: "Inter-Medium",
        marginBottom:68
      }}
    >
      Streamlined Recruiting. Easy Management. Killer Savings.
    </p>

    <div
      style={{
        background: "#fff",
        display: "flex",
        fontSize: 20,
        flexDirection: "row",
        fontFamily: "Inter-Medium",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
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
              height: 128.8,
              width: 124,
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
              marginTop: "2rem",
              fontSIze: "20px",
            }}
          >
            {i.title}
          </Typography>
        </div>
      ))}
    </div>
  </div>
);

export default Badges;
