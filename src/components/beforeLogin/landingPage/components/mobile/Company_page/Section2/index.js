import React, { useState } from "react";
import Wave from "../../../../assets/images/companyPageBlueGrid.svg";
import Img1 from "../../../../assets/images/companySection2a.svg";
import Img2 from "../../../../assets/images/companySection2b.svg";
import Img3 from "../../../../assets/images/companySection2c.svg";
import Img4 from "../../../../assets/images/companySection2d.svg";
import OutcomeBasedPayout from "../../../../assets/images/outcomeBasedPayout.svg";
import RealTimeTracking from "../../../../assets/images/realTimeTracking.svg";
import EndToEndExecution from "../../../../assets/images/endToEndExecution.svg";
import PanIndia from "../../../../assets/images/panIndia.svg";

const options = [
  {
    text: "Outcome Based Payout",
    desc:
      "Make gig economy work for your business and spend zero money on hiring. We charge only for the outcome achieved, not manpower deployed.",
    icon: OutcomeBasedPayout,
  },
  {
    text: "Real Time Tracking",
    desc:
      "Keep a check on the performance of workers by tracking work completed on the ground directly via our partner dashboard.",
    icon: RealTimeTracking,
  },
  {
    text: "End to End Execution",
    desc:
      "We've streamlined end to end management processes in minutes.It couldn't get this faster, or easier",
    icon: EndToEndExecution,
  },
  {
    text: "Pan India Execution",
    desc:
      "We make scaling business in unknown territories easy for you. Hire on demand workers for your business throughout India on Pracify.",
    icon: PanIndia,
  },
];

const Section2 = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div style={{ marginBottom: "5rem", height: "58rem" }}>
      <div>
        <div
          style={{
            display: "flex",
            // position: "absolute",
            height: selected < 2 ? "15rem" : "12rem",
            // flexShrink: 2,
            justifyContent: "space-around",
            // flexWrap: "wrap",
            width: "90vw",
            marginLeft: "10vw",
            // padding:"0 20%",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center center",
            left: 0,
            paddingTop: "1rem",
          }}
        >
          <img
            src={Wave}
            style={{
              position: "absolute",
              left: 0,
              // bottom:"1rem",
              width: "80%",
            }}
            alt="wave"
          />
          <img
            data-aos={selected === 0 ? "zoom-up" : "fade-up"}
            style={{
              margin: 10,
              width: selected === 0 ? "60%" : "7rem",
            }}
            src={Img1}
            alt="img"
          />
          <img
            data-aos={selected === 1 ? "zoom-up" : "fade-up"}
            style={{
              position: "relative",
              right: "3rem",
              margin: 10,
              width: selected === 1 ? "60%" : "7rem",
            }}
            src={Img2}
            alt="img"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "90vw",
            height: selected > 2 ? "15rem" : "10rem",
            marginLeft: "10vw",
            position: "relative",
            bottom: "3rem",
          }}
        >
          <img
            style={{
              // position: "relative",
              margin: 10,
              width: selected === 2 ? "60%" : "7rem",
            }}
            data-aos={selected === 2 ? "zoom-up" : "fade-up"}
            src={Img3}
            alt="img"
          />
          <img
            style={{
              margin: 10,
              position: "relative",
              right: "2.7rem",
              width: selected === 3 ? "60%" : "7rem",
            }}
            data-aos={selected === 3 ? "zoom-up" : "fade-up"}
            src={Img4}
            alt="img"
          />
        </div>

        <div
          style={{
            borderLeft: "2px solid #f4f4f4",
            padding: "1rem",
            // marginTop:
            position: "relative",
            // top: "22rem",
          }}
        >
          {options.map((i, k) => (
            <div
              key={k}
              onClick={() => {
                setSelected(k);
              }}
              style={{
                margin: "40px 0",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  margin: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "2rem" }}>
                  <img src={i.icon} alt="img" />
                </div>
                <div>
                  <p
                    data-aos="fade"
                    style={{
                      margin: "auto",
                      marginLeft: "1rem",
                      fontFamily: "Inter-SemiBold",
                      fontSize: "1.3rem",
                      lineHeight: "34px",
                      color: "#333e49",
                      opacity: selected !== k && 0.3,
                    }}
                  >
                    {i.text}
                  </p>
                </div>
              </div>
              {selected === k && (
                <p
                  className="animate__animated animate__fadeIn"
                  style={{
                    marginLeft: "3.4rem",
                    // width: "81%",
                    color: "#333e49",
                    fontFamily: "Inter-Medium",
                    fontSize: "1rem",
                    lineHeight: "30px",
                  }}
                >
                  {i.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
