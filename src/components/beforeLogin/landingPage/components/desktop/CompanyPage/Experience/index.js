import React from "react";
import { Row, Typography } from "antd";
import Grid5 from "../../../../assets/svgs/grid5";

const Experience = () => (
  <Row
    style={{
      width: "100vw",
      padding: "122px 150px",
      transform: "skewY(-3deg)",
      marginBottom: "7rem",
      background: "linear-gradient(136deg, #7a81ea 33%, #545bcd 100%)",
    }}
  >
    <Row
      style={{
        transform: "skewY(3deg)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          fontFamily: "Inter-Medium",
          justifyContent: "center",
        }}
      >
        <Typography style={{ fontSize: 48, lineHeight: "60px", color: "#fff" }}>
          Outsourcing doesn't have to be hard.{" "}
        </Typography>
        <Typography style={{ fontSize: 48, color: "#fff", lineHeight: "60px" }}>
          We make it easy.
        </Typography>
      </div>
      <Row style={{ marginTop: 66, width: "80%" }}>
        <div style={{ marginRight: 72 }}>
          <Typography
            style={{
              fontSize: 42,
              fontFamily: "Inter-Bold",
              color: "#fff",
              lineHeight: "60px",
              marginBottom: 10,
            }}
          >
            From
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              // height: 150,
              fontSize: 26,
              // marginBottom:"10vh",
              lineHeight: "50px",
            }}
          >
            {[
              "Can't find on-demand workers",
              "Guesswork",
              "Slowed by outdated processes",
              "Huge hiring costs",
            ].map((i, k) => (
              <p
                style={{
                  color: "#fff",
                  margin: "3px 0",
                  fontSIze: 26,
                  lineHeight: "50px",
                }}
                key={k}
              >
                {i}
              </p>
            ))}
          </div>
        </div>
        <div>
          <Typography
            style={{
              fontSize: 42,
              fontFamily: "Inter-Bold",
              color: "#fff",
              lineHeight: "60px",
              marginBottom: 10,
            }}
          >
            To
          </Typography>{" "}
          <div
            style={{
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "space-between",
              height: 150,
              fontSize: 26,
              lineHeight: "50px",
            }}
          >
            {[
              "Unlimited on-demand workers",
              "Data-driven results",
              "Faster outsourcing process",
              "Zero hiring costs",
            ].map((i, k) => (
              <p
                style={{
                  color: "#fff",
                  margin: "7px 0",
                  fontSIze: 26,
                  // lineHeight: "50px",
                  textAlign: "start",
                }}
                key={k}
              >
                {i}
              </p>
            ))}
          </div>
        </div>
      </Row>
    </Row>

    <Row
      style={{
        margin: 20,
        transform: "skewY(3deg)",
        position: "absolute",
        right: 0,
        bottom: "25vh",
      }}
    >
      <Row
        style={{
          height: 153,
          width: 153,
          borderRadius: "50%",
          background: "#fff",
          opacity: 0.1,
          position: "relative",
          left: "6rem",
          top: "10rem",
        }}
      ></Row>
      <Row
        style={{
          height: 153,
          width: 153,
          background: "#fff",
          opacity: 0.1,
          position: "relative",
          left: "3rem",
          top: "6rem",
        }}
      ></Row>

      <Grid5 />
    </Row>
  </Row>
);

export default Experience;
