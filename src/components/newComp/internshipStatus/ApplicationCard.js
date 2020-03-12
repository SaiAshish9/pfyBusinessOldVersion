import React, {useState} from "react";
import { Collapse, Icon, Button, Menu, Row, Col, Checkbox } from "antd";
import {useHistory} from 'react-router-dom';
import verifiedSvg from './verified.svg'
import notVerifiedSvg from './not_verified.svg'
// import {CheckboxContext} from '../internshipStatus/internshipStatus';


// import { connect } from "react-redux";

// import {
//   selectInternApplication,
//   shortlistInternApplication,
//   rejectInternApplication
// } from "../../../../redux/index";

import "./ApplicationCard.scss";
import CardHeader from "./CardHeader";
import axios from "axios";
import { Fragment } from "react";
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

const renderAnswers = (questions, answers, ) => {
  return questions.map((question, index) => (
    <div key={index}>
      <div className="question">{`Q ${index + 1}  ${question}`}</div>
      <p className="answer">{`A ${index + 1}  ${answers[index]}`}</p>
    </div>
  ));
};

// const {Provider, Consumer} = CheckboxContext;



const ApplicationCard = props => {

  const history = useHistory()
  
  console.log("application card")
  console.log(props);
  const { email, phone } = props.application.user;
  const userId = props.application.user._id;
  const companyId = props.companyId;
  const internshipId = props.internshipId;
  
  // const myFun=props.myFun

  // myFun(userId)

  // const application = {userId,companyId,internshipId}
  const  [current, setCurrent] = useState("info")

  const  menuHandleClick = (e) => {
    setCurrent(e.key)
  }

  const data = {
    internshipId: internshipId,
    userId: userId
  }

  const shortlistInternApplication = () => {
    const url = 'internship/shortlist';
    axios.put(url,data)
      .then(res=> {
        console.log(res.data)
        props.myFun(userId)
      })
  }

  const selectInternApplication = () => {
    const url= 'internship/accept';
    axios.put(url, data)
      .then(res => {
        console.log(res.data)
        props.myFun(userId)
      })
  }

  const rejectInternApplication = () => {
    const url = 'internship/reject';
    axios.put(url,data)
      .then(res => {
        console.log(res.data)
        props.myFun(userId)
      })
  }
  const checkbbb = (e) =>{
    console.log(e.target.value)
  }
  return (
    <Fragment>

    {/* <Consumer>
  {
    value => console.log(value)
  }
</Consumer> */}
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => (
        <Icon type="caret-right" rotate={isActive ? 90 : 0} />
      )}
    >
      <Panel
        showArrow={false}
        header={<div className="testing" style={{display: "", alignItems: "center"}} > <CardHeader isSelectAll={props.isSelectAll} user={props.application.user} /> </div> }
        key="1"
        className={"applicationCard__customPanel "}
        style={{backgroundColor: props.isSelectAll ? "#ccc" : "inherit"}}
      >
        <div className="applicationCard__content" style={{marginTop: "1rem"}}>
          <div>
            <div>
              <div className="sub-head--1">Email</div>
              <p className="sub-head--2">{email}</p>
            </div>
            <div>
              <div className="sub-head--1">Mobile Number</div>
              <p className="sub-head--2">{phone}</p>
            </div>
          </div>
          <div>
            <div>
              <div className="sub-head--1">Verification Status</div>
              <p className="sub-head--2"><img src={verifiedSvg} alt="check" /> Verified</p>
            </div>
            <div>
              <div className="sub-head--1">College</div>
              <p className="sub-head--2">College Name</p>
            </div>
          {/* <div className="sub-head--1">Verification Status</div>
              <p className="sub-head--2">Verified</p>
              <p className="sub-head--2">Not Verified</p> */}
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
            onClick={() => history.push({
              pathname: `/user-resume/${userId}`,
              state: { internshipId: internshipId }
            })}
          >
          
            View Full Application
          </Button>
          <div>
            <Button
              type="primary"
              className="applicationCard__btn--grey"
              loading={props.shortlist_application_loader}
              onClick={shortlistInternApplication}
              shape="round"
            >
              Shortlist
            </Button>
            <Button
              type="primary"
              className="applicationCard__btn--green"
              loading={props.select_application_loader}
              onClick={selectInternApplication}
              shape="round"
            >
              Select{" "}
            </Button>
            <Button
              type="primary"
              className="applicationCard__btn--red"
              loading={props.reject_application_loader}
              onClick={rejectInternApplication}
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
    </Fragment>
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
