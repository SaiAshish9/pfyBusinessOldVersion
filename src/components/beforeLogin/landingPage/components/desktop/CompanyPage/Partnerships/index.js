import React from "react";
import Group from "../../../../assets/images/group.svg";
import MegaPhone from "../../../../assets/images/megaphone.svg";
import Discount from "../../../../assets/images/discount.svg";
import ArrowRight from "../../../../assets/images/arrowRight.svg";
import { Button } from "antd";
import ContactUsWave from '../../../../assets/images/companyContactUs.svg'

const opportunities = [
  {
    icon: Group,
    title: "Hire Interns",
    desc:
      "Recruit top college talent for your company by posting a free internship on Pracify",
  },
  {
    icon: MegaPhone,
    title: "Campus Marketing",
    desc:
      "Increase your student outreach today by exploring our campus marketing services",
  },
  {
    icon: Discount,
    title: "Student Offers",
    desc:
      "Run student-specific discount offers by leveraging our database of verified students across India",
  },
];

const Partnerships = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "4rem 9rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
      data-aos="zoom-in"
        style={{
          // background:`url(${Contact})`,
          backgroundImage: "linear-gradient(91deg, #6e74c6 0%, #373a63 97%)",
          height: 183,
          borderRadius: 11,
          boxShadow: "0 6px 25px 0 rgba(0, 0, 0, 0.16)",
          marginBottom: 90,
          padding: "60px 3rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          //   alignItems: "center"
        }}
      >
        <img
        src={ContactUsWave}
        alt="wave"
        style={{
          position:"absolute",
          left:0,
          zIndex:1,
          top:0
      }}
        />
        <p
          style={{
            color: "#fff",
            fontFamily: "Inter-SemiBold",
            fontSize: "24px",
            lineHeight: "30px",
            position:"relative",
            zIndex:2
          }}
        >
          Built from the ground up to save your company money. Save time
          <br /> with Pracify, a tech platform making outsourcing easier and
          faster.
        </p>

        <Button
          type="text"
          style={{
            height: 55,
            borderRadius: 28,
            fontSize: 18,
            width:199,
            backgroundColor: "#fff",
            display: "flex",
            alignItems:"center",
            boxShadow: '0 8px 18px 0 rgba(0, 0, 0, 0.16)',
            // marginRight: "10%",
          }}
        >
          <p
            style={{
              fontFamily: "Inter-Bold",
              fontSize: 18,
              lineHeight: "30px",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              color: "#373a63",
            }}
          >
            Contact Us
          </p>
        </Button>
      </div>

      <p
        style={{
          fontFamily: "Inter-SemiBold",
          marginBottom: 78,
          fontSize: 36,
          lineHeight: "30px",
          fontWeight: 600,
          margintop: "1rem",
          letterSpacing: "1.18px",
          color: "#333e49",
        }}
      >
        More Partnership Opportunities
      </p>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {opportunities.map((i, k) => (
          <div
            key={k}
            data-aos="fade-right"
            style={{
              borderRadius: 12,
              height: 327,
              width: 346,
              boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.16)",
              background: "#fff",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ padding: "0 1rem" }}>
              <img
                style={{
                  height: 53.6,
                  width: 62,
                  marginTop: 40,
                }}
                src={i.icon}
                alt="img"
              />
              <p
                style={{
                  fontFamily: "Inter-SemiBold",
                  fontSize: 20,
                  lineHeight: "30px",
                  letterSpacing: "1px",
                  color: "#333e49",
                  margin: "10px 0",
                }}
              >
                {i.title}
              </p>
              <p
                style={{
                  fontFamily: "Inter-Medium",
                  fontSize: 16,
                  lineHeight: "24px",
                  color: "#333e49",
                }}
              >
                {i.desc}
              </p>
            </div>

            <Button
              type="text"
              style={{
                height: 47,
                width: "100%",
                borderRadius: 4,
                fontSize: 18,
                padding: "0 2rem",
                backgroundColor: "#7a81ea",
                color: "#fff",
                marginRight: "30px",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter-SemiBold",
                  fontSize: 16,
                  lineHeight: "30px",
                  letterSpacing: "0.8px",
                  justifyContent: "center",
                  margin: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                GET STARTED
                <img src={ArrowRight} alt="arrow" style={{ marginLeft: 10 }} />
              </p>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnerships;
