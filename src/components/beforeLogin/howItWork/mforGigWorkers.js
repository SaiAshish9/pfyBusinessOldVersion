import React, { useState } from "react";
import WorkRemotely from "../landingPage/assets/test1/workRemotely.svg";
import Jobs from "../landingPage/assets/test1/jobs.svg";
import Payments from "../landingPage/assets/test1/payments.svg";
import Img1 from "./images/earnworkexp.svg";
import Img3 from "./images/1234.svg";
import Img2 from "./images/11223.svg";

const options = [
  {
    title: "Become Financially Independent",
    description:
      "Earn money by working for you favourite companies and completing gigs that match your skillset. Its time you stop asking pocket money from your parents and become financially independent.",
    icon: Payments,
  },
  {
    title: "Earn Work Experience",
    description:
      "Most students graduate college without gaining any work experience which increases youth unemployability. Earn valuable work experience by working for top companies on Pracify and stand out from the crowd.",
    icon: WorkRemotely,
  },
  {
    title: "Develop Your Skillset",
    description:
      "Gigs help students and young adults to develop their personality and add important professional skills such as Communication, Team Work, Problem Solving, Leadership & ability to work under pressure.",
    icon: Jobs,
  },
];

const ActiveImages = [
  <img
    src={Img1}
    className="animate__animated animate__zoomIn"
    alt="img"
    style={{
      //   position: "absolute",
      //   right: "12rem",
      //   marginTop: "3rem",
      zIndex: 2,
    }}
  />,
  <img
    src={Img3}
    className="animate__animated animate__zoomIn"
    alt="img"
    style={{
      //   position: "absolute",
      //   right: "23rem",
      zIndex: 2,
      //   marginTop: "2rem",
    }}
  />,
  <img
    src={Img2}
    className="animate__animated animate__zoomIn"
    alt="img"
    style={{
      //   position: "absolute",
      //   right: "21rem",
      zIndex: 2,
      //   marginTop: "12rem",
    }}
  />,
];

const PartnershipBenefits = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div
      style={{
        marginTop: 96,
        width: "100vw",
        backgroundImage: " linear-gradient(to bottom, #fffbfa, #ffffff)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // padding: "7rem 10rem",
        padding: " 2rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "40px",
            lineHeight: "47px",
            color: "#333e49",
            fontWeight: 600,
            // marginBottom: "2rem",
            // padding: "0 2rem",
          }}
        >
          Advantages
        </p>

        <div>
          <div>{ActiveImages[selected]}</div>
        </div>

        <div style={{ width: "100vw" }}>
          {options.map((i, k) => (
            <div
              key={k}
              onClick={() => {
                setSelected(k);
              }}
              style={{
                padding: selected === k ? "27px 27px 10px" : "27px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderBottom: "1px solid #ea907a",
                borderTop: k === 0 && "1px solid #ea907a",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={i.icon} alt={k} style={{ width: "2.1rem" }} />
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: 22,
                    margin: "auto 0px",
                    lineHeight: "36px",
                    color: " #ea907a",
                    marginLeft: "1rem",
                  }}
                >
                  {i.title}
                </p>
              </div>
              {selected === k && (
                <p
                  // data-aos="fade"
                  // className="animate__animated animate__fadeIn"
                  style={{
                    marginLeft: "3.1rem",
                    color: "rgb(51,62,73,0.6)",
                    // opacity: 0.3+ '!important' ,
                    fontSize: 18,
                    //   lineHeight: "26px",
                    fontWeight: 500,
                  }}
                >
                  {i.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={{ marginTop: "5rem" }}></div>
      </div>
    </div>
  );
};

export default PartnershipBenefits;
