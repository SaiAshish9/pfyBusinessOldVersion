import React from "react";
import { Typography } from "antd";
import Grid5 from "../../../../assets/svgs/grid5";

const Section4 = () => (
  <div
    style={{
      width: "100vw",
      paddingLeft: "2rem",
      paddingTop: "3rem",
      marginBottom: "10vh",
      paddingBottom: "3rem",
      transform: "skewY(-3deg)",
      background: "linear-gradient(136deg, #7a81ea 33%, #545bcd 100%)",
    }}
  >
    <div
      style={{
        // margin: "5rem",
        transform: "skewY(3deg)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Inter-Medium",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{ fontSize: "1.8rem", lineHeight: "40px", color: "#fff" }}
        >
          Outsourcing doesn't have to be hard.
          <br />
          We make it easy.
        </Typography>
      </div>
      <div style={{ marginTop: "1rem", width: "100%" }}>
        <div style={{ marginRight: "30%" }}>
          <Typography
            style={{
              fontSize: "1.8rem",
              fontWeight: 500,
              fontFamily: "Inter-Medium",
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
              fontSize: "1rem",
              // marginBottom:"10vh",
              lineHeight: "30px",
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
                  width: "90vw",
                  fontSIze: 26,
                  lineHeight: "30px",
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
              fontSize: "2rem",
              fontWeight: 500,
              fontFamily: "Inter-Medium",
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
              fontSize: "1rem",
              lineHeight: "30px",
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
                  width: "90vw",
                  fontSIze: 26,
                  // lineHeight: "50px",
                }}
                key={k}
              >
                {i}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div
      style={{
        margin: 20,
        transform: "skewY(3deg)",
        position: "absolute",
        right: 0,
        bottom: "25vh",
      }}
    >
      <div
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
      ></div>
      <div
        style={{
          height: 153,
          width: 153,
          background: "#fff",
          opacity: 0.1,
          position: "relative",
          left: "3rem",
          top: "6rem",
        }}
      ></div>

      <Grid5 />
    </div>
  </div>
);

export default Section4;
