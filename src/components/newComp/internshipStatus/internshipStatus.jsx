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
        //STATUS
        // 300 APPLIED
        // 301 SHORTLISTED
        // 302 SELECTED
        // 303 REJECTED
        console.log(data);
        // changeInApplication != data ? setChangeInApplication(data) : null;
        console.log('%c MY FUN DATA', 'font-size: 30px')
        console.log(data)
            let deleteFromArr;
            let addToArr;
            let status;
            let decNum;
            let incNum;

            if(data.status === 301) {
                deleteFromArr = "shortlisted"
                // decNum = "noOfShortlisted"
            } else if(data.status === 300){
                deleteFromArr = "pending"
                // decNum = "noOfPending"
            } else if(data.status === 302){
                deleteFromArr = "selected"
                // decNum = "noOfSelected"
            } else if (data.status === 303){
                deleteFromArr = "rejected"
                // decNum = "noOfRejected"
            }

            if(data.action === "rejected") {
                addToArr = "rejected"
                status = 303
                // incNum = "noOfRejected"
            } else if(data.action === "selected"){
                addToArr = "selected"
                status = 302
                // incNum = "noOfSelected"
                
            } else if(data.action === "shortlisted"){
                addToArr = "shortlisted"
                // incNum = "noOfShortlisted"
                status = 301
            }
            if(addToArr !== deleteFromArr){
                incNum = "noOf"+ addToArr[0].toUpperCase() + addToArr.slice(1)
                decNum = "noOf"+ deleteFromArr[0].toUpperCase() + deleteFromArr.slice(1)
                const newArr1 = fullList[deleteFromArr].filter(el => el.user._id !== data.userId) 
                const user = fullList[deleteFromArr].filter(el => el.user._id === data.userId)
                console.log('%c USER ', 'font-size: 25px')
                console.log(user)
                const userWithChangedStatus= {...user[0], status: status}

            // if(data.action === "rejected") {
                const newAddedArr = [...fullList[addToArr], userWithChangedStatus]

                const newObj ={...fullList}
                newObj[addToArr] = newAddedArr.sort((a,b) => new Date(b.lastUpdatedAt).getTime() - new Date(a.lastUpdatedAt).getTime());
                newObj[deleteFromArr] = [...newArr1.sort((a,b) => new Date(b.lastUpdatedAt).getTime() - new Date(a.lastUpdatedAt).getTime())]
                newObj[incNum] = newAddedArr.length
                newObj[decNum] = newArr1.length

                setFullList(newObj)
            }
            
                // setNoOfShortlisted(newShortlisted.length)
                // setNoOfRejected(newRejectaArr.length)
            // }
            
        
        // setChangeInApplication(Math.random())
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
    console.log("isSelectAllPending " + isSelectAllPending)

    const pendingApplication = fullList ? fullList.pending.map((application, index) =>
        <ApplicationCard
            isSelectAll={isSelectAllPending}
            myFun={myFun}
            key={index}
            companyId={application.companyId}
            internshipId={props.match.params.internship_id}
            application={application}
        />
    ) : null;
    // console.log(pendingApplication)
    // if(pendingApplication) setNoOfPending(pendingApplication.length)
    console.log("%c FULLLIST", 'font-size: 25px')
    console.log(fullList)



    const shortlistedApplication = fullList ? fullList.shortlisted.map((application, index) =>
        <ApplicationCard
            isSelectAll={isSelectAllShorlisted}
            myFun={myFun}
            key={index}
            companyId={application.companyId}
            internshipId={props.match.params.internship_id}
            application={application}
        />
    ) : null;
    console.log(shortlistedApplication)
    // if(shortlistedApplication) setNoOfShortlisted(shortlistedApplication.length)

    const selectedApplication = fullList ? fullList.selected.map((application, index) =>
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

    const rejectedApplication = fullList ? fullList.rejected.map((application, index) =>
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

    const sortByRecent = (data) =>{
                const pending = data.applications.filter(app => app.status === 300)
                .sort((a,b) => new Date(b.lastUpdatedAt).getTime() - new Date(a.lastUpdatedAt).getTime());
                const shortlisted = data.applications.filter(app => app.status === 301)
                .sort((a,b) => new Date(b.lastUpdatedAt).getTime() - new Date(a.lastUpdatedAt).getTime());
                const selected = data.applications.filter(app => app.status === 302)
                .sort((a,b) => new Date(b.lastUpdatedAt).getTime() - new Date(a.lastUpdatedAt).getTime());
                const rejected = data.applications.filter(app => app.status === 303)
                .sort((a,b) => new Date(b.lastUpdatedAt).getTime() - new Date(a.lastUpdatedAt).getTime());

                return {pending, shortlisted, selected, rejected};
    }

    useEffect(() => {
        console.log(props)
        const urlForInternApplication = `internship/get_applications/${internshipId}`;

        axios.get(urlForInternApplication)
            .then(res => {
                console.log("%c Internship Application", "color: darkblue; font-size: 25px")
                console.log(res.data)
                
                const{pending, shortlisted, selected, rejected } = sortByRecent(res.data)

                

                setFullList({pending:pending, shortlisted:shortlisted, selected:selected, rejected:rejected,
                     noOfPending:pending.length, noOfRejected:rejected.length, noOfSelected:selected.length,
                      noOfShortlisted:shortlisted.length})

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
            const newArr2 = array.sort((a,b) => new Date(b.lastUpdatedAt).getTime() - new Date(a.lastUpdatedAt).getTime());
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
            const newArr2 = array.sort((a,b) => new Date(b.lastUpdatedAt).getTime() - new Date(a.lastUpdatedAt).getTime());
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
        setIsSelectAllPending(e.target.checked)
        const allPendingCandidate =  fullList.pending.map(app => app.user._id);
        console.log(allPendingCandidate)
    }

    const onChangeCheckboxShortlisted=(e)=>{
        console.log(`checked = ${e.target.checked}`);
        setIsSelectAllShorlisted(e.target.checked)
        const allShortlistedCandidate = fullList.shortlisted.map(app => app.user._id)        
        console.log(allShortlistedCandidate)
        
    }

    return (
        <div className="internship-status-huge" style={{ marginTop: "5rem", padding: "0 5rem"}}>
            {/* <div style={{ width: "250px", margin: "auto", textAlign: "center" }}>
                <Menu style={{ margin: "3rem 1rem" }} onClick={handleClick0} selectedKeys={[current0]} mode="horizontal">
                    <Menu.Item key="posting">
                        POSTING
                        </Menu.Item>
                    <Menu.Item key="recruit" >
                        RECRUTE
                        </Menu.Item>
                </Menu>
            </div> */}

            {fullList ? <div>
                <Row className="menu-1">
                    <Col span={24}>
                        <Tabs defaultActiveKey="pending" onChange={callback}>
                            <TabPane tab={`Pending(${fullList.noOfPending})`} key="pending">
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
                            <TabPane tab={`Shortlisted(${fullList.noOfShortlisted})`} key="shortlisted">
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
                            <TabPane tab={`Selected(${fullList.noOfSelected})`} key="selected">
                                {selectedApplication}
                            </TabPane>
                            <TabPane tab={`Rejected(${fullList.noOfRejected})`} key="rejected">
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


            </div> : null}
        </div>

    )
}
