import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import frontImg from "./img/frontImg.png";
import opportunityIcon1 from "./img/opportunityIcon1.png";
import opportunityIcon2 from "./img/opportunityIcon2.png";
import opportunityIcon3 from "./img/opportunityIcon3.png";
import hiwIcon1 from "./img/hiwIcon1.png";
import hiwIcon2 from "./img/hiwIcon2.png";
import hiwIcon3 from "./img/hiwIcon3.png";
import hiwImg1 from "./img/hiwImg1.png";
import hiwImg2 from "./img/hiwImg2.png";
import hiwImg3 from "./img/hiwImg3.png";
import googleStoreIcon from "./img/downloadGoogleStoreIcon.png";
import appleStoreIcon from "./img/downloadAppleStoreIcon.png";
import mockup from "./img/Screen.png";

const Home = () => {
  return (
    <div className="home-container">
    <div className="front-container">  
        <h1 className="front-container__h1">
          All it takes is one opportunity.
          <br /> We bring you hundreds of those.
        </h1>
        <p className="front-container__p">
          Energetic individual looking to showcase excellent <br /> presentation
          skills and transform theoretical <br /> knowledge of banking
          principles into practical
        </p>
        <Button shape="round" className="front-container__button">
          GET STARTED
        </Button>
      </div>
      <div className="opportunity-container">
        <div className="content-container">
          <h1 className="opportunity__h1">
            All it takes is one opportunity. We bring <br /> you hundreds of
            those.
          </h1>
          <p className="opportunity__p">
            Energetic individual looking to showcase excellent presentation
            skills and transf
          </p>
        </div>
        <div className="opportunity-container-two">
          <div className="opportunity-subContainer-two">
            <img
              src={opportunityIcon1}
              alt=""
              className="opportunity-subContainer-two__img"
            />
            <h3 className="h3 opportunity-subContainer-two__h3">
              How it igppihp
            </h3>
            <p className="opportunity-subContainer-two__p">
              Energetic individual looking <br /> to showcase excellent{" "}
            </p>
          </div>

          <div className="opportunity-subContainer-two">
            <img
              src={opportunityIcon2}
              alt=""
              className="opportunity-subContainer-two__img"
            />
            <h3 className="h3 opportunity-subContainer-two__h3">
              How it igppihp
            </h3>
            <p className="opportunity-subContainer-two__p">
              Energetic individual looking <br /> to showcase excellent{" "}
            </p>
          </div>
          <div className="opportunity-subContainer-two">
            <img
              src={opportunityIcon3}
              alt=""
              className="opportunity-subContainer-two__img"
            />
            <h3 className="h3 opportunity-subContainer-two__h3">
              How it igppihp
            </h3>
            <p className="opportunity-subContainer-two__p">
              Energetic individual looking <br /> to showcase excellent{" "}
            </p>
          </div>
        </div>
      </div>
      
      <div className="hiw-container">
        <div className="hiw-h1-container">
          <h1 className="hiw__h1">How it works</h1>
        </div>
        <div className="hiw-subContainer">
          <div className="hiw-subContainer-content">
            <div className="hiw-subContainer-icon-container">
              <img src={hiwIcon1} alt="" className="hiw-subContainer__icon" />
            </div>

            <div className="hiw-subContainer-text">
              <h2 className="hiw-subContainer__h2">
                How it igppihp <br /> workshg08yy jhg8y0
              </h2>
              <p className="hiw-subContainer__p">
                Energetic individual looking to showcase excellent
                <br /> presentation skills and transf <br />
                <br />
                Energetic individual looking to showcase excellent <br />
                presentation skills and transf
              </p>
            </div>
          </div>
          <div className="hiw-subContainer-img-container">
            <img src={hiwImg1} alt="" className="hiw-subContainer__img" />
          </div>
        </div>
        <div
          style={{ flexDirection: "row-reverse" }}
          className="hiw-subContainer"
        >
          <div className="hiw-subContainer-content">
            <div className="hiw-subContainer-icon-container">
              <img src={hiwIcon2} alt="" className="hiw-subContainer__icon" />
            </div>

            <div className="hiw-subContainer-text">
              <h2 className="hiw-subContainer__h2">
                How it igppihp <br /> workshg08yy jhg8y0
              </h2>
              <p className="hiw-subContainer__p">
                Energetic individual looking to showcase excellent
                <br /> presentation skills and transf <br />
                <br />
                Energetic individual looking to showcase excellent <br />
                presentation skills and transf
              </p>
            </div>
          </div>
          <div className="hiw-subContainer-img-container">
            <img src={hiwImg2} alt="" className="hiw-subContainer__img" />
          </div>
        </div>
        <div className="hiw-subContainer">
          <div className="hiw-subContainer-content">
            <div className="hiw-subContainer-icon-container">
              <img src={hiwIcon3} alt="" className="hiw-subContainer__icon" />
            </div>

            <div className="hiw-subContainer-text">
              <h2 className="hiw-subContainer__h2">
                How it igppihp <br /> workshg08yy jhg8y0
              </h2>
              <p className="hiw-subContainer__p">
                Energetic individual looking to showcase excellent
                <br /> presentation skills and transf <br />
                <br />
                Energetic individual looking to showcase excellent <br />
                presentation skills and transf
              </p>
            </div>
          </div>
          <div className="hiw-subContainer-img-container">
            <img src={hiwImg3} alt="" className="hiw-subContainer__img" />
          </div>
        </div>
      </div>
      <div className="hih-container">
        <div className="hih-h1-container">
          <h1 className="hih__h1">How it helps</h1>
        </div>
        <div className="hih-content-container">
          <div
            // style={{
            //   borderRight: "1px dashed #d3d3d3",
            //   paddingRight: "80px"
            // }}
            className="hih-content-subContainer"
          >
            <h2 className="hih-content-subContainer__h2">1</h2>
            <h3 className="hih-content-subContainer__h3">How it igppihp</h3>
            <p className="hih-content-subContainer__p">
              Energetic individual looking to <br /> showcase excellent
              presentation <br />
              skills and transform theoretical <br /> knowledge of banking
              principles <br /> into practical{" "}
            </p>
            <img
              src={opportunityIcon1}
              alt=""
              className="hih-content-subContainer__img"
            />
          </div>
          <div
            // style={{
            //   borderRight: "1px dashed #d3d3d3",
            //   paddingRight: "80px"
            // }}
            className="hih-content-subContainer"
          >
            <h2 className="hih-content-subContainer__h2">2</h2>
            <h3 className="hih-content-subContainer__h3">How it igppihp</h3>
            <p className="hih-content-subContainer__p">
              Energetic individual looking to <br /> showcase excellent
              presentation <br />
              skills and transform theoretical <br /> knowledge of banking
              principles <br /> into practical{" "}
            </p>
            <img
              src={opportunityIcon2}
              alt=""
              className="hih-content-subContainer__img"
            />
          </div>
          <div className="hih-content-subContainer">
            <h2 className="hih-content-subContainer__h2">3</h2>
            <h3 className="hih-content-subContainer__h3">How it igppihp</h3>
            <p className="hih-content-subContainer__p">
              Energetic individual looking to <br /> showcase excellent
              presentation <br />
              skills and transform theoretical <br /> knowledge of banking
              principles <br /> into practical{" "}
            </p>
            <img
              src={opportunityIcon3}
              alt=""
              className="hih-content-subContainer__img"
            />
          </div>
        </div>
      </div>
      <div className="download-app-container">
        <div className="download-app-content">
          <div className="download-app-text">
            <h1 className="download-app__h1">
              How it igppihp <br /> workshg08yy jhg8y0
            </h1>
            <p className="download-app__p">
              {" "}
              Energetic individual looking to showcase excellent <br />
              presentation skills and transf
            </p>
          </div>
          <div className="download-app-icon">
            <img src={googleStoreIcon} alt="" className="download-app__icon" />
            <img src={appleStoreIcon} alt="" className="download-app__icon" />
          </div>
        </div>
        <div className="download-app-img">
          <img src={mockup} alt="" className="download-app__img" />
        </div>
      </div>
    </div>
  );
};
export default Home;
