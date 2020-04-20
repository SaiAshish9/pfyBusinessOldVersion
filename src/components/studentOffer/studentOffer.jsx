import React, { useState } from "react";
import { Button } from "antd";
import ContactUs from "../contactUs/contactUs";
import showOffImg from "../../assets/img/gig/showOffImg.svg";

export default function StudentOffer() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleContactUs = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className="gig-main-block">
      <h1 className="gig-main__header">Student Offers</h1>
      <div className="showOff-block" style={{ marginBottom: 30 }}>
        <img src={showOffImg} alt="" className="showOff__img" />
        <h1 className="showOff__h1">
          Some Dummy Text For The Representation !
        </h1>
        <p className="showOff__p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when.
        </p>
      </div>

      <div className="newInternship-main-block">
        <div className="newInternship-block-one">
          <div className="img-block-one"></div>
          <h1 className="block-one__header">
            Some Dummy Text For The Representation !
          </h1>
          <p className="block-one__para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been industry's standard dummy text ever
            since the
          </p>
          <Button onClick={handleContactUs} className="block-one__button">
            Contact Us
          </Button>
        </div>
        <div className="newInternship-block-two">
          <Button onClick={handleContactUs} className="block-two__button">
            Contact Us
          </Button>
          <h1 className="block-two__header">
            Some Dummy Text For The Representation !
          </h1>
          <p className="block-two__para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been industry's standard dummy text ever
            since the
          </p>
          <div className="img-block-two"></div>
        </div>
      </div>
      <ContactUs modalVisible={modalVisible} handleCancel={handleCancel} />
    </div>
  );
}
