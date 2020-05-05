import React, { Fragment,useState } from 'react';
import {Button, Tabs, Select, Table} from 'antd';
import randomImg from '../../assets/randomImg.jpg';
import view from '../../assets/img/internship/internshipDetails/view.svg'
import Internship from '../internship/internship/internship';
import WorkerDetails from '../internship/internship/WorkerDetails';
import GigProfile from './gigProfile';


const { TabPane } = Tabs;
const { Option } = Select;

export default function NewInternshipDetails() {
    let internshipId = '5e6f2c5d3422b56f87738726';
    let userId = '5e6f6c763422b56f8773878c';

    const [isShow, setIsShow] = useState(false)
    const [isRefresh, setIsRefresh] = useState(null)
    // const [userId, setUserId] = useState(null)


    let i = 1;
    const columns = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: (name) => (
            <div onClick={(InternshipId) => openModel(InternshipId)} className="name-and-img">
                <img src={randomImg} alt=""/>
                <span className="name">{name}</span>
            </div>
          )
        },
        {
          title: "Institute",
          dataIndex: "institute",
          key: "institute",
          render: (institute) => <div>{institute}</div>,
        },
        {
          title: "City",
          dataIndex: "city",
          key: "city",
        },
        {
          title: "Gig Score",
          dataIndex: "gigScore",
          key: "gigScore",
          className: "gig-score",
          render: (gigScore) => (
            <div className="resume-score">
                <div className={"progress-bar"}>
                    <div className="inner" style={{ width: `${gigScore}%`, }} >
                    <p>{gigScore}%</p>
                    </div>
                </div>
            </div>
          )
        },
        
      ];
    const columnsSelected = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: (name) => (
            <div onClick={(InternshipId) => openModel(InternshipId)} className="name-and-img">
                <img src={randomImg} alt=""/>
                <span className="name">{name}</span>
            </div>
          )
        },
        {
          title: "City",
          dataIndex: "city",
          key: "city",
        },
        
        {
          title: "Gig Score",
          dataIndex: "gigScore",
          key: "gigScore",
          className: "gig-score",
          render: (gigScore) => (
            <div className="resume-score">
                <div className={"progress-bar"}>
                    <div className="inner" style={{ width: `${gigScore}%`, }} >
                    <p>{gigScore}%</p>
                    </div>
                </div>
            </div>
          )
        },
        {
            title: "Task Submission Status",
            dataIndex: "taskStatus",
            key: "taskStatus",
            render: (taskStatus) => (
              <div className="submitted">
                  <div style={{backgroundColor: i++ % 2 != 0 ? "#00d12f" : "#ff8000"}} className="dot" ></div>
                  Task Submitted
              </div>
            )
          },
        
      ];
    const columnsCompleted = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: (name) => (
            <div onClick={(InternshipId) => openModel(InternshipId)} className="name-and-img">
                <img src={randomImg} alt=""/>
                <span className="name">{name}</span>
            </div>
          )
        },
        {
          title: "City",
          dataIndex: "city",
          key: "city",
        },
        {
          title: "Gig Score",
          dataIndex: "gigScore",
          key: "gigScore",
          className: "gig-score",
          render: (gigScore) => (
            <div className="resume-score">
                <div className={"progress-bar"}>
                    <div className="inner" style={{ width: `${gigScore}%`, }} >
                    <p>{gigScore}%</p>
                    </div>
                </div>
            </div>
          )
        },

        {
            title: "Gig Completion Status",
            dataIndex: "isCompleted",
            key: "isCompleted",
            render: (isCompleted) => (
              <div className="is-completed">
                  <div style={{backgroundColor: i++ % 2 != 0 ? "#00d12f" : "#ff8000"}} className="dot" ></div>
                  Completed Gig Successfully
              </div>
            )
          },
        
      ];


    
      const gigData = [1, 2, 3].map((data, index) => {
        return {
          key: index + 1,
          name: 'Mayank Muppal',
          institute: 'Netaji Subhash Institute of Technology',
          city: 'Delhi',
          gigScore: '70',
          taskStatus: "Task Submitted",
          isCompleted: 'Completed Gig Successfully'
        };
      });

    //   const openModel = (InternshipId) => {
    //     setIsShow(true)
    //   }

      
    const openModel = (UserId) => {
        // setUserId(UserId);
        setIsShow(true)
        console.log("open")
    }

    const isClose = () => {
        setIsShow(false)
    }
    const isUpdate = () => {
        setIsRefresh(Math.random())
    }
          

    return (
        <Fragment> 
            {/* <WorkerDetails internshipId={internshipId} isShow={isShow} isClose={isClose} 
            userId={userId} 
            /> */}
            <GigProfile isUpdate={isUpdate} isShow={isShow} isClose={isClose} userId={userId} />
        <div className="gig-details-block">
            <div className="gig-summary-and-overview-block">
                <div className="summary-block">
                    <h1 className="heading">Business Development Internship</h1>
                    <div className="suumary-details">
                        <div>Category <br/> <span> Marketing</span> </div>
                        <div>Deadline <br/> <span>15th April</span> </div>
                        <div>Duration <br/> <span>2 Months</span> </div>
                        <div>Total Task <br/> <span>5</span> </div>
                    </div>
                    <div className="action-buttons">
                        <Button className="view-btn"><img src={view} alt=""/> View Gig</Button>
                    </div>
                </div>
                <div className="overview-block">
                    <h1 className="heading">Application Overview</h1>
                    <div className="details">
                        <div className="single-detail">
                            <p>Pending</p> <span>5</span>
                        </div>
                        <div className="single-detail">
                             <p>Shortlisted</p> <span>12</span>
                        </div>
                        <div className="single-detail">
                             <p>Selected</p> <span>3</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="interns-application-block">
                <div className="heading">
                    <h2>APPLICATIONS</h2>
                    <div className="filter">
                        <p>Sort By </p>
                        <Select defaultValue="Most Recent" style={{ width: 120 }} 
                            // onChange={(value) => handleChangeOptions(value, "pending")}
                        >
                            <Option value="most-recent">Most Recent</Option>
                            <Option value="resume-score">Resume Score</Option>
                        </Select>
                    </div>
                </div>
                
                <Tabs defaultActiveKey="1" className="tab" type="card">
                    <TabPane tab="Pending" key="1" className="">
                        <Table className="applied-gigs" columns={columns} dataSource={gigData} pagination={false} />
                    </TabPane>
                    <TabPane tab="Waitlisted" key="2" className="">
                         <Table className="applied-gigs" columns={columns} dataSource={gigData} pagination={false} />
                    </TabPane>
                    <TabPane tab="Rejected" key="3" className="">
                        <Table className="applied-gigs" columns={columns} dataSource={gigData} pagination={false} />
                    </TabPane>
                    <TabPane tab="Selected" key="4" className="">
                         <Table className="selected-gigs" columns={columnsSelected} dataSource={gigData} pagination={false} />
                    </TabPane>
                    <TabPane tab="Completed" key="5" className="">
                         <Table className="completed-gigs" columns={columnsCompleted} dataSource={gigData} pagination={false} />
                    </TabPane>
                </Tabs>
            </div>
        </div>
        </Fragment>
    )
}
