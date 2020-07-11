import React,{ useState} from 'react'
import {Typography,Button} from 'antd'
import { IoIosArrowForward } from "react-icons/io";
import "./index.css";

const GetStarted = () => {
      const [slide, slideLeft] = useState(false);

    return (
      <React.Fragment>
        <div
          style={{
            marginTop: "10vh",
            padding: "2rem 1rem",
          }}
        >
          <Typography
            className="animate__animated animate__pulse"
            style={{
              color: "#333e49",
              fontSize: "1.8rem",
              fontFamily: "Inter-SemiBold",
              fontWeight: 600,
              textAlign: "center",
              fontStretch: "normal",
              fontStyle: "normal",
              letterSpacing: "normal",
            }}
          >
            Grow your business rapidly, anytime & anywhere with our network of
            <br />
            on-demand workers{" "}
          </Typography>{" "}
          <p
            className="animate__animated animate__zoomInRight"
            style={{
              color: "#333e49",
              fontSize: "1.2rem",
              fontFamily: "Inter-Medium",
              // fontWeight: 500,
              lineHeight: "39px",
              textAlign: "center",
              fontStretch: "normal",
              fontStyle: "normal",
              letterSpacing: "normal",
              marginTop: 24,
            }}
          >
            Remote Workers, Real Results{" "}
          </p>
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
              margin: "auto",
              border: "solid 2px #7a81ea",
              color: "#7a81ea",
              fontSize: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className={slide ? "animate__animated animate__fadeIn" : ""}>
              Get Started
            </span>
            {slide && (
              <IoIosArrowForward className="animate__animated animate__fadeIn" />
            )}
          </Button>
        </div>
      </React.Fragment>
    );
}

export default GetStarted
