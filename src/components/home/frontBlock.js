/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

import { Icon } from "antd";
import {
  MyBlockOne,
  MyBlockTwo,
  MyBlockThree,
  FrontBlockStyled
} from "./homeStyled";
import pinkImage from "./images/frontBlockImg.png";

const FrontBlock = ({ handleScrollOne }) => {
  return (
    <FrontBlockStyled>
      <div className="content-with-image">
        <div className="content-background">
          <MyBlockTwo className="one" />
          <MyBlockTwo className="two" />
          <MyBlockOne className="three" />
          <MyBlockThree className="four" />
          <MyBlockTwo className="five" />
          <MyBlockTwo className="six" />
          <div className="content-data">
            <h1 className="data-heading-one">
              The Future of Work is Remote and Risk Free!
            </h1>
            <h1 className="data-heading-two">
              On-Demand Distributed Workforce For{" "}
              <Typewriter
                options={{
                  strings: [
                    "Marketing",
                    "Auditing",
                    "Lead Generation",
                    "Data Transcription",
                    "Vendor Onboarding",
                    "Data Entry"
                  ],
                  autoStart: true,
                  loop: true
                }}
              />
            </h1>
            <p className="data-para">
              We use technology to solve key business functions which are
              geographically spread and needs to be executed at a large scale
              using an on-demand distributed workforce comprising of India's
              youth who uses their free time and skills to complete tasks.
            </p>
            <p className="data-para">Pay for outcome, not manpower!</p>
            <br />
          </div>
        </div>
        <div className="img-block">
          <img src={pinkImage} className="pink-image" />
        </div>
      </div>
      <div className="button">
        <button className="first-button">
          MAKE IT HAPPEN <Icon type="right" style={{ marginLeft: "8px" }} />
        </button>

        <Link
          activeClass="active"
          to="howItWork"
          smooth={true}
          duration={500}
          offset={-60}
          className="myLink1"
        >
          <button
            className="second-button"
            // onClick={handleScrollOne}
          >
            LEARN MORE <Icon type="down" style={{ marginLeft: "8px" }} />
          </button>
        </Link>
      </div>
    </FrontBlockStyled>
  );
};

export default FrontBlock;

// changeDelay={1}
