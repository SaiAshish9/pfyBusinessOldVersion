import React, { Fragment } from 'react';
import {Button, Tabs, Select} from 'antd';
import randomImg from '../../../assets/randomImg.jpg';



const { TabPane } = Tabs;
const { Option } = Select;

export default function NewInternshipDetails() {

    const internCards = (
        <Fragment>
        <div className="head">
        <p style={{minWidth: "30%", padding: "0 4rem"}}>Name</p>
        <p style={{minWidth: "35%"}}>Institute</p>
        <p style={{minWidth: "10%"}}>City</p>
        <p style={{minWidth: "25%"}}>Resume Score</p>
    </div>
    <div className="intern-details-card">
        <div className="name-and-img">
            <img src={randomImg} alt=""/>
            <span className="name">Mayank Muppal</span>
        </div>
        <div className="institute">Netaji Institute of Technology</div>
        <div className="city">Delhi</div>
        <div className="resume-score">
            <div className={"progress-bar"}>
                <div className="inner" style={{ width: `${70}%`, }} >
                <p>{70}%</p>
                </div>
            </div>
        </div>
    </div>
    <div className="intern-details-card">
        <div className="name-and-img">
            <img src={randomImg} alt=""/>
            <span className="name">Rahul</span>
        </div>
        <div className="institute">MIT</div>
        <div className="city">Delhi</div>
        <div className="resume-score">
            <div className={"progress-bar"}>
                <div className="inner" style={{ width: `${80}%`, }} >
                <p>{80}%</p>
                </div>
            </div>
        </div>
    </div>
    <div className="intern-details-card">
        <div className="name-and-img">
            <img src={randomImg} alt=""/>
            <span className="name">Roopam</span>
        </div>
        <div className="institute">Netaji Subhash Institute of Technology</div>
        <div className="city">Delhi</div>
        <div className="resume-score">
            <div className={"progress-bar"}>
                <div className="inner" style={{ width: `${100}%`, }} >
                <p>{100}%</p>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
    );

    return (
        <div className="internship-details-block">
            <div className="internship-summary-and-overview-block">
                <div className="summary-block">
                    <h1 className="heading">Business Development Internship</h1>
                    <div className="suumary-details">
                        <div>Stipend <br/> <span>&#8377; 7000</span> </div>
                        <div>Deadline <br/> <span>15th April</span> </div>
                        <div>Duration <br/> <span>2 Months</span> </div>
                        <Button className="boost-btn"> Boost Internship </Button>
                    </div>
                    <div className="action-buttons">
                        <Button className="view-btn">View Internship</Button>
                        <Button className="edit-btn">Edit Internship</Button>
                        <Button className="close-btn">Close Hiring</Button>
                        <Button className="extend-btn">Extend Deadline</Button>
                        <Button className="share-btn">Share Internship</Button>
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
                    <h2>Applications</h2>
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
                        {internCards}
                    </TabPane>
                    <TabPane tab="Shortlisted" key="2" className="">
                         {internCards}
                    </TabPane>
                    <TabPane tab="Selected" key="3" className="">
                        {internCards}
                    </TabPane>
                    <TabPane tab="Rejected" key="4" className="">
                         {internCards}
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}
