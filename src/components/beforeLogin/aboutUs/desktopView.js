import React from 'react'
import { Button } from "antd";
import rightArrowIconLight from "../../../assets/img/rightArrowIconLight.svg";
import Footer from "../landingPage/components/desktop/CompanyPage/Footer";


const DesktopView = ({about,history}) => {
    return (
<div className="aboutUs-main-block">
  <div className="aboutUs-block">
    {about.map((data, index) => (
      <div className="aboutUs-subBlock" key={index}>
        <h1 className="aboutUs-head">{data.head}</h1>
        <p className="aboutUs-paraOne">{data.paraOne}</p>
        <p className="aboutUs-paraTwo">{data.paraTwo} </p>
        {data.button && (
          <Button className="aboutUsButton">
            {data.button}
            <span className="aboutUsButton-span">
              <img src={rightArrowIconLight} alt="" className="" />
            </span>
          </Button>
        )}
        <div className="aboutUs-img-block">
          <img src={data.img} alt="" className="aboutUs-img" />
        </div>
      </div>
    ))}
    <div className="aboutUs-contact">
      <h1 className="aboutUs-contact-head">
        Feel free to get in touch with us!
      </h1>
      <Button
        className="aboutUs-contact-button"
        onClick={() => history.push("/contact-us")}
      >
        Contact Us
      </Button>
    </div>
  </div>
  <Footer/>
</div>
    )
}

export default DesktopView
