import React, { useState } from "react";
import Wave from "../../../../assets/images/companySection4BlueBg.svg";
import Business from "../../../../assets/gifs/business.gif";
import Data from "../../../../assets/gifs/data.gif";
import Freelancer from "../../../../assets/gifs/freelancer.gif";
import Marketing from "../../../../assets/gifs/marketing.gif";
import Research from "../../../../assets/gifs/research.gif";
import MarketingSvg from "../../../../assets/images/marketing.svg";
import BusinessDev from "../../../../assets/images/businessDev.svg";
import ResearchSvg from "../../../../assets/images/research.svg";
import DataSvg from "../../../../assets/images/dataModeration.svg";
import FreelancerSvg from "../../../../assets/images/freelancer.svg";


const images = [Marketing, Business, Research, Data, Freelancer];

const options = [
  {
    title: "Marketing",
    icon: MarketingSvg,
  },
  {
    title: "Business Development",
    icon: BusinessDev,
  },
  {
    title: "Research",
    icon: ResearchSvg,
  },
  {
    title: "Data Moderation",
    icon: DataSvg,
  },
  {
    title: "Freelance",
    icon: FreelancerSvg,
  },
];




const Section3 = () => {
     const [selected, setSelected] = useState(0);

    return (
      <div>
        <div 
        style={{
            marginBottom:"9rem",
            marginTop:"3rem",
            display: "flex",
            alignItems:"center",
            justifyContent:"center"
        }}
        >
          <img
            src={Wave}
            alt="wave"
            style={{
              position: "absolute",
              right: "-3rem",
              width: "80%",
            }}
          />
          <img
            src={images[selected]}
            data-aos="zoom-up"
            alt="section3"
            style={{
              position: "relative",
              zIndex: 2,
              width: '90vw',
              top: "27%",
            //   height: 457,
            //   marginRight: 'auto',
            }}
          />
        </div>

        <div
          style={{
            // width: "50vw",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5vh",
          }}
        >
          {options.map((i, k) => (
            <div
              key={k}
              onClick={() => {
                setSelected(k);
              }}
              style={{
                borderBottom:
                  k === options.length - 1
                    ? "2px solid #7a81ea "
                    : " 1px solid #7a81ea",
                borderTop:
                  k === 0 ? "2px solid #7a81ea " : " 1px solid #7a81ea",
                width: "90vw",
                display: "flex",
                alignItems: "center",
                padding: "0.7rem 2rem",
                cursor: "pointer",
                opacity: selected !== k && 0.3,
              }}
            >
              <div style={{ width: "15vw" }}>
                <img src={i.icon} alt="icon" />
              </div>

              <p
                // data-aos="fade"
                style={{
                  // fontFamily: "Inter-Medium",
                  fontWeight:500,
                  fontSize: "1.5rem",
                  position: "relative",
                  width: "70vw",
                  top: 10,
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "30px",
                  color: "#7a81ea",
                }}
              >
                {i.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Section3
