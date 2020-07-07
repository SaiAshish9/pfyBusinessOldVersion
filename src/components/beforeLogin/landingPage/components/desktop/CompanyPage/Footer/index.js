import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import Logo from "../../../../assets/images/logo.png";
import AppStore from "../../../../assets/svgs/appStore";
import Heart from "../../../../assets/svgs/heart";
import Instagram from "../../../../assets/svgs/instagram";
import Facebook from "../../../../assets/svgs/facebook";
import Twitter from "../../../../assets/svgs/twitter";
import LinkedIn from "../../../../assets/svgs/linkedin";

const Footer = () => {
  const footerOptions = [
    {
      title: "Company",
      options: [
        { name: "About Us", link: "/about_us" },
        { name: "How It Works", link: "/how_pracify_work" },
        { name: "Careers", link: "/career" },
      ],
    },
    {
      title: "Get In Touch",
      options: [
        { name: "Contact Us", link: "/contact_us" },
        { name: "College Festivals", link: "/partner_with_us" },
      ],
    },
    {
      title: "Legal",
      options: [
        { name: "Terms & Conditions", link: "" },
        { name: "Privacy Policy", link: "" },
      ],
    },
  ];

  return (
    <React.Fragment>
      <Row
        justify="center"
        style={{
          padding: "5vh 5vw 0",
        }}
      >
        <Col
          span={10}
          style={{
            border: "1px solid #333e49",
            borderLeft: "none",
            borderRight: "none",
            // height: "30vh",
            display: "flex",
            padding: "1.5rem 0",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <img
            src={Logo}
            alt="practify"
            style={{ height: "4rem", width: "6rem", marginLeft: "2rem" }}
          />
          <Typography
            style={{
              fontSize: 14,
              lineHeight: "24px",
              fontFamily: "Inter-SemiBold",
              color: "#333e49",
              fontWeight: 600,
              marginLeft: "2rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            Pracify helps companies scale using their network of on-demand
            <br />
            workers comprised of India's college students & young adults.
          </Typography>
          <Row style={{ marginLeft: "1.5rem" }}>
            <Col>
              <a href="https://play.google.com/">
                <img
                  src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                  width="150"
                  height="70"
                  alt="Get it on Google Play"
                  border="0"
                />
              </a>
            </Col>
            <Col style={{ marginLeft: 5, position: "relative", top: 10 }}>
              <AppStore />
            </Col>
          </Row>
        </Col>
        <Col
          span={10}
          style={{
            border: "1px solid #333e49",
            borderRight: "none",
            padding: "2rem 3rem",
            paddingTop: "4rem",
          }}
        >
          <Row>
            {footerOptions.map((i, k) => (
              <Col span={8} key={k}>
                <Typography
                  style={{
                    marginBottom: 20,
                    color: "#333e49",
                    fontFamily: "Inter-SemiBold",
                    lineHeight: "30px",
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  {i.title}
                </Typography>

                {i.options.map((a, b) => (
                  <Typography
                    key={b}
                    style={{
                      color: "#959595",
                      fontWeight: 500,
                      lineHeight: "30px",
                      fontSize: 14,
                      fontFamily: "Inter-Medium",
                    }}
                  >
                    <Link to={a.link} style={{ color: "inherit" }} className="">
                      {a.name}
                    </Link>
                  </Typography>
                ))}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          padding: "3vh 15vw 5vh",
        }}
        align="center"
        justify="space-between"
      >
        <Typography
          style={{
            color: "#333e49",
            fontSize: 16,
            lineHeight: "18px",
            fontFamily: "Inter-SemiBold",
          }}
        >
          Made with <Heart /> in India
        </Typography>
        <Typography
          style={{
            color: "#333e49",
            fontSize: 16,
            fontWeight: 600,
            fontFamily: "Inter-SemiBold",
            lineHeight: "18px",
          }}
        >
          Copyright © 2020 Tyche Ventures Private Limited
        </Typography>
        <Typography
          style={{
            width: "15%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Instagram />
          <Facebook />
          <Twitter />
          <LinkedIn />
        </Typography>
      </Row>
    </React.Fragment>
  );
};

export default Footer;
