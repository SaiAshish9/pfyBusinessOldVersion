import React from "react";
import { Divider, Typography } from "antd";
import Logo from "../../../../assets/images/logo.png";
import Instagram from "../../../../assets/svgs/instagram";
import Facebook from "../../../../assets/svgs/facebook";
import Twitter from "../../../../assets/svgs/twitter";
import LinkedIn from "../../../../assets/svgs/linkedin";
import Heart from "../../../../assets/svgs/heart";
import { useHistory } from "react-router-dom";

const footerOptions = [
  {
    title: "Company",
    options: [
      { title: "About Us", path: "/about-us" },
      { title: "How It Works", path: "/how-pracify-work" },
      { title: "Careers", path: "/career" },
    ],
  },
  {
    title: "Get In Touch",
    options: [
      { title: "Contact Us", path: "/contact-us" },
      { title: "College Festivals", path: "/partner-with-us" },
    ],
  },
  {
    title: "Legal",
    options: [
      { title: "Terms & Conditions", path: "/terms" },
      { title: "Privacy Policy", path: "/privacy-policy" },
    ],
  },
];

const Footer = () => {
  const history = useHistory();

  return (
    <div
      style={{
        padding: "1rem 0",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "2rem 1.5rem",
          flexWrap: "wrap",
          flexDirection: "row-reverse",
        }}
      >
        {footerOptions.map((i, k) => (
          <div
            key={k}
            style={{
              width: "7.2rem",
              textAlign: "start",
              margin: "15px 0px",
            }}
          >
            <Typography
              style={{
                marginBottom: 20,
                color: "#333e49",
                // fontFamily: "Inter-SemiBold",
                fontWeight: 600,
                lineHeight: "10px",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              {i.title}
            </Typography>

            {footerOptions[k].options.map((a, b) => (
              <Typography
                key={b}
                onClick={() => {
                  history.push(a.path);
                }}
                style={{
                  color: "#959595",
                  fontWeight: 500,
                  lineHeight: "30px",
                  fontSize: 14,
                  // fontFamily: "Inter-Medium",
                }}
              >
                {a.title}
              </Typography>
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          paddingLeft: "2rem",
          alignItems: "center",
        }}
      >
        <img
          src={Logo}
          alt="practify"
          style={{
            width: "30%",
            marginRight: "10px",
            marginTop: 5,
          }}
        />
        <div
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Instagram />
          <Facebook />
          <Twitter />
          <LinkedIn />
        </div>
      </div>

      <Typography
        style={{
          color: "#333e49",
          fontSize: 12,
          margin: "1rem 0",
          marginLeft: "1.5rem",
          fontWeight: 600,
          // fontFamily: "Inter-SemiBold",
          lineHeight: "18px",
        }}
      >
        Copyright © 2020 Tyche Ventures Private Limited
      </Typography>
      <Divider />
      <Typography
        style={{
          fontSize: 14,
          lineHeight: "24px",
          // fontFamily: "Inter-SemiBold",
          color: "#333e49",
          fontWeight: 600,
          marginLeft: "2rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        Pracify helps companies scale using their network of on-demand workers
        comprised of India's college students & young adults.
      </Typography>

      <Typography
        style={{
          color: "#333e49",
          fontSize: 16,
          lineHeight: "18px",
          // fontFamily: "Inter-SemiBold",
          // display:"flex",
          // alignItems:"center",
          // justifyContent:"center",
          marginRight: 5,
          textAlign: "center",
        }}
      >
        Made with <Heart /> in India
      </Typography>
    </div>
  );
};

export default Footer;
