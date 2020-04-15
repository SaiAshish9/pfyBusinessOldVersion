import React from "react";
import { Link } from "react-router-dom";


const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "70vh",
        justifyContent: "center"
      }}
    >
      <h1 style={{ alignSelf: "center" }}>wrong URL! Please go back home</h1>
      <Link to="/" style={{ alignSelf: "center" }}>
        <p style={{ alignSelf: "center", color: "lightBlue" }}>HOME</p>
      </Link>
    </div>
  );
};
export default PageNotFound;