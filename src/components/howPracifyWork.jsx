import React, { useState } from "react";
import { Button, Modal, Tabs } from "antd";
import numberOneIcon from "../assets/img/numberOneIcon.svg";
import numberTwoIcon from "../assets/img/numberTwoIcon.svg";
import numberThreeIcon from "../assets/img/numberThreeIcon.svg";
import separatorIcon from "../assets/img/separatorIcon.svg";

const { TabPane } = Tabs;

const howGigWork = [
  {
    head: "Create a Gig",
    para:
      "Achieve your business goals by creating a Gig on Pracify. Use our campaign builder to launch your next Gig within minutes.",
  },
  {
    head: "Hire Gig Workers",
    para:
      "Hire gig workers via the dashboard which matches the Gig requirements without any physical interview.",
  },
  {
    head: "Review Performance",
    para:
      "Review performance of gig workers by reviewing the proof of work submitted by them. You pay only for the work you approve",
  },
];

const howInternshipWork = [
  {
    head: "Post an Internship",
    para:
      "Publish an internship on Pracify within minutes to hire top college level talent for your organisation.",
  },
  {
    head: "Review Applicants",
    para:
      "Review applicants based on their resume and on the basis of answers given to interview questions..",
  },
  {
    head: "Hire Interns",
    para:
      "Hire interns which matches your requirements and onboard them directly so that they can start working.",
  },
];

const howCampusMarketingWork = [
  {
    head: "Submit Query",
    para:
      "Submit your query on the Pracify dashboard if your brand is interested in engaging with students in campus.",
  },
  {
    head: "Hear From Us",
    para:
      "Our team will get in touch with you shortly to discuss your go to campus strategy and take your brand to campus.",
  },
];

const howStudentOffersWork = [
  {
    head: "Submit Query",
    para:
      "Submit your query on the Pracify dashboard if your brand is interested in lunching an exclusive student offer.",
  },
  {
    head: "Hear From Us",
    para:
      "Our team will get in touch with you shortly to explain how you can leverage our verified student database to run a successful offer.",
  },
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
      {index === 0 && (
        <div className="content-block-img">
          <img src={numberOneIcon} alt="" className="number-img" />
        </div>
      )}
      {index === 1 && (
        <div className="content-block-img">
          <img src={separatorIcon} alt="" className="separator-img" />
          <img src={numberTwoIcon} alt="" className="number-img" />
        </div>
      )}
      {index === 2 && (
        <div className="content-block-img">
          <img src={separatorIcon} alt="" className="separator-img" />
          <img src={numberThreeIcon} alt="" className="number-img" />
        </div>
      )}
      <h1 className="content-block-h1">{data.head}</h1>
      <p className="content-block-p">{data.para}</p>
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
        width={980}
      >
        <Tabs defaultActiveKey="1" className="howItWorkTab">
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
