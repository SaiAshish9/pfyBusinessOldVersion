import React, { useState } from "react";
import { Button, Modal, Tabs } from "antd";
import howItWorkIcon from "../assets/img/howItWorkIcon.svg";

const { TabPane } = Tabs;

const howGigWork = [
  "Create a Gig",
  "Review applications & hire gig workers",
  "Review performance & approve work",
];

const howInternshipWork = [
  "Post an Internship",
  "Review applications",
  "Hire interns",
];

const howCampusMarketingWork = [
  "Send an enquiry on the dashboard",
  "Our team will contact you and help you set up the campaign",
];

const howStudentOffersWork = [
  "Send an enquiry on the dashboard",
  "Our team will contact you and help you set up the campaign",
];

export default function HowItWorkPracify() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleHowPracifyWork = () => {
    setModalVisible(true);
  };
  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const howPracifyWork = (data, index) => (
    <div className="content-design-block" key={index}>
      <div className="content-block">
        <img src={howItWorkIcon} alt="" className="content-block-img" />
        <span className="content-block-img-span">{data}</span>
      </div>
      <div className="doted-line"></div>
    </div>
  );

  return (
    <>
      <Button className="howItWorkButton" onClick={handleHowPracifyWork}>
        How it works?
      </Button>
      <Modal
        title="How It Works"
        visible={modalVisible}
        onCancel={handleModalCancel}
        footer={null}
        className="howItWorkModal"
        width={941}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Gigs" key="1">
            <div className="main-content-block">
              {howGigWork.map((data, index) => howPracifyWork(data, index))}
            </div>
          </TabPane>
          <TabPane tab="Internships" key="2">
            <div className="main-content-block">
              {howInternshipWork.map((data, index) =>
                howPracifyWork(data, index)
              )}
            </div>
          </TabPane>
          <TabPane tab="Campus Marketing" key="3">
            <div className="main-content-block">
              {howCampusMarketingWork.map((data, index) =>
                howPracifyWork(data, index)
              )}
            </div>
          </TabPane>
          <TabPane tab="Student Offers" key="4">
            <div className="main-content-block">
              {howStudentOffersWork.map((data, index) =>
                howPracifyWork(data, index)
              )}
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
}
