import React from "react";
import Footer from "../landingPage/components/mobile/general/Footer";
import { Button } from "antd";
import rightArrowIconLight from "../../../assets/img/rightArrowIconLight.svg";
// import '../../../style/beforeLogin/about/_about.scss';
import Navbar from "../landingPage/components/mobile/general/Navbar";


const MobileView = ({ history, about }) => {
  return (
    <div style={{ marginTop: "10vh" }}>
      <Navbar />
      <div
        style={{
          width: "100vw",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="aboutUs-head">{about[0].head}</h1>
        <div
          style={{ position: "relative", bottom: "2rem" }}
          className="aboutUs-img-block"
        >
          <img
            style={{ margin: 0 }}
            src={about[0].img}
            alt=""
            className="aboutUs-img"
          />
          <p
            style={{
              width: "80vw",
              textAlign: "center",
              margin: "auto",
            }}
            // className="aboutUs-paraOne"
          >
            {about[0].paraOne}
          </p>
          <br />
          <p
            style={{
              width: "80vw",
              textAlign: "center",
              margin: "auto",
            }}
            // className="aboutUs-paraTwo"
          >
            {about[0].paraTwo}
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, #f7f8ff, #ffffff)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2rem",
        }}
      >
        <h1 className="aboutUs-head">{about[1].head}</h1>
        <div className="aboutUs-img-block">
          <img src={about[1].img} alt="" className="aboutUs-img" />
          <p
            style={{
              width: "80vw",
              textAlign: "center",
              margin: "auto",
            }}
            // className="aboutUs-paraOne"
          >
            {about[1].paraOne}
          </p>
          <br />
          <p
            style={{
              width: "80vw",
              textAlign: "center",
              margin: "auto",
            }}
            // className="aboutUs-paraTwo"
          >
            {about[1].paraTwo}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "2rem auto",
            }}
          >
            <Button
              style={{
                border: "1px solid #7a81ea",
                boxShadow: "0 9px 23px 0 rgba(0, 0, 0, 0.08)",
                backgroundColor: "#7a81ea",
                borderRadius: "6px",
                fontSize: "18px",
                fontWeight: 600,
                color: "#fff",
                width: "275px",
                height: "62px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="aboutUsButton"
            >
              {about[1].button}
              <span
                style={{ marginLeft: 20 }}
                // className="aboutUsButton-span"
              >
                <img
                  style={{ marginBottom: 3 }}
                  src={rightArrowIconLight}
                  alt=""
                  className=""
                />
              </span>
            </Button>
          </div>
        </div>

        <h1 className="aboutUs-head">{about[2].head}</h1>
        <div
          style={{ position: "relative", bottom: "2rem" }}
          className="aboutUs-img-block"
        >
          <img
            style={{ margin: 0 }}
            src={about[2].img}
            alt=""
            className="aboutUs-img"
          />
          <p
            style={{
              width: "80vw",
              textAlign: "center",
              margin: "auto",
            }}
            // className="aboutUs-paraOne"
          >
            {about[2].paraOne}
          </p>
          <br />
          <p
            style={{
              width: "80vw",
              textAlign: "center",
              margin: "auto",
            }}
            // className="aboutUs-paraTwo"
          >
            {about[2].paraTwo}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "2rem auto",
            }}
          >
            <Button
              style={{
                border: "1px solid #7a81ea",
                boxShadow: "0 9px 23px 0 rgba(0, 0, 0, 0.08)",
                backgroundColor: "#7a81ea",
                borderRadius: "6px",
                fontSize: "18px",
                fontWeight: 600,
                color: "#fff",
                width: "275px",
                height: "62px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="aboutUsButton"
            >
              {about[2].button}
              <span
                style={{ marginLeft: 20 }}
                // className="aboutUsButton-span"
              >
                <img
                  style={{ marginBottom: 3 }}
                  src={rightArrowIconLight}
                  alt=""
                  className=""
                />
              </span>
            </Button>
          </div>
        </div>

        <div
          style={{
            borderRadius: 11,
            boxShadow: "0 6px 25px 0 rgba(0, 0, 0, 0.16)",
            backgroundImage: "linear-gradient(91deg, #6e74c6 0%, #373a63 97%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
          }}
          className="aboutUs-contact"
        >
          <div
            style={{
              position: "absolute",
              width: 80,
              height: 105,
              borderRadius: "11px 0 100% 0px",
              // top: 0,
              left: "2rem",
              zIndex: 0,
              marginTop: "-2rem",
              backgroundColor: "#666bb7",
            }}
          ></div>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              lineHeight: "1.22",
              textAlign: "center",
              color: "#ffffff",
              position: "relative",
              zIndex: 1,
            }}
            className="aboutUs-contact-head"
          >
            Feel free to get in touch with us!
          </h1>
          <Button
            style={{
              width: 180,
              height: 40,
              marginTop: 10,
              borderRadius: 6,
              border: "1px solid #ffffff",
              boxShadow: "0 8px 18px 0 rgba(0, 0, 0, 0.16)",
              backgroundColor: "#ffffff",
              fontSize: "18px",
              fontWeight: 600,
              color: "#373a63",
            }}
            className="aboutUs-contact-button"
            onClick={() => history.push("/contact-us")}
          >
            Contact Us
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MobileView;
