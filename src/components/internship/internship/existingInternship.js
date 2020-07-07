import React, {useEffect, useState} from "react";
import { Table, Tag, Button, Dropdown, Menu, Skeleton   } from 'antd';
import img1 from '../../../assets/existingGigs/img1.svg'
import img2 from '../../../assets/existingGigs/img2.svg'
import img3 from '../../../assets/existingGigs/img3.svg'
import img4 from '../../../assets/existingGigs/img4.svg'
import img5 from '../../../assets/existingGigs/img5.svg';
import rocket from '../../../assets/img/internship/rocket.svg';
import view from '../../../assets/img/internship/view.svg';
import pen from '../../../assets/img/internship/pen.svg';
import share from '../../../assets/img/internship/share.svg';
import cap from '../../../assets/img/internship/graduation-cap.svg';

import { useHistory } from "react-router-dom";
import axios from 'axios';
import { MoreOutlined, ShareAltOutlined  } from '@ant-design/icons';
import ShareInternship from '../../newComp/shareInternship/shareInternship';
import BoostYourInternship from '../../newComp/boostYourInternship/boostYourInternship';


const { Column, ColumnGroup } = Table;

export default function ExistingInternship() {

  const [isShow, setIsShow] = useState(false)
  const [isShowBoost,  setIsShowBoost] = useState(false)
  const [internshipId, setInternshipId] = useState(null)

  const menu = (id) =>  (
    <Menu className="dropdown-menu" onClick={(e ) => handleMenuClick(e, id)}>
       <Menu.Item key="share">
         <div style={{display: "flex"}}>
            <img style={{marginRight: "0.5rem"}} src={share} alt="" />
            Share Internship
         </div>
       
      </Menu.Item>
      <Menu.Item key="edit">
      <div style={{display: "flex"}}>
            <img style={{marginRight: "0.5rem"}} src={pen} alt="" />
            Edit Internship
      </div>
        
      </Menu.Item>
      <Menu.Item key="view">
        <div style={{display: "flex"}}>
              <img style={{marginRight: "0.5rem"}} src={view} alt="" />
              View Internship
        </div>
      </Menu.Item>
      <Menu.Item key="post">
        <div style={{display: "flex"}}>
              <img style={{marginRight: "0.5rem"}} src={cap} alt="" />
              Post Similar Internship
        </div>
      </Menu.Item>
     
     
    </Menu>
  );

  const boostInternship = () => {
    setIsShowBoost(true)
  }

  const isCloseBoost = () => {
    setIsShowBoost(false)
  }

  function handleMenuClick(e, internshipId) {
    // message.info('Click on menu item.', e);
    console.log('click', internshipId);
    setInternshipId(internshipId)

    if(e.key === "view"){
      // history.push({
      //   pathname :`/view-internship/${props.internship._id}`,
      //   state: {isFetchReq: true}
      // })
      console.log('clicked')
    } else if(e.key === "share"){
      // setIsSetShow(!isSetShow);
      setIsShow(true)
    }
  }
  const history = useHistory();
  const [applications, setApplications] = useState(null);

  useEffect(() => {
    const url = "internship/fetch_internship_as_company";
    axios.get(url)
      .then(res => {
        const data =res.data;
        console.log(data)
        setApplications(data)

      })
  }, [])

let i = 1;
const columns = [
  {
    title: 'S No.',
    dataIndex: 'key',
    key: 'sno',
    rowKey: i,
    render: key => <span key={i} style={{fontWeight: 500}}>{i++}</span>,
  },
  {
    title: 'Post',
    // dataIndex: 'address',
    className: "post-column",
    key: 'post',
    render: (record) => (
    <div onClick={() => history.push('/internship/'+record._id)} >
      <img style={{height: "5rem", width: "5rem", marginRight: "1rem"}} src={require(`../../../assets/existingGigs/img${Math.floor(Math.random()*4+1)}.svg`)} alt=""/>
       <span>{record.designation}</span> </div>
    )
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <div>
        <div style={{ display:"inline-flex", marginRight: "0.5rem", width: "0.75rem", height: "0.75rem", borderRadius: "1rem", background: status === 1001 ? "#00e007" : status === 1000 ? "#e0e000" : "#e00000" }}></div>
        <span>{status === 100 ? "Under Review " : status === 1001 ? "Live" : "Rejected" }</span>
      </div>
    )
  },
  {
    title: 'Applications',
    key: 'date',
    render: (record) => (
      <span style={{fontWeight: "500", fontSize: "18px"}} >
        {record.totalApplications}
      </span>
    ),
  },
  {
    title: '',
    key: 'boost',
    className: 'last-tr-internship',
    render: (record) => (
      <div style={{display: "flex", justifyContent:"space-betweem", alignItems: "center"}}>
        
        <Button onClick={boostInternship} className="boost-internship-btn"><span>Boost <br/> Internship </span> <img src={rocket} alt=""/> </Button>
        <Dropdown overlay={() => menu(record._id)}>
            <a className="ant-dropdown-link" style={{color: "black", height: "fit-content", padding: "0 7px"}} onClick={e => e.preventDefault()}>
              <MoreOutlined style={{fontSize: "1.5rem"}} /> 
            </a>
          </Dropdown>
        
      </div>
      
    ),
  },
];


const isClose = () => {
  setIsShow(false)
}
// intershipId={props.internship._id}
const data = applications;

  return (
    <div className="">      
  <table className="existing-gigs-table">
    <tbody>
    <tr >
      <th className="first-col">S.No</th>
      <th>Post</th>
      <th>Status</th>
      <th>Date</th>
      <th className="last-col">Category</th>
    </tr>

    {applications ? applications.map((application, index) => 
      <tr key={index} className="data-row">
        <td className="first-col">{index+1}</td>
        <td onClick={() => history.push('/internship/'+application._id)} className="post-col"> <img className="img" src={require(`../../../assets/existingGigs/img${Math.floor(Math.random()*4+1)}.svg`)} alt=""/>{application.designation}</td>
        <td><div className="dot" style={{ background: application.status === 1001 ? "#00e007" :  application.status === 1000 ? "#e0e000" : "#e00000"}}></div> { application.status === 1000 ? "Under Review " :  application.status === 1001 ? "Live" : "Rejected" } </td>
        <td style={{fontSize: "1.2rem", fontWeight: 500}}>{application.totalApplications}</td>
        <td className="last-col">
        <div style={{display: "flex", justifyContent:"space-betweem", alignItems: "center"}}>
          <Button onClick={boostInternship} className="boost-internship-btn"><span>Boost <br/> Internship </span> <img src={rocket} alt=""/> </Button>
          <Dropdown overlay={() => menu(application._id)}>
            <a className="ant-dropdown-link" style={{color: "black", height: "fit-content", padding: "0 7px"}} onClick={e => e.preventDefault()}>
                <MoreOutlined style={{fontSize: "1.5rem"}} /> 
            </a>
          </Dropdown>
      </div>
        </td>
      </tr>
    ) : <Skeleton width="100%" active />}

    </tbody>
  </table>
      <ShareInternship isShow={isShow} isClose={isClose} intershipId={internshipId}  />
      <BoostYourInternship isShowBoost={isShowBoost} isCloseBoost={isCloseBoost} intershipId={internshipId}  />
    </div>
  );
}
