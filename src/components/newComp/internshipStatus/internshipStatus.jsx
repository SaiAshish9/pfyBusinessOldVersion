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

    const [fullList, setFullList] = useState(null)

    const [isSelectAllShorlisted, setIsSelectAllShorlisted] = useState(false)
    const [isSelectAllPending, setIsSelectAllPending] = useState(false)

    const [noOfPending,setNoOfPending] = useState(0)
    const [noOfShortlisted,setNoOfShortlisted] = useState(0)
    const [noOfSelected,setNoOfSelected] = useState(0)
    const [noOfRejected,setNoOfRejected] = useState(0)
    // const [current, setCurrent] = useState("mail");

    const pendingApplication = fullList ? fullList.pending.map((application, index) =>
        <ApplicationCard
            // isSelectAll={isSelectAllPending}
            myFun={myFun}
            key={index}
            companyId={application.companyId}
            internshipId={props.match.params.internship_id}
            application={application}
        />
    ) : null;
    // console.log(pendingApplication)
    // if(pendingApplication) setNoOfPending(pendingApplication.length)


    const shortlistedApplication = fullList ? fullList.shortlisted.map((application, index) =>
        <ApplicationCard
            // isSelectAll={isSelectAllShorlisted}
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
    const internshipId = props.match.params.internship_id;

    useEffect(() => {
        console.log(props)
        const urlForInternApplication = `internship/get_applications/${internshipId}`;

        axios.get(urlForInternApplication)
            .then(res => {
                console.log("%c Internship Application", "color: darkblue; font-size: 25px")
                console.log(res.data)
                const pending = res.data.applications.filter(app => app.status === 300)
                .sort((a,b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
                const shortlisted = res.data.applications.filter(app => app.status === 301)
                .sort((a,b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());;
                const selected = res.data.applications.filter(app => app.status === 302)
                .sort((a,b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());;
                const rejected = res.data.applications.filter(app => app.status === 303)
                .sort((a,b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());;

                setFullList({pending:pending, shortlisted:shortlisted, selected:selected, rejected:rejected})

                setNoOfPending(pending.length)
                setNoOfShortlisted(shortlisted.length)
                setNoOfSelected(selected.length)
                setNoOfRejected(rejected.length)

                setInternApplication(res.data)
            })
    }, [changeInApplication])

    useEffect(() => {

        const url = `internship/company_fetchone/${internshipId}`;
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setSingleInternship(res.data)
            })
    }, [])

    // const onChangeCheckbox = (e) => {
    //     console.log(`checked = ${e.target.checked}`);
    //     // setIsSelectAll(e.target.checked)
    // }

    const handleChangeOptionsinPending = (value) => {
        console.log("SELECTED " + value)
        console.log(fullList)
        const array = fullList.pending;
        if(value === "resume-score"){
            const newArr = array.sort((a,b) => b.user.resumeScore - a.user.resumeScore)
            setFullList({...fullList,pending:newArr})
        } else if(value === "most-recent"){
            const newArr2 = array.sort((a,b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
            console.log('%c filtered array', 'font-size: 25px')
            console.log(newArr2)
            setFullList({...fullList, pending:newArr2})

        }
    }

    const handleChangeOptionsInShortlisted = (value ) => {
        console.log("selected " + value)
        const array = fullList.shortlisted;
        if(value === "resume-score"){
            const newArr = array.sort((a,b) => b.user.resumeScore - a.user.resumeScore)
            setFullList({...fullList,shortlisted:newArr})
        } else if(value === "most-recent"){
            const newArr2 = array.sort((a,b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
            console.log('%c filtered array', 'font-size: 25px')
            console.log(newArr2)
            setFullList({...fullList, shortlisted:newArr2})

        }
        // shortlisted.sort()
    }

    const handleClick0 = (e) => {
        console.log(e.key)
        setCurrent0(e.key)
    }

    const callback = (key) => {
        console.log(key)
    }

    const onChangeCheckboxPending=(e)=>{
        console.log(`checked = ${e.target.checked}`);
        setIsSelectAllPending(e.target.value)
        const allPendingCandidate =  fullList.pending.map(app => app.user._id);
        console.log(allPendingCandidate)
    }

    const onChangeCheckboxShortlisted=(e)=>{
        console.log(`checked = ${e.target.checked}`);
        setIsSelectAllShorlisted(e.target.value)
        const allShortlistedCandidate = fullList.shortlisted.map(app => app.user._id)        
        console.log(allShortlistedCandidate)
        
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
                        <Tabs defaultActiveKey="pending" onChange={callback}>
                            <TabPane tab={`Pending(${noOfPending})`} key="pending">
                                <div className="second-tab" style={{ margin: "2rem 0" }}>
                                    <Checkbox onChange={onChangeCheckboxPending}>Select All</Checkbox>

                                    <div className="clickable-options" style={{ marginLeft: "2rem" }}>
                                        <p>SHORTLIST</p>
                                        <p>SELECT</p>
                                        <p>REJECT</p>
                                    </div>
                                    <div className="clickable-options-2">
                                        <p>Sort By </p>
                                        <Select defaultValue="Most Recent" style={{ width: 120 }} onChange={handleChangeOptionsinPending}>
                                            <Option value="most-recent">Most Recent</Option>
                                            <Option value="resume-score">Resume Score</Option>
                                            {/* <Option value="op3">option3</Option> */}
                                            {/* <Option value="op4">option4</Option> */}
                                        </Select>
                                    </div>
                                </div>
                                {pendingApplication}
                            </TabPane>
                            <TabPane tab={`Shortlisted(${noOfShortlisted})`} key="shortlisted">
                                <div className="second-tab" style={{ margin: "2rem 0" }}>
                                    <Checkbox onChange={onChangeCheckboxShortlisted}>Select All</Checkbox>
                                    <div className="clickable-options" style={{ marginLeft: "2rem" }}>
                                        {/* <p>SHORTLIST</p> */}
                                        <p>SELECT</p>
                                        <p>REJECT</p>
                                    </div>
                                    <div className="clickable-options-2">
                                        <p>Short By </p>
                                        <Select defaultValue="Most Recent" style={{ width: 120 }} onChange={handleChangeOptionsInShortlisted}>
                                            <Option value="most-recent">Most Recent</Option>
                                            <Option value="resume-score">Resume Score</Option>
                                            {/* <Option value="op3">option3</Option> */}
                                            {/* <Option value="op4">option4</Option> */}
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
