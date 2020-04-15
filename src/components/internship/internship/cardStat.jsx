import React, {useState} from "react";
import boostInternshipIcon from "../img/boostInternshipIcon.svg";
import boostInternshipIcon2 from "../img/flash.svg";
import moreIcon from "../img/moreIcon.svg";
import approvedInternshipIcon from "../img/approvedInternshipIcon.svg";
import underReviewInternIcon from "../img/underReviewInternIcon.svg";
import endedInternshipIcon from "../img/endedInternshipIcon.svg";
import { Button } from "antd";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import { Menu, Dropdown, message } from 'antd';
import ShareInternship from "../../newComp/shareInternship/shareInternship";





export function ApprovedCardStat(props) {
  const history = useHistory();
  console.log("%c here are props ", 'font-size: 30px, color: darkblue');
  console.log(props)

  // const getSingleInternshipDetails = (internship_id) => {
  //   const url = `internship/company_fetchone/${internship_id}`
  //   axios.get(url)
  //     .then(res => {
  //       console.log(internship_id)
  //       console.log(res.data)
  //       history.push(`/internship/${res.data._id}`)
  //     })
  // }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="view">
        {/* <UserOutlined /> */}
        View
      </Menu.Item>
      <Menu.Item key="2">
        {/* <UserOutlined /> */}
        Edit Internship
      </Menu.Item>
      <Menu.Item key="share">
        {/* <UserOutlined /> */}
        Share Internship
      </Menu.Item>
    </Menu>
  );
// const [isSetShow, setIsSetShow] = useState(false)
const [show, setShow] = useState(false)

  function handleMenuClick(e) {
    // message.info('Click on menu item.', e);
    console.log('click', e);
    if(e.key === "view"){
      history.push({
        pathname :`/view-internship/${props.internship._id}`,
        state: {isFetchReq: true}
      })
      console.log('clicked')
    } else if(e.key === "share"){
      // setIsSetShow(!isSetShow);
      setShow(!show)
      console.log(show)
    }
  }

  const isClose = () => {
    setShow(!show)
  }

  return (
    <div  className="approved-card-main-block" style={{margin: "20px 0"}}>
      <ShareInternship show={show} isClose={isClose} intershipId={props.internship._id} />
      <div className="approved-card-img-block">
        <img
          src={approvedInternshipIcon}
          alt=""
          className="approved-card__img"
        />
      </div>
      <div className="approved-internship-content-block">
        <div className="approved-internship-title-block" >
          <h2 className="approved-internship-title__h2" style={{flex: 1}} onClick={() => history.push(`/internship/${props.internship._id}`)}>
            {props.internship.designation}
          </h2>
          
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" style={{color: "black", height: "fit-content", padding: "0 7px"}} onClick={e => e.preventDefault()}>
              {/* <MoreOutlined /> */} <img src={moreIcon} alt="" />
            </a>
          </Dropdown>
        </div>
        <div className="approved-internship-brief-block">
          <p className="approved-internship-brief__p">Total Applications : {props.internship.totalApplications}</p>
          <p className="approved-internship-brief__p">Pending Applications :{props.internship.pendingApplications} </p>
          <Button
            className="approved-internship-brief__button"
            type="primary"
            shape="round"
          >
            <img src={boostInternshipIcon} style={{width: "15px", height: "15px", }} alt=""></img>Boost Internship
          </Button>
        </div>
      </div>
    </div>
  );
}

