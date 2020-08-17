import React from "react";
import Group from "../../../../assets/images/group.svg";
import MegaPhone from "../../../../assets/images/megaphone.svg";
import Discount from "../../../../assets/images/discount.svg";
import ArrowRight from "../../../../assets/images/arrowRight.svg";
import { Button } from "antd";
import ContactUsWave from "../../../../assets/images/companyContactUs.svg";

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

const Section5 = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <div
        data-aos="zoom-in"
        style={{
          // background:`url(${Contact})`,
          backgroundImage: "linear-gradient(91deg, #6e74c6 0%, #373a63 97%)",
          //   height: 183,
          width: "90vw",
          borderRadius: 11,
          boxShadow: "0 6px 25px 0 rgba(0, 0, 0, 0.16)",
          marginBottom: 90,
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem 1rem",
          display: "flex",
          justifyContent: "space-between",
          //   alignItems: "center"
        }}
      >
        <img
          src={ContactUsWave}
          alt="wave"
          style={{
            position: "absolute",
            left: 0,
            zIndex: 1,
            top: 0,
          }}
        />
        <p
          style={{
            color: "#fff",
            // fontFamily: "Inter-SemiBold",
            fontWeight: 600,
            fontSize: "1.2rem",
            lineHeight: "30px",
            position: "relative",
            zIndex: 2,
          }}
        >
          Built from the ground up to save your company money. Save time with
          Pracify, a tech platform making outsourcing easier and faster.
        </p>

        <Button
          type="text"
          style={{
            height: 55,
            borderRadius: 28,
            fontSize: 18,
            width: 199,
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            boxShadow: "0 8px 18px 0 rgba(0, 0, 0, 0.16)",
            // marginRight: "10%",
          }}
        >
          <p
            style={{
              // fontFamily: "Inter-Bold",
              fontWeight: 700,
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
          // fontFamily: "Inter-SemiBold",
          marginBottom: 78,
          fontSize: "1.5rem",
          lineHeight: "30px",
          textAlign: "center",
          fontWeight: 600,
          margintop: "1rem",
          letterSpacing: "1.18px",
          color: "#333e49",
        }}
      >
        More Partnership Opportunities
      </p>

      {opportunities.map((i, k) => (
        <div
          key={k}
          data-aos="fade-right"
          // data-aos-delay="500"
          style={{
            borderRadius: 12,
            // height: 327,
            width: "90vw",
            margin: "0.6rem 0",
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
                // fontFamily: "Inter-SemiBold",
                fontWeight: 600,
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
                // fontFamily: "Inter-Medium",
                fontWeight: 500,
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
                // fontFamily: "Inter-SemiBold",
                fontWeight: 600,
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
  );
};

export default Section5;
