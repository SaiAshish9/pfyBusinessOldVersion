import React, { Fragment, useState, useEffect } from 'react';
import { Menu, Checkbox, Select, Row, Col, Tabs } from 'antd';

import exportSvg from './export.svg';
import ApplicationCard from './ApplicationCard';
import SingleInternship from '../../internship/singleInternship/singleIntersnship';
import axios from 'axios';
const { Option } = Select;
const { TabPane } = Tabs;
// export const CheckboxContext = React.createContext({ colour: 'blue', lang: 'en' });




export default function InternshipStatus(props) {

    const myFun = (data) => {
        console.log(data);
        // changeInApplication != data ? setChangeInApplication(data) : null;
        setChangeInApplication(Math.random())
    }

    const [current, setCurrent] = useState("pending");
    const [changeInApplication, setChangeInApplication] = useState(null);
    const [current0, setCurrent0] = useState("recruit");
    const [singleInternship, setSingleInternship] = useState(null)
    const [internApplication, setInternApplication] = useState(null)
    const [isSelectAll, setIsSelectAll] = useState(false)
    const [noOfPending,setNoOfPending] = useState(0)
    const [noOfShortlisted,setNoOfShortlisted] = useState(0)
    const [noOfSelected,setNoOfSelected] = useState(0)
    const [noOfRejected,setNoOfRejected] = useState(0)
    // const [current, setCurrent] = useState("mail");

    const pendingApplication = internApplication ? internApplication.applications.filter(application => application.status === 300).map((application, index) =>
        <ApplicationCard
            // isSelectAll={isSelectAll}
            myFun={myFun}
            key={index}
            companyId={application.companyId}
            internshipId={props.match.params.internship_id}
            application={application}
        />
    ) : null;
    // console.log(pendingApplication)
    // if(pendingApplication) setNoOfPending(pendingApplication.length)


    const shortlistedApplication = internApplication ? internApplication.applications.filter(application => application.status === 301).map((application, index) =>
        <ApplicationCard
            // isSelectAll={isSelectAll}
            myFun={myFun}
            key={index}
            companyId={application.companyId}
            internshipId={props.match.params.internship_id}
            application={application}
        />
    ) : null;
    console.log(shortlistedApplication)
    // if(shortlistedApplication) setNoOfShortlisted(shortlistedApplication.length)

    const selectedApplication = internApplication ? internApplication.applications.filter(application => application.status === 302).map((application, index) =>
        <ApplicationCard
            // isSelectAll={isSelectAll}
            myFun={myFun}
            key={index}
            companyId={application.companyId}
            internshipId={props.match.params.internship_id}
            application={application}
        />
    ) : null;
    // if(selectedApplication) setNoOfSelected(selectedApplication.length)

    const rejectedApplication = internApplication ? internApplication.applications.filter(application => application.status === 303).map((application, index) =>
        <ApplicationCard
            myFun={myFun}
            // isSelectAll={isSelectAll}
            key={index}
            companyId={application.companyId}
            internshipId={props.match.params.internship_id}
            application={application}
        />
    ) : null;
    // if(rejectedApplication) setNoOfRejected(rejectedApplication)



    const handleClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key)
        // this.setState({
        // current: e.key,
        // });
    }

    // get single internship details
    useEffect(() => {
        console.log(props)
        const internshipId = props.match.params.internship_id;

        const url = `internship/company_fetchone/${internshipId}`;
        const urlForInternApplication = `internship/get_applications/${internshipId}`;
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setSingleInternship(res.data)
            })
        axios.get(urlForInternApplication)
            .then(res => {
                console.log("%c Internship Application", "color: darkblue; font-size: 25px")
                console.log(res.data)
                const pending = res.data.applications.filter(app => app.status === 300).length;
                const shortlisted = res.data.applications.filter(app => app.status === 301).length;
                const seleted = res.data.applications.filter(app => app.status === 302).length;
                const rejected = res.data.applications.filter(app => app.status === 303).length;
                setNoOfPending(pending)
                setNoOfShortlisted(shortlisted)
                setNoOfSelected(seleted)
                setNoOfRejected(rejected)
                setInternApplication(res.data)
            })
    }, [changeInApplication])

    const onChangeCheckbox = (e) => {
        console.log(`checked = ${e.target.checked}`);
        setIsSelectAll(e.target.checked)
    }

    const handleChangeOptions = (value) => {
        console.log("selected " + value)
    }

    const handleClick0 = (e) => {
        console.log(e.key)
        setCurrent0(e.key)
    }

    const callback = (key) => {
        console.log(key)
    }

    return (
        <div style={{ marginTop: "5rem", padding: "0 5rem"}}>
            <div style={{ width: "250px", margin: "auto", textAlign: "center" }}>
                <Menu style={{ margin: "3rem 1rem" }} onClick={handleClick0} selectedKeys={[current0]} mode="horizontal">
                    <Menu.Item key="posting">
                        POSTING
                        </Menu.Item>
                    <Menu.Item key="recruit" >
                        RECRUTE
                        </Menu.Item>
                </Menu>
            </div>

            {current0 === "recruit" ? <div>
                <Row className="menu-1">
                    <Col span={24}>
                        {/* <Menu className="internship-status"  onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="pending">
                        Pending(0)
                        </Menu.Item>
                        <Menu.Item key="shortlisted" >
                        Shortlisted(0)
                        </Menu.Item>
                        <Menu.Item key="selected" >
                        Selected(0)
                        </Menu.Item>
                        <Menu.Item key="rejected" >
                        Rejected(0)
                        </Menu.Item>
                        {/* <Menu.Item >
                        </Menu.Item> 
                         </Menu>  */}
                        <Tabs defaultActiveKey="pending" onChange={callback}>
                            <TabPane tab={`Pending(${noOfPending})`} key="pending">
                                <div className="second-tab" style={{ margin: "2rem 0" }}>
                                    <Checkbox onChange={onChangeCheckbox}>Select All</Checkbox>

                                    <div className="clickable-options" style={{ marginLeft: "2rem" }}>
                                        <p>SHORTLIST</p>
                                        <p>SELECT</p>
                                        <p>REJECT</p>
                                    </div>
                                    <div className="clickable-options-2">
                                        <p>Short By </p>
                                        <Select defaultValue="Most Recent" style={{ width: 120 }} onChange={handleChangeOptions}>
                                            <Option value="most-recent">Most Recent</Option>
                                            <Option value="op2">option2</Option>
                                            <Option value="op3">option3</Option>
                                            <Option value="op4">option4</Option>
                                        </Select>
                                    </div>
                                </div>
                                {pendingApplication}
                            </TabPane>
                            <TabPane tab={`Shortlisted(${noOfShortlisted})`} key="shortlisted">
                                <div className="second-tab" style={{ margin: "2rem 0" }}>
                                    <Checkbox onChange={onChangeCheckbox}>Select All</Checkbox>
                                    <div className="clickable-options" style={{ marginLeft: "2rem" }}>
                                        {/* <p>SHORTLIST</p> */}
                                        <p>SELECT</p>
                                        <p>REJECT</p>
                                    </div>
                                    <div className="clickable-options-2">
                                        <p>Short By </p>
                                        <Select defaultValue="Most Recent" style={{ width: 120 }} onChange={handleChangeOptions}>
                                            <Option value="most-recent">Most Recent</Option>
                                            <Option value="op2">option2</Option>
                                            <Option value="op3">option3</Option>
                                            <Option value="op4">option4</Option>
                                        </Select>
                                    </div>
                                </div>
                                {shortlistedApplication}
                            </TabPane>
                            <TabPane tab={`Selected(${noOfSelected})`} key="selected">
                                {selectedApplication}
                            </TabPane>
                            <TabPane tab={`Rejected(${noOfRejected})`} key="rejected">
                                {rejectedApplication}
                            </TabPane>
                        </Tabs>
                    </Col>
                    {/* <Col span={4}>
                        <div style={{color: "#ec3f78", cursor:"pointer", paddingTop:"10px"}} >
                            EXPORT CSV <img src={exportSvg} alt="export SVG"/>
                        </div>
                    </Col> */}
                </Row>



                {/* {internApplication ? internApplication.applications.map((application, index) => 
                <ApplicationCard
                    // isSelectAll={isSelectAll}
                    key={index}
                    companyId={application.companyId}
                    internshipId={props.match.params.internship_id}
                    application={application}
                />
            ) : null} */}


            </div> : current0 === "posting" ? <SingleInternship internship={singleInternship} /> : "Something went wrong"}
        </div>

    )
}
