import React,{useState} from 'react'
import MobileBg from "../../../assets/test/mobileBg.svg";
import Mobile from "../../../assets/test/mobile.png";
import MobileGrid from "../../../assets/test/mobileGrid.svg";
import MobileInclinedBg from "../../../assets/test/mobileInclinedBg.svg";
import ArrowBow from "../../../assets/test1/arrowTarget.svg";
import WorkRemotely from "../../../assets/test1/workRemotely.svg";
import Jobs from "../../../assets/test1/jobs.svg";
import Payments from "../../../assets/test1/payments.svg";
import {Typography} from 'antd'

const Tasks = () => {
    const [selected, setSelected] = useState(0);

  const options = [
    {
      title: "Jobs for Everyone",
      description: "Find and apply to jobs that match your skills & interest.",
      icon: Jobs,
    },
    {
      title: "Work Remotely",
      description:
        "Work on the go using your smartphone or computer according to your own schedule. ",
      icon: WorkRemotely,
    },
    {
      title: "Fast & Secure Payments",
      description:
        "Get paid directly into your Pracify wallet after completing the work successfully.",
      icon: Payments,
    },
  ];
    return (
      <React.Fragment>
        <div style={{ marginBottom: "15vh" }}>
          <div
            style={{
               padding:"2rem"
            }}
          >
            <Typography
              style={{
                fontSize: '1.3rem',
                // fontWeight: "bolder",
                divor: "#333e49",
                fontFamily: "Inter-SemiBold",
                fontWeight: 600,
                lineHeight: "36px",
                textAlign: "start",
                fontStretch: "normal",
              }}
            >
              With Pracify you can work<br/> from
              wherever you want,<br/>whenever you want.
            </Typography>
            <Typography
              style={{
                margin: "10px 0",
                fontSize: '1rem',
                fontFamily: "Inter-Medium",
                fontWeight: 500,
                lineHeight: "36px",
                fontStretch: "normal",
                fontStyle: "normal",
              }}
            >
              Get paid for completing tasks online
            </Typography>

            <div style={{ marginTop: "2rem",marginBottom: "3rem"}}>
              {options.map((i, k) => (
                <div
                  key={k}
                  onClick={() => {
                    setSelected(k);
                  }}
                  style={{
                    padding: "1rem",
                    borderTop: "1px solid #ea907a",
                    borderBottom: k === 2 && "1px solid #ea907a",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      style={{
                        background: "#fdf4f1",
                        height: "2.5rem",
                        width: "2.5rem",
                        borderRadius: "50%",
                        marginRight: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* {i.icon} */}
                      <img alt={k} src={i.icon} />
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Inter-SemiBold",
                        divor: "#ea907a",
                        lineHeight: "36px",
                        fontSize: 18,
                      }}
                    >
                      {i.title}
                    </Typography>
                  </div>
                  { selected === k && (
                    <Typography
                      className="animate__animated animate__fadeIn"
                      style={{
                        color: "#9ba0a6",
                        fontFamily: "Inter-Medium",
                        opacity: 0.6,
                        fontSize: 13,
                        marginTop: 5,
                        marginLeft: "3.8rem",
                        lineHeight: "26px",
                      }}
                    >
                      {i.description}
                    </Typography>
                  )}
                </div>
              ))}
            </div>
          </div>

          <img
            src={MobileBg}
            style={{
              width: "70%",
              position: "relative",
              zIndex: 2,
            }}
            alt="bg"
          />
          <img
            src={Mobile}
            alt="grid"
            style={{
              position: "absolute",
              left: "20%",
              width: "80%",
              marginTop: "2rem",
              zIndex: 3,
            }}
          />
          <img
            src={MobileGrid}
            alt="grid"
            style={{
              position: "absolute",
              left: "10vw",
              zIndex: 1,
            }}
          />
          <img
            src={MobileInclinedBg}
            alt="grid"
            style={{
              position: "absolute",
              left: "40%",
              zIndex: -1,
              marginTop: "18rem",
              width: "60%",
              //   bottom: "12rem",
            }}
          />
          <img
            data-aos="slide-right"
            data-aos-offset="100"
            style={{
              position: "absolute",
              zIndex: 2,
              left: "1%",
              marginTop: "15rem",
              width: "30%",
            }}
            src={ArrowBow}
            alt="arrow"
          />
        </div>
      </React.Fragment>
    );
}

export default Tasks
