import React,{ useState} from 'react'
import {Typography,Button} from 'antd'
import { IoIosArrowForward } from "react-icons/io";
import "../../desktop/Homepage/GetStarted/index.css";
import Section1 from '../../../assets/images/section1.png'

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
              fontSize: "2rem",
              fontFamily: "Inter-SemiBold",
              fontWeight: 600,
              textAlign: "center",
              fontStretch: "normal",
              fontStyle: "normal",
              letterSpacing: "normal",
            }}
          >
            You Got Skills. <br />
            We Got Work.
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
            Earn money and experience while working on your own schedule
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
            id="getStartedBtn"
            style={{
              height: 60,
              width: 263,
              borderRadius: 10,
              margin: "auto",
              border: "solid 2px #ea907a",
              color: "#ea907a",
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

          <img
          data-aos="zoom-in"
            // className="animate__animated animate__zoomIn"
            src={Section1}
            alt="Section1"
            style={{
                marginTop:'3rem',
                width:'90vw'
            }}
          />
        </div>
      </React.Fragment>
    );
}

export default GetStarted
