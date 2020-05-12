import React,{Fragment, useState, useEffect} from 'react';
import {Button, Tabs, Table, Skeleton } from 'antd';
import NewCreateInternship from '../internshipForm/newCreateInternship';
import { MoreOutlined } from "@ant-design/icons";
// import rocket from '../../../assets/img/boostInternship/rocket.svg'
import rocket from '../../../assets/img/internship/rocket.svg'
import plus from '../../../assets/img/internship/plus.svg'
import BoostInternship from '../../newComp/boostYourInternship/boostYourInternship';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';


const { TabPane } = Tabs;


export default function Internship2() {
const history = useHistory();
const [Internships, setInternships] = useState(null)
const [collectiveData, setCollectiveData] = useState(null)
const [isShow, setIsShow] = useState(false)
const [isShowBoost, SetIsShowBoost] = useState(false)
  const handleCreateInternship = () => {
    setIsShow(true)
    console.log('open create internship modal')

  };

  const close = () => {
    setIsShow(false)
  }

  const openBoostInternship = () => {
      SetIsShowBoost(true);
  }
  const isCloseBoost = () => {
      SetIsShowBoost(false);
  }

  const columns = [
    {
      title: "S.No",
      dataIndex: "serialNumber",
      key: "serialNumber",
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
      render: (text, record) =>(
        <div  style={{color: "blue", cursor: "pointer", display: "flex"}}><span onClick={() => handleInternship(record.id)}>{record.jobTitle}</span> <img onClick={openBoostInternship} className="rocket-img-table" src={rocket} alt=""/> </div>
        ),
      // ellipsis: true,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Application",
      dataIndex: "application",
      key: "application",
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
    },
    {
      title: "Deadline",
      dataIndex: "deadline",
      key: "deadline",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => <MoreOutlined />,
    },
  ];

  useEffect(() => {
    const url = 'internship/fetch_internship_as_company';
    axios.get(url)
      .then(res => {
        const data = res.data;
        console.log('internships ', res.data)
        const totalViews = data.map(el => el.views).reduce((acc, curr) => acc+curr)
        const totalInternships = data.length;
        const totalApplicationReceived = data.map(el => el.totalApplications).reduce((acc, curr) => acc + curr)
        console.log('TOTAL VIEWS ' + totalViews + 'totalInternships ' + totalInternships + ' totalApplications '+ totalApplicationReceived)
        const collectiveData = {totalViews,totalInternships,totalApplicationReceived}
        setCollectiveData(collectiveData)
        setInternships(data)
      })
  },[])

  const tableData = (array) => {
    return array.map(({_id, internshipCategory, totalApplications,createdAt, status}, index) => {
      return {
        key: index + 1,
        serialNumber: index + 1,
        id: _id,
        jobTitle: internshipCategory,
        location: "Multiple",
        application: totalApplications,
        created: moment( createdAt).format('DD/MM/YYYY'),
        deadline: "25/10/2020",
        status: status === 1000 ? 'Under View' : status === 1001 ? 'Approved' : 'Rejected' ,
      };
    })
  } 

  const gigData = Internships ? tableData(Internships) : null
  const active = Internships ? tableData(Internships.filter(el => el.status === 1001)) : null
  const underReview = Internships ? tableData(Internships.filter(el => el.status === 1000)): null
  const closed = Internships ? tableData(Internships.filter(el => el.status === 1002)): null

  const handleInternship = (id) =>{
      history.push('/internship/'+id)
  }
    return (
        <Fragment>
            <NewCreateInternship isShow={isShow} close={close} />
            <BoostInternship isShowBoost={isShowBoost} isCloseBoost={isCloseBoost} />
        <div className="internship-block">
            {collectiveData ? <div className="internship-cards">
                <div className="card">
                    <h2>Total Internship Views</h2>
                    <span>{collectiveData.totalViews}</span>
                </div>
                <div className="card">
                    <h2>Total Internships Posted</h2>
                    <span>{collectiveData.totalInternships}</span>
                </div>
                <div className="card">
                    <h2>Total Applications Received</h2>
                    <span>{collectiveData.totalApplicationReceived}</span>
                </div>
            </div> : <Skeleton active /> }
            <div className="boost-and-create-internship">
                <div className="boost">
                    <span> Not receiving enough applications? Click on  <img  className="rocket-img" src={rocket} alt=""/> to boost your Internship now!</span>
                </div>
                <Button onClick={handleCreateInternship} className="new-internship-btn"> <img style={{marginRight:"0.5rem"}} src={plus} alt=""/> NEW INTERNSHIP</Button>
            </div> 
            <div className="internship-list-main-block">
                <h2 className="internship-heading">MY INTERNSHIPS</h2>
                <Tabs defaultActiveKey="1" className="myTab" type="card">
                    <TabPane tab="All" key="1" className="">
                    <Table
                        columns={columns}
                        dataSource={gigData}
                        pagination={false}
                    />
                    </TabPane>
                    <TabPane tab="Active" key="2" className="">
                    <Table columns={columns} dataSource={active} pagination={false} />
                    </TabPane>
                    <TabPane tab="Under Review" key="3" className="">
                    <Table columns={columns} dataSource={underReview} pagination={false} />
                    </TabPane>
                    <TabPane tab="Closed" key="4" className="">
                    <Table columns={columns} dataSource={closed} pagination={false} />
                    </TabPane>
                    <TabPane tab="Draft" key="5" className="">
                    <Table columns={columns} dataSource={gigData} pagination={false} />
                    </TabPane>
                </Tabs>
                </div>         
        </div>
        </Fragment>
    )
}
