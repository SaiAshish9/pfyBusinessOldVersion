import React,{Fragment, useState, useEffect} from 'react';
import {Button, Tabs, Table } from 'antd';
import NewCreateInternship from '../internshipForm/newCreateInternship';
import { MoreOutlined } from "@ant-design/icons";
// import rocket from '../../../assets/img/boostInternship/rocket.svg'
import rocket from '../../../assets/img/internship/rocket.svg'
import plus from '../../../assets/img/internship/plus.svg'
import BoostInternship from '../../newComp/boostYourInternship/boostYourInternship';
import { useHistory } from "react-router-dom";


const { TabPane } = Tabs;


export default function Internship2() {
const history = useHistory();
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
        <div onClick={handleInternship} style={{color: "blue", cursor: "pointer"}}>{record.jobTitle} <img onClick={openBoostInternship} className="rocket-img-table" src={rocket} alt=""/> </div>
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

  const gigData = [1, 2, 3].map((data, index) => {
    return {
      key: index + 1,
      serialNumber: index + 1,
      jobTitle: "Business Development",
      location: "Multiple",
      application: 23,
      created: "23/10/2020",
      deadline: "25/10/2020",
      status: "Under Review",
    };
  });

  const handleInternship = () =>{
      history.push('/internship/5e6f2c5d3422b56f87738726')
  }
    return (
        <Fragment>
            <NewCreateInternship isShow={isShow} close={close} />
            <BoostInternship isShowBoost={isShowBoost} isCloseBoost={isCloseBoost} />
        <div className="internship-block">
            <div className="internship-cards">
                <div className="card">
                    <h2>Total Internship Views</h2>
                    <span>957</span>
                </div>
                <div className="card">
                    <h2>Total Internships Posted</h2>
                    <span>25</span>
                </div>
                <div className="card">
                    <h2>Total Applications Received</h2>
                    <span>368</span>
                </div>
            </div>  
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
                    <Table columns={columns} dataSource={null} pagination={false} />
                    </TabPane>
                    <TabPane tab="Under Review" key="3" className="">
                    <Table columns={columns} dataSource={gigData} pagination={false} />
                    </TabPane>
                    <TabPane tab="Closed" key="4" className="">
                    <Table columns={columns} dataSource={null} pagination={false} />
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
