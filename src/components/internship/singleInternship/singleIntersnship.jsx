import React, {useEffect} from 'react';
import { Row, Col } from 'antd';
import logo from './logo.jpg'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';


export default function SingleIntersnship(props) {
    const history = useHistory();
    // const [internship, setInternship] = useState(null);

    const internship=props.internship;

    return (
        <div style={{margin: "1rem 0", backgroundColor: "#f9fbfd"}}>
            {internship ? 
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }} justify="center" className="single-internship-1">
                <Col  className="gutter-row" span={24}>
                    <Row  className="header">
                        <Col  className="gutter-row" span={4} >
                        <div>
                                <div className="company-logo" >
                                    <img src={internship.company.logoUrl} alt="logo"/>
                                </div>
                        </div>
                        </Col>
                        <Col  className="gutter-row" span={12}>
                            <div className="company-name">
                                <p>{internship.company.companyName}</p>
                            </div>
                            <div className="company-tagline">
                                <p>Submit work completed today!</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}></Col>
                
                
                <Col  className="gutter-row" span={24} style={{padding: "2rem 0"}} className="section">
                    <div>
                        <p className="heading">Designation</p>
                        <p className="text">{internship.designation}</p>
                    </div>
                    <div>
                        <p className="heading">Type of internship</p>
                        <p className="text">{internship.internshipType}</p>
                    </div>
                    <div>
                        <p className="heading">Internship Location</p>
                        <div className="text">{internship.location.map((loc, index) => 
                                <p key={index}>{loc}</p>
                            )}</div>
                    </div>
                    {/* <div>
                        <p className="heading">Stipend Type</p>
                        <p className="text">{internship.stipendType}</p>
                    </div> */}
                    <div>
                        <p className="heading">Number of Openings</p>
                        <p className="text">{internship.noOfPosition}</p>
                    </div>
                    <div>
                        <p className="heading">Internship Start Date</p>
                        <p className="text">{internship.startingOfInternship}</p>
                    </div>
                    <div>
                        <p className="heading">Last Date to Apply</p>
                        <p className="text">{internship.applyBefore}</p>
                    </div>
                    <div>
                        <p className="heading">Internship Duration</p>
                        <p className="text">{internship.duration}</p>
                    </div>
                    <div>
                        <p className="heading">Intern Responsibilities</p>
                        <div className="text">{internship.responsibilities.map((resp, index) => 
                                <p key={index} >{resp}</p>
                            )}</div>
                    </div>
                    <div>
                        <p className="heading">Skills Required</p>
                        <div className="text">{internship.skillsRequired.map(skill => 
                            <p key={skill._id}>{skill.skillName}</p>
                        )}</div>
                    </div>
                    <div>
                        <p className="heading">Type of Internship</p>
                        <p className="text">{internship.stipendType}</p>
                    </div>
                    <div>
                        <p className="heading">Additional Benifits</p>
                        <div className="text">{internship.benefits.map((benifit, index) => 
                                <p key={index}>{benifit}</p>
                            )}</div>
                    </div>
                    <div>
                        <p className="heading">Does this internship come with a PPO ?</p>
                        <p className="text">data not avaliable in api request</p>
                    </div>
                    <div>
                        <p className="heading">Amount</p>
                        <p className="text">{internship.stipend}</p>
                    </div>
                    <div>
                        <p className="heading">Interview Questions</p>
                        <div className="text">{internship.questions.map(ques => 
                                <p key={ques._id}>{ques.question}</p>
                            )}</div>
                    </div>
                </Col>
    </Row> : null }
        </div>
    )
}
