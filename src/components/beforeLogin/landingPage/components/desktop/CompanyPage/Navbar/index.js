import React from "react";
import { Row, Col, Button } from "antd";
import Logo from "../../../../assets/images/logo.png";
import { withRouter } from "react-router-dom";

const Navbar = ({ history }) => {
  return (
    <React.Fragment>
      <Row
        align="middle"
        justify="space-between"
        style={{
          padding: "20px 27px",
          position: "fixed",
          width: "100vw",
          top: 0,
          zIndex: 6,
          backdropFilter: "blur(19px)",
        }}
      >
        <Col>
          <img src={Logo} style={{ height: "90px" }} alt="practify" />
        </Col>
        <Col>
          <Row align="center" justify="space-between">
            <Button
              type="text"
              style={{
                height: 49,
                width: 197,
                padding: "0 2rem",
                borderRadius: 6,
                border: "solid 1px #333e49",
                fontSize: "1.1rem",
                marginRight: "30px",
              }}
            >
              I'm a Gig Worker
            </Button>
            <Button
              type="text"
              style={{
                height: 49,
                width: 200,
                borderRadius: 7,
                fontSize: 18,
                lineHeight: 1.22,
                padding: "0 2rem",
                fontFamily: "Inter",
                background: "#ea907a",
                color: "#fff",
                border: "1px solid #ea907a",
                marginRight: "30px",
              }}
            >
              Register
            </Button>
            <Button
              onClick={() => {
                history.push("/company");
              }}
              type="text"
              style={{
                height: 49,
                width: 200,
                borderRadius: 7,
                fontSize: 18,
                padding: "0 2rem",
                backgroundColor: "#7a81ea",
                border: "1px solid #7a81ea",
                color: "#fff",
                marginRight: "30px",
              }}
            >
              Login
            </Button>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default withRouter(Navbar);
