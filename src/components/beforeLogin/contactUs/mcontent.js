import React, { useState } from "react";
import { Button } from "antd";

const buttons = ["User Support", "For Business", "Partner With Us"];

const Mcontent = ({ content }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      {buttons.map((i, k) => (
        <Button
          key={k}
          onClick={() => {
            setSelected(k);
          }}
          style={{
            border: selected !== k ? "2px solid #7a81ea" : "none",
            backgroundColor: selected === k ? "#7a81ea" : "#fff",
            fontSize: "16px",
            fontWeight: 700,
            color: selected === k ? "#fff" : "#7a81ea",
            height: "4rem",
            width: "15rem",
            margin: "0.4rem auto",
          }}
        >
          {i}
        </Button>
      ))}

      <div
        style={{
          display: "flex",
          padding: "2rem 0",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: 32,
            fontWeight: 600,
            lineHeight: 1.21,
            color: "#333e49",
          }}
        >
          {content[selected].head}
        </h1>
        <img
          src={content[selected].img}
          alt="img"
          style={{
            width: "80vw",
            padding: "2rem 0",
          }}
        />
        <p
          style={{
            fontSize: 18,
            fontWeight: 500,
            lineHeight: 1.45,
            color: "#333e49",
            textAlign: "center"
          }}
        >
          {content[selected].para}
        </p>
      </div>
      {content[selected].form}
    </div>
  );
};

export default Mcontent;
