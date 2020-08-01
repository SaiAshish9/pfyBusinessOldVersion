import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import logo from './logo.jpg'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Fragment } from 'react';



export default function SingleIntersnship(props) {

    const [axiosInternship, setAxiosInternship] = useState(null)
    let divStyle;

    useEffect(() => {
        if (props.location && props.location.state.isFetchReq) {
            const url = `internship/company_fetchone/${props.match.params.internship_id}`;
            axios.get(url)
                .then(res => {
                    console.log(res.data)
                    setAxiosInternship(res.data)
                })

        }
    }, []);

    if (props.location && props.location.state.isFetchReq) {
        divStyle = {
            marginTop: "10rem",
            marginLeft: "3rem",
            marginRight: "3rem",
            marginBottom: "2rem",
            backgroundColor: "#f9fbfd"
        };
    } else {
        divStyle = {
            marginTop: "2rem",
            backgroundColor: "#f9fbfd"
        };
    }



    const history = useHistory();
    const internship = props.internship ? props.internship : axiosInternship



    return (
        <div style={divStyle}>
            {internship ?
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }} justify="center" className="single-internship-1">
                    <Col className="gutter-row" span={24}>
                        <Row className="header">
                            <Col className="gutter-row" span={4} >
                                <div>
                                    <div className="company-logo" >
                                        <img src={internship.company.logoUrl} alt="logo" />
                                    </div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={12}>
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


                    <Col className="gutter-row" span={24} style={{ padding: "2rem" }} className="section">
                        <div>
                            <p className="heading">Designation</p>
                            <p className="text">{internship.designation}</p>
                        </div>
                        <div>
                            <p className="heading">Type of internship</p>
                            <p className="text">{internship.internshipType}</p>
                        </div>
                        {internship.location.length > 0 ? <div>
                            <p className="heading">Internship Location</p>
                            <div className="text">{internship.location.map((loc, index) =>
                                <p key={index}>{loc}</p>
                            )}</div>
                        </div> : null}
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
                        {internship.responsibilities.length > 0 ? <div>
                            <p className="heading">Intern Responsibilities</p>
                            <div className="text">{internship.responsibilities.map((resp, index) =>
                                <p key={index} >{resp}</p>
                            )}</div>
                        </div> : null}
                        {internship.skillsRequired.length > 0 ? <div>
                            <p className="heading">Skills Required</p>
                            <div className="text">{internship.skillsRequired.map(skill =>
                                <p key={skill._id}>{skill.skillName}</p>
                            )}</div>
                        </div> : null}
                        <div>
                            <p className="heading">Type of Internship</p>
                            <p className="text">{internship.stipendType}</p>
                        </div>
                        {internship.benefits.length > 0 ? <div>
                            <p className="heading">Additional Benefits</p>
                            <div className="text">{internship.benefits.map((benifit, index) =>
                                <p key={index}>{benifit}</p>
                            )}</div>
                        </div> : null}
                        <div>
                            <p className="heading">Does this internship come with a PPO ?</p>
                            <p className="text">
                                {internship.benefits ?
                                    internship.benefits.includes('PPO') ? 'Yes' : 'No'
                                    : null}
                            </p>
                        </div>
                        <div>
                            <p className="heading">Amount</p>
                            <p className="text">{internship.stipend}</p>
                        </div>
                        {internship.questions.length > 0 ? <div>
                            <p className="heading">Interview Questions</p>
                            <div className="text">{internship.questions.map(ques =>
                                <p key={ques._id}>{ques.question}</p>
                            )}</div>
                        </div> : null}

                    </Col>

                </Row> : null}
        </div>
    )
}
