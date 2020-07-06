import React from "react";
import { Typography, Row,Carousel } from "antd";
import GooglePlay from "../../../assets/images/google-play.png";
import AppStore from "../../../assets/svgs/appStore";
import QrCode from "../../../assets/svgs/qrCode";
import ArrowLoop from "../../../assets/svgs/arrowLoop";
import AndroidMobilePic from "../../../assets/images/AndroidMobile.png";
import LoginMobilePic from "../../../assets/images/LoginMobile.png";

const JoinUs = () => {

    // setInterval(() => {
    //   isAndroid(!android);
    // }, 3000);

  return (
    <div
      style={{
        width: "100vw",
        paddingBottom: "10vh",
        background: "linear-gradient(136deg, #7a81ea 33%, #545bcd 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "center",
          flexDirection: "column",
          // alignItems: "center",
        }}
      >
        <Typography
          style={{
            color: "#fff",
            fontSize: "1.5rem",
            fontWeight: 600,
            marginTop: "10vh",
            fontFamily: "Inter-SemiBold",
            lineHeight: "48px",
            padding: "2rem",
            paddingRight: "1rem",
            margin: "auto",
          }}
        >
          We're on a mission to build India's strongest and youngest on-demand
          workforce. Join us today.
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            // width: "45%",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // paddingLeft: 121,
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              color: "white",
              fontSize: 18,
              // marginTop: "vh",
              lineHeight: "30px",
              paddingLeft: "2rem",
              // width: 562,
            }}
          >
            Get the Pracify app and work for your favourite companies.
            Create your account within minutes and pick gigs which match your
            skills and interests
          </Typography>

          <div
            style={{
              border: "1px solid white",
              width: "70vw",
              borderRadius: 18,
              margin: "2rem auto",
              // position: "relative",
              // right:"1rem"
            }}
          >
            <Carousel autoplay effect="fade" dots={false}>
              <img
                data-aos="fade"
                data-aos-delay="100"
                src={AndroidMobilePic}
                alt="android"
                style={{
                  width: "70vw",
                }}
              />
              <img
                data-aos="fade"
                data-aos-delay="100"
                src={LoginMobilePic}
                alt="android"
                style={{
                  width: "70vw",
                }}
              />
            </Carousel>
          </div>

          <div
            style={{
              margin: "1vh 0",
              paddingLeft: "2rem",
              display: "flex",
              width: "55%",
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src={GooglePlay}
                alt="gpay"
                style={{
                  height: 68,
                  width: 178,
                  position: "relative",
                  right: 10,
                }}
              />
            </div>
            <div style={{ position: "relative", right: 10, top: 10 }}>
              <AppStore />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontSize: 21,
                lineHeight: "48px",
                fontWeight: 600,
                color: "#fff",
                fontFamily: "Inter-SemiBold",
              }}
            >
              Scan to Download
            </Typography>
            <Row style={{ margin: "20px 0" }}>
              <ArrowLoop />
            </Row>
            <QrCode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
