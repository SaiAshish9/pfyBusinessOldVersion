import React, { useState } from "react";
import Wave from "../../../../assets/images/companyorangewave.svg";
import Publish from "../../../../assets/images/companySection1.png";
import Selection from "../../../../assets/images/publish.png";
import Approve from "../../../../assets/images/approve.png";
import Line from "../../../../assets/images/line.svg";

const images = [Publish, Selection, Approve];

const options = [
  {
    title: "Create a Gig",
    desc: "Choose tasks you want gig workers to perform on the dashboard and publish your job on Pracify",
  },
  {
    title: "Select Gig Workers",
    desc: "Select gig workers who match the gig requirements so that they can start performing the tasks.",
  },
  {
    title: "Review Performance",
    desc: "Review the work submitted by gig workers and pay only for the work you approve",
  },
];


const Section3 = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        marginTop: "10vh",
        marginBottom: "30vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "50vw",
          padding: "2rem",
          marginTop: "20vh",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "3rem",
          }}
        >
          <img src={Line} alt="line" />
          <div
            onClick={() => {
              setSelected(0);
            }}
            style={{
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 27,
              height: 27,
              backgroundColor: selected === 0 ? "#e8e8e8" : "#fff",
              opacity: selected !== 0 && 0.5,
              border: "solid 2px #e8e8e8",
              cursor: "pointer",
              position: "relative",
              bottom: "29rem",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                width: 9,
                height: 9,
                backgroundColor: "#ea907a",
              }}
            ></div>
          </div>
          <div
            onClick={() => {
              setSelected(1);
            }}
            style={{
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 27,
              height: 27,
              backgroundColor: selected === 1 ? "#e8e8e8" : "#fff",
              opacity: selected !== 1 && 0.5,
              cursor: "pointer",
              zIndex: 3,
              border: "solid 2px #e8e8e8",
              position: "relative",
              bottom: "17rem",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                width: 9,
                height: 9,
                backgroundColor: "#ea907a",
              }}
            ></div>
          </div>
          <div
            onClick={() => {
              setSelected(2);
            }}
            style={{
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 27,
              height: 27,
              backgroundColor: selected === 2 ? "#e8e8e8" : "#fff",
              opacity: selected !== 2 && 0.5,
              zIndex: 3,
              cursor: "pointer",
              border: "solid 2px #e8e8e8",
              position: "relative",
              bottom: "4rem",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                width: 9,
                height: 9,
                backgroundColor: "#ea907a",
              }}
            ></div>
          </div>
        </div>

        {selected === 0 ? (
          <div style={{ width: "50%" }}>
            <p
              data-aos="fade"
              // className="animate__animated animate__fadeIn"
              style={{
                fontFamily: "Inter-SemiBold",
                fontSize: 34,
                lineHeight: "36px",
                fontWeight: 600,
                color: "#333e49",
              }}
            >
              {options[selected]["title"]}
            </p>
            <p
              data-aos="fade"
              style={{
                fontSize: 20,
                lineHeight: "30px",
                // fontFamily: "Inter-SemiBold",
                color: "#3d3d3d",
              }}
            >
              {options[selected]["desc"]}
            </p>
          </div>
        ) : selected === 1 ? (
          <div style={{ width: "50%" }}>
            <p
              data-aos="fade"
              // className="animate__animated animate__fadeIn"
              style={{
                fontFamily: "Inter-SemiBold",
                fontSize: 34,
                lineHeight: "36px",
                fontWeight: 600,
                color: "#333e49",
              }}
            >
              {options[selected]["title"]}
            </p>
            <p
              data-aos="fade"
              style={{
                fontSize: 20,
                lineHeight: "30px",
                // fontFamily: "Inter-SemiBold",
                color: "#3d3d3d",
              }}
            >
              {options[selected]["desc"]}
            </p>
          </div>
        ) : (
          <div style={{ width: "50%" }}>
            <p
              data-aos="fade"
              // className="animate__animated animate__fadeIn"
              style={{
                fontFamily: "Inter-SemiBold",
                fontSize: 34,
                lineHeight: "36px",
                fontWeight: 600,
                color: "#333e49",
              }}
            >
              {options[selected]["title"]}
            </p>
            <p
              data-aos="fade"
              style={{
                fontSize: 20,
                lineHeight: "30px",
                // fontFamily: "Inter-SemiBold",
                color: "#3d3d3d",
              }}
            >
              {options[selected]["desc"]}
            </p>
          </div>
        )}
      </div>

      <div>
        <img
          src={Wave}
          alt="wave"
          style={{
            position: "absolute",
            right: "-3rem",
            // width: "36%",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            top: "27%",
          }}
          data-aos="zoom-up"
          // className="animate__animated animate__fadeIn"
        >
          {selected === 0 ? (
            <img
              // className="animate__animated animate__fadeIn"
              src={images[selected]}
              alt="section3"
              style={{
                width: 735,
                height: 457,
              }}
            />
          ) : selected === 1 ? (
            <img
              // className="animate__animated animate__fadeIn"
              src={images[selected]}
              alt="section3"
              style={{
                position: "relative",
                zIndex: 2,
                width: 735,
                top: "27%",
                height: 457,
              }}
            />
          ) : (
            <img
              src={images[selected]}
              // className="animate__animated animate__fadeIn"
              alt="section3"
              style={{
                position: "relative",
                zIndex: 2,
                width: 735,
                top: "27%",
                height: 457,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Section3;
