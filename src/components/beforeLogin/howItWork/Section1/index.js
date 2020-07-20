import React from "react";
import Wave1 from "../images/wave1.png";
import Wave2 from "../images/wave2.png";


const Section1 = ({ data }) => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        marginBottom: "-5rem",
      }}
    >
      <h1
        style={{
          color: "#333e49",
          fontSize: "2rem",
          lineHeight: "57px",
        }}
      >
        Earn money and experience by working on your own schedule
      </h1>

      {data.map((i, k) => (
        <div
          key={k}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {k === 1 && (
            <img
              src={Wave1}
              alt="wave1"
              style={{
                width: "80vw",
                height: "10rem",
              }}
            />
          )}
          {k === 2 && (
            <img
              src={Wave2}
              alt="wave1"
              style={{
                width: "80vw",
                height: "10rem",
              }}
            />
          )}
          <div
            style={{
              display: "flex",
              width: "90vw",
              padding: "1rem",
              alignItems: "center",
            }}
          >
            <img src={i.imgOne} alt="img" />
            <div
              style={{
                display: "flex",
                flexDirection: k === 1 ? "column" : "row",
              }}
            >
              <h1
                style={{
                  fontWeight: 700,
                  color: "#333e49",
                  fontSize: 36,
                  lineHeight: "37px",
                  marginLeft: "1rem",
                }}
              >
                {i.spanOne}
              </h1>
              <h1
                style={{
                  color: k === 0 ? "#38bdba" : k === 1 ? "#ea907a" : "#7a81ea",
                  fontSize: 36,
                  lineHeight: "37px",
                  fontWeight: 700,
                  marginLeft: "0.5rem",
                }}
              >
                {i.spanTwo}
              </h1>
            </div>
          </div>
          <img
            src={i.animation}
            alt="img"
            style={{
              width: "90vw",
              margin: "1rem 0",
            }}
          />
          <p style={{ fontSize: "1.2rem", lineHeight: 1.78, color: "#333e49" }}>
            {i.paraOne}
          </p>
          {/* <br /> */}
          <p style={{ fontSize: "1.2rem", lineHeight: 1.78, color: "#333e49" }}>
            {i.paraTwo}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Section1;
