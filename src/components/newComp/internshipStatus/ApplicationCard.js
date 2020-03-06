import React, {useState} from "react";
import { Collapse, Icon, Button, Menu, Row, Col } from "antd";
// import { connect } from "react-redux";

// import {
//   selectInternApplication,
//   shortlistInternApplication,
//   rejectInternApplication
// } from "../../../../redux/index";

import "./ApplicationCard.scss";
import CardHeader from "./CardHeader";
// import { application } from "express";

const { Panel } = Collapse;

const questions = [
  "How you download the Thunderpod App? ",
  "How you download the Thunderpod App? ",
  "How you download the Thunderpod App? "
];
const answers = [
  "How you download the Thunderpod App? ",
  "How you download the Thunderpod App? ",
  "How you download the Thunderpod App? "
];

const renderAnswers = (questions, answers) => {
  return questions.map((question, index) => (
    <div key={index}>
      <div className="question">{`Q ${index + 1}  ${question}`}</div>
      <p className="answer">{`A ${index + 1}  ${answers[index]}`}</p>
    </div>
  ));
};

const ApplicationCard = props => {
  // console.log(props.application.user);
  // const { email, phone } = props.application.user;
  // const userId = props.application.user._id;
  // const companyId = props.companyId;
  // const internshipId = props.internshipId;
  // const application = {userId,companyId,internshipId}
  const  [current, setCurrent] = useState("info")

  const  menuHandleClick = (e) => {
    setCurrent(e.key)
  }

  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => (
        <Icon type="caret-right" rotate={isActive ? 90 : 0} />
      )}
    >
      <Panel
        showArrow={false}
        header={<CardHeader user={props.application.user} />}
        key="1"
        className="applicationCard__customPanel"
      >
        {/* <Menu className="menu"  onClick={menuHandleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="info">
                    INFORMATION
                </Menu.Item>
                <Menu.Item key="gig" >
                  GIG PROFILE
                </Menu.Item>
            </Menu> */}
            {/* <Row className="row-items" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <div style={{textAlign: "center"}} >
                <p className="row-items-heading">Application Stauts</p>
                <p>Verified</p>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
            <p className="row-items-heading">Application Stauts</p>
                <p>Verified</p>
            </Col>
            <Col className="gutter-row" span={8}>
              <div >col-6</div>
            </Col>
          </Row> */}
        <div className="applicationCard__content" style={{marginTop: "1rem"}}>
          
          <div>
            <div>
              <div className="sub-head--1">Email</div>
              <p className="sub-head--2">{"email"}</p>
            </div>
            <div>
              <div className="sub-head--1">Mobile Number</div>
              <p className="sub-head--2">{"phone"}</p>
            </div>
          </div>
          <div>
            <div className="q_and_head">Interview Questions & Answers</div>
            <div>{renderAnswers(questions, answers)}</div>
          </div>
        </div>
        <div className="applicationCard__btns">
          <Button
            type="primary"
            className="applicationCard__btn--blue"
            shape="round"
            style={{backgroundColor: "#ec3f78", border: 0}}
          >
          
            View Full Application
          </Button>
          <div>
            <Button
              type="primary"
              className="applicationCard__btn--grey"
              loading={props.shortlist_application_loader}
              // onClick={()=>props.shortlistInternApplication(application)}

              shape="round"
            >
              Shortlist
            </Button>
            <Button
              type="primary"
              className="applicationCard__btn--green"
              loading={props.select_application_loader}
              // onClick={()=>props.selectInternApplication(application)}
              shape="round"
            >
              Select{" "}
            </Button>
            <Button
              type="primary"
              className="applicationCard__btn--red"
              loading={props.reject_application_loader}
              // onClick={()=>props.rejectInternApplication(application)}

              shape="round"
            >
              Reject
            </Button>
          </div>
        </div>
        <p className="applicationCard__warning">
          <Icon type="warning" theme="filled" /> Report This Applicant
        </p>
      </Panel>
    </Collapse>
  );
};
// const mapStateToProps = state => ({
//   select_application_loader: state.internship.select_application_loader,
//   shortlist_application_loader: state.internship.shortlist_application_loader,
//   reject_application_loader: state.internship.reject_application_loader
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     selectInternApplication: application => dispatch(selectInternApplication(application)),
//     shortlistInternApplication: application => dispatch(shortlistInternApplication(application)),
//     rejectInternApplication: application => dispatch(rejectInternApplication(application)),

    
//   };
// };
export default ApplicationCard;
