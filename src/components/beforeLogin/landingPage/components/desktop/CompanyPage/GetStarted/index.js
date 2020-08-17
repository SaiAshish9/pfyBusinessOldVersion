import React, { useState } from "react";
import { Row, Col, Button, Typography } from "antd";
import "./index.scss";
import { IoIosArrowForward } from "react-icons/io";

const GetStarted = () => {
  const [slide, slideLeft] = useState(false);

  return (
    <Row style={{ marginTop: 233, marginBottom: "40vh" }}>
      <Col span={24}>
        <Row align="center" justify="center">
          <Typography
            className="animate__animated animate__pulse"
            style={{
              color: "#333e49",
              fontSize: 44,
              width: "85%",
              height: 117,
              textAlign: "center",
              // fontFamily: "Inter-SemiBold",
              fontWeight: 600,
              fontStretch: "normal",
              fontStyle: "normal",
              letterSpacing: "normal",
              lineHeight: "65px",
            }}
          >
            Grow your business rapidly, anytime & anywhere with
            <br />
            our network of on-demand workers{" "}
          </Typography>
        </Row>
        <div align="center" justify="center">
          <p
            className="animate__animated animate__zoomInRight"
            style={{
              color: "#333e49",
              fontSize: 32,
              width: 990,
              height: 39,
              // fontFamily: "Inter-Medium"
              fontWeight: 500,
              lineHeight: "39px",
              fontStretch: "normal",
              fontStyle: "normal",
              letterSpacing: "normal",
              marginTop: 24,
            }}
          >
            Remote Workers, Real Results{" "}
          </p>
        </div>
        <Row align="center" justify="center" style={{ marginTop: 28 }}>
          <Button
            className="animate__animated animate__zoomIn"
            onMouseEnter={() => {
              slideLeft(true);
            }}
            onMouseLeave={() => {
              slideLeft(false);
            }}
            type="text"
            id="getStartedBtn1"
            style={{
              height: 60,
              width: 263,
              borderRadius: 10,
              border: "solid 2px #7a81ea",
              color: "#7a81ea",
              fontSize: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              className={slide && "animate__animated animate__fadeIn"}
              style={
                {
                  // transform: slide && "translateX(-10px)",
                  // transition: slide && "1s backwards",
                }
              }
            >
              Get Started
            </span>
            {slide && (
              <IoIosArrowForward className="animate__animated animate__fadeIn" />
            )}
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default GetStarted;