export function UnderReviewCardStat(props) {
  const [show, setShow] = useState(false)

  const menu2 = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="view">
        View
      </Menu.Item>
      <Menu.Item key="2">
        Edit Internship
      </Menu.Item>
      <Menu.Item key="share">
        Share Internship
      </Menu.Item>
    </Menu>
  );

  function handleMenuClick(e) {
    // message.info('Click on menu item.', e);
    console.log('click', e);
    if(e.key === "view"){
      history.push({
        pathname :`/view-internship/${props.internship._id}`,
        state: {isFetchReq: true}
      })
      console.log('clicked')
    } else if(e.key === "share"){
      setShow(!show)
      console.log(show)
    }
  }
  const isClose = () => {
    setShow(!show)
  }
  const history = useHistory();
  return (
    <div className="underReview-card-main-block" style={{margin: "20px 0"}}>
      <ShareInternship show={show} isClose={isClose} intershipId={props.internship._id} />
      <div className="underReview-card-img-block">
        <img
          src={underReviewInternIcon}
          alt=""
          className="underReview-card__img"
        />
      </div>
      <div className="underReview-internship-content-block">
        <div className="underReview-internship-title-block">
          <h2 onClick={() => history.push(`/internship/${props.internship._id}`)} style={{flex: 1, paddingBottom: '5rem'}} className="underReview-internship-title__h2">
          {props.internship.designation}
          </h2>
          <Dropdown overlay={menu2}>
            <a className="ant-dropdown-link" style={{color: "black", height: "fit-content", padding: "0 7px"}} onClick={e => e.preventDefault()}>
              <img src={moreIcon} alt="" />
            </a>
          </Dropdown>
        </div>
        {/* Not required in under review */}
        {/* <div className="underReview-internship-brief-block">
          <p className="underReview-internship-brief__p">
            Total Applications : {props.appliedUsers}
          </p>
          <p className="underReview-internship-brief__p">
            Pending Applications : {props.pendingApplication}
          </p>
        </div> */}
      </div>
    </div>
  );
}

export function EndedCardStat() {
  const history = useHistory();
  
  return (
    <div className="ended-card-main-block" >
      <div className="ended-card-img-block">
        <img src={endedInternshipIcon} alt="" className="ended-card__img" />
      </div>
      <div className="ended-internship-content-block">
        <div className="ended-internship-title-block">
          <h2 className="ended-internship-title__h2">Business Development</h2>
          
          <img src={moreIcon} alt="" />
        </div>
        <div className="ended-internship-brief-block">
          <p className="ended-internship-brief__p">Total Applications :</p>
          <p className="ended-internship-brief__p">Pending Applications :</p>
        </div>
      </div>
    </div>
  );
}

export function RejectedCardStat(props) {
   const history = useHistory();
   const [show, setShow] = useState(false)

  const menu3 = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="view">
        View
      </Menu.Item>
      <Menu.Item key="2">
        Edit Internship
      </Menu.Item>
      <Menu.Item key="share">
        Share Internship
      </Menu.Item>
    </Menu>
  );

  function handleMenuClick(e) {
    // message.info('Click on menu item.', e);
    console.log('click', e);
    if(e.key === "view"){
      history.push({
        pathname :`/view-internship/${props.internship._id}`,
        state: {isFetchReq: true}
      })
      console.log('clicked')
    } else if(e.key === "share"){
      setShow(!show)
      console.log(show)
    }
  }
  const isClose = () => {
    setShow(!show)
  }
  return (
    <div  className="rejected-card-main-block" style={{margin: "20px 0"}}>
      <ShareInternship show={show} isClose={isClose} intershipId={props.internship._id} />
      <div className="rejected-card-img-block">
        <img src={endedInternshipIcon} alt="" className="rejected-card__img" />
      </div>
      <div className="rejected-internship-content-block">
        <div className="rejected-internship-title-block">
          <h2 style={{flex: 1, paddingBottom: '2rem'}} onClick={() => history.push(`/internship/${props.internship._id}`)} className="rejected-internship-title__h2">
          {props.internship.designation}
          </h2>
          <Dropdown overlay={menu3}>
            <a className="ant-dropdown-link" style={{color: "black", height: "fit-content", padding: "0 7px"}} onClick={e => e.preventDefault()}>
              <img src={moreIcon} alt="" />
            </a>
          </Dropdown>
          {/* <img src={moreIcon} alt="" /> */}
        </div>
        <div className="rejected-internship-brief-block">
          <p className="rejected-internship-brief__p">Total Applications : {props.internship.totalApplications}</p>
          <p className="rejected-internship-brief__p">Pending Applications : {props.internship.pendingApplications}</p>
        </div>
      </div>
    </div>
  );
}
