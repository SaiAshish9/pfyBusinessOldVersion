import React,{ useState} from 'react'
import {Typography} from 'antd'
import BlueGrid from "../../../assets/svgs/blueGrid";
import BlueBg from "../../../assets/test1/blue.svg";
import Option1 from "../../../assets/test1/selection.png";
import Option2 from "../../../assets/test1/submission.png";
import Option3 from "../../../assets/test1/payment.png";




const images = [Option1, Option2, Option3];



const ActiveImages = [
  <img
    style={{
      position: "relative",
      zIndex: 5,
      width: "90%",
      left: "5%",
      top: "5rem",
    }}
    alt="img"
    data-aos="zoom-in"
    src={images[0]}
  />,
  <img
    style={{
      position: "relative",
      zIndex: 5,
      width: "90%",
      left: "5%",
      top: "5rem",
    }}
    alt="img"
    data-aos="zoom-in"
    src={images[1]}
  />,
  <img
    style={{
      position: "relative",
      zIndex: 5,
      width: "90%",
      left: "5%",
      top: "5rem",
    }}
    alt="img"
    data-aos="zoom-in"
    src={images[2]}
  />,
];




const Section3 = () => {
      const [selected, setSelected] = useState(0);

      const options = [
        {
          name: "Selection",
          color: "#ff5e16",
        },
        {
          name: "Submission",
          color: "#4385e0",
        },
        {
          name: "Payment",
          color: "#4d52d1",
        },
      ];
    return (
      <div style={{ paddingLeft: "1rem" }}>
        <div>
          <Typography
            style={{
              fontWeight: 600,
              color: options[selected]["color"],
              fontFamily: "Inter-SemiBold",
              lineHeight: "42px",
              fontSize: "2rem",
            }}
          >
            Hassle Free.
            <br />
            <span
              style={{
                fontWeight: 600,
                fontSize: "2rem",
                color: "#333e49",
                fontFamily: "Inter-SemiBold",
                lineHeight: "42px",
              }}
            >
              Working has never
            </span>
            <br />
            <span
              style={{
                fontWeight: 600,
                fontSize: "2rem",
                color: "#333e49",
                fontFamily: "Inter-SemiBold",
                lineHeight: "42px",
              }}
            >
              been this easier and fun.
            </span>
          </Typography>
        </div>

        <div
          style={{
            position: "absolute",
            left: "2rem",
            marginTop: "2rem",
          }}
        >
          <BlueGrid />
        </div>

        <img
          src={BlueBg}
          alt="blueBg"
          style={{
            position: "absolute",
            zindex: 1,
            width: "60%",
            marginTop: "2rem",
            marginBottom: "3rem",
            right: 0,
          }}
        />

        {ActiveImages[selected]}

        <div style={{ display: "flex", marginTop: "27vh" }}>
          <div style={{ minHeight: "30vh" }}>
            <div
              className={selected === 0 && "animate__animated animate__pulse"}
              style={{
                width: "1rem",
                height: selected === 0 ? "5.5rem" : "1rem",
                background: "#ff5e16",
                borderRadius: selected === 0 ? 9 : "50%",
                margin: "10px 0",
              }}
            ></div>
            <div
              className={selected === 1 && "animate__animated animate__pulse"}
              style={{
                width: "1rem",
                height: selected === 1 ? "5.5rem" : "1rem",
                background: "#4385e0",
                borderRadius: selected === 1 ? 9 : "50%",
                margin: "10px 0",
              }}
            ></div>
            <div
              className={selected === 2 && "animate__animated animate__pulse"}
              style={{
                width: "1rem",
                height: selected === 2 ? "5.5rem" : "1rem",
                background: "#4d52d1",
                borderRadius: selected === 2 ? 9 : "50%",
                margin: "10px 0",
                transition: selected === 2 && "0.4s ease-out-in",
              }}
            ></div>
          </div>

          <div style={{ marginLeft: "10%", marginTop: "1rem" }}>
            <div style={{ display: "flex" }}>
              {options.map((i, k) => {
                if (k !== selected) {
                  return (
                    <Typography
                      onClick={() => {
                        setSelected(k);
                      }}
                      style={{
                        color: "#b8b8b8",
                        fontSize: "1rem",
                        lineHeight: "22px",
                        fontWeight: 600,
                        fontFamily: "Inter-SemiBold",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                    >
                      {i.name}
                    </Typography>
                  );
                } else {
                  return (
                    <div>
                      <Typography
                        onClick={() => {
                          setSelected(k);
                        }}
                        style={{
                          color: i.color,
                          fontSize: "1rem",
                          lineHeight: "22px",
                          fontWeight: 600,
                          fontFamily: "Inter-SemiBold",
                          margin: "0 10px",
                          cursor: "pointer",
                        }}
                      >
                        {i.name}
                      </Typography>
                      <div
                        style={{
                          background: i.color,
                          width: "50%",
                          height: 3,
                          marginLeft: "25%",
                          marginTop: 10,
                        }}
                      />
                    </div>
                  );
                }
              })}
            </div>
            <Typography
              style={{
                color: "#3d3d3d",
                fontSize: "0.9rem",
                lineHeight: "32px",
                fontWeight: 600,
                fontFamily: "Inter-SemiBold",
                marginTop: 10,
              }}
            >
              {selected === 0 ? (
                <div>
                  <Typography>Apply to jobs that match your skills</Typography>
                  <Typography>
                    and interests at a single click on the
                  </Typography>
                  <Typography>mobile app or website.</Typography>
                </div>
              ) : selected === 1 ? (
                <div>
                  <Typography>Complete tasks before the deadline</Typography>
                  <Typography>and submit proof of work completed</Typography>
                  <Typography>on the mobile app or website.</Typography>
                </div>
              ) : (
                <div>
                  <Typography>Get paid directly into Pracify</Typography>
                  <Typography>wallet. Transfer your earnings into</Typography>
                  <Typography>your Paytm or Bank account.</Typography>
                </div>
              )}
            </Typography>
          </div>
        </div>
      </div>
    );
}

export default Section3
