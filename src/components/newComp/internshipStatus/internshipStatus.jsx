import React, { Fragment, useState, useEffect } from 'react';
import { Menu, Checkbox, Select, Row, Col, Tabs, Skeleton } from 'antd';
import exportSvg from './export.svg';
import ApplicationCard from './ApplicationCard';
import SingleInternship from '../../internship/oldDesign/singleInternship/singleIntersnship';
import axios from 'axios';
import WorkerDetails from '../../internship/internship/WorkerDetails';

const { Option } = Select;
const { TabPane } = Tabs;

// export const CheckboxContext = React.createContext({ colour: 'blue', lang: 'en' });


const statusCodeToText = {
    300: "pending",
    301: "shortlisted",
    302: "selected",
    303: "rejected",
}

const textToStatusCode = {
    shortlisted: 301,
    selected: 302,
    rejected: 303
}
let i=0;

const WorkerCard = ({application, key, isSelectAll, internshipId}) => {
    const user = application ? application.user : null;

    const [isShow, setIsShow] = useState(false)

    const isClose = () => {
        setIsShow(false);
    };

    
    // console.log("USER/WORKER CARD DETAILS  ", user);
    
    const openWorkerProfile = () => {
        console.log(1);
        setIsShow(true)

    }


    if(user)
        return(
            <Fragment>
            <WorkerDetails internshipId={internshipId} isShow={isShow} isClose={isClose} userId={user._id} />
            <div onClick={openWorkerProfile} key={key} className={"applied-worker-card" + (i++%2==0 ? " background-color-nth-child": "") + (isSelectAll ? " select-all" : "")}>
            <div className="img-and-name">
                <img className="img" src={user.imgUrl} alt="" ></img>
                <span>{user.firstName}</span>
            </div>
            <div className="college-name">
                Netaji Subhash Institute of Technology
            </div>
            <div className="city">
            {user.city}
            </div>
            <div className="progress-bar">
            <div className="header__progress">
                <div className={"applicationCard__ProgressBar"}>
                <div
                    style={{
                    background: "#2ACF18",
                    width: `${user.resumeScore}%`,
                    // width: "70%",
                    height:"2.2rem",
                    padding: ".3rem .4rem",
                    color: "black",
                    borderRadius: "5px",
                    // border: "solid 1px #d7d7d7"
                    }}
                >
                
                <p style={{width:"15rem", fontSize: "1rem", padding:0,marginBottom:0}}>Resume Score : {user.resumeScore}%</p>
                </div>
                </div>
                <div></div>
            </div>
            </div>
        </div>
        </Fragment>
    
    )
    else return (<div></div>)
}

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
            let deleteFromArr = statusCodeToText[data.status]; // that array where obj is removed
            let addToArr = data.action; // that array where obj is added
            let status = textToStatusCode[data.action]; // change status according to action perform on array
            let decNum, incNum;

            if(addToArr !== deleteFromArr){
                incNum = "noOf"+ addToArr[0].toUpperCase() + addToArr.slice(1) // noOf + Selected/Rejected/Shortlisted
                decNum = "noOf"+ deleteFromArr[0].toUpperCase() + deleteFromArr.slice(1) // noOf + Selected/Rejected/Shortlisted

                const newDeletedArr = fullList[deleteFromArr].filter(el => el.user._id !== data.userId) 
                const user = fullList[deleteFromArr].filter(el => el.user._id === data.userId) 
                console.log('%c USER ', 'font-size: 25px')
                console.log(user)
                const userWithChangedStatus= {...user[0], status: status} // change user status code before added to array

                const newAddedArr = [...fullList[addToArr], userWithChangedStatus]

                const newObj ={...fullList}
                newObj[addToArr] = newAddedArr.sort((a,b) => new Date(b.lastUpdatedAt).getTime() - new Date(a.lastUpdatedAt).getTime());
                newObj[deleteFromArr] = [...newDeletedArr.sort((a,b) => new Date(b.lastUpdatedAt).getTime() - new Date(a.lastUpdatedAt).getTime())]
                newObj[incNum] = newAddedArr.length
                newObj[decNum] = newDeletedArr.length

                setFullList(newObj)
            }
            
        // if above code is not working properly uncomment this line and delete/comment the above code 
        // setChangeInApplication(Math.random())
    }

    const [current, setCurrent] = useState("pending");
    const [changeInApplication, setChangeInApplication] = useState(null);
    const [current0, setCurrent0] = useState("recruit");
    // const [singleInternship, setSingleInternship] = useState(null)
    // const [internApplication, setInternApplication] = useState(null)

    const [fullList, setFullList] = useState(null)

    const [isSelectAllShorlisted, setIsSelectAllShorlisted] = useState(false)
    const [isSelectAllPending, setIsSelectAllPending] = useState(false)
    const [isSelectAllRejected, setIsSelectAllRejected] = useState(false)
    const [isSelectAllSelected, setIsSelectAllSelected] = useState(false)

    console.log('FULL LIST', fullList)

    // console.log("isSelectAllPending " + isSelectAllPending)

    const pendingApplication = fullList ? fullList.pending.map((application, index) =>
        <WorkerCard key={index} internshipId={props.internshipId} application={application} isSelectAll={isSelectAllPending} />

        // <ApplicationCard
        //     isSelectAll={isSelectAllPending}
        //     myFun={myFun}
        //     key={index}
        //     companyId={application.companyId}
        //     // internshipId={props.match.params.internshipId}
        //     application={application}
        // />
    ) : null;
    // console.log(pendingApplication)
    // if(pendingApplication) setNoOfPending(pendingApplication.length)
    console.log("%c FULLLIST", 'font-size: 25px')
    console.log(fullList)



    const shortlistedApplication = fullList ? fullList.shortlisted.map((application, index) =>
        <WorkerCard key={index} internshipId={props.internshipId} application={application} isSelectAll={isSelectAllShorlisted} />
    ) 
    : null;
    // console.log(shortlistedApplication)
    // if(shortlistedApplication) setNoOfShortlisted(shortlistedApplication.length)

    const selectedApplication = fullList ? fullList.selected.map((application, index) =>
    <WorkerCard key={index} internshipId={props.internshipId} application={application} isSelectAll={isSelectAllSelected} />
        
    ) : null;
    // if(selectedApplication) setNoOfSelected(selectedApplication.length)

    const rejectedApplication = fullList ? fullList.rejected.map((application, index) =>
    <WorkerCard key={index} application={application} internshipId={props.internshipId} isSelectAll={isSelectAllRejected} />
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
    // const internshipId = props.match.params.internship_id;
    const internshipId = props.internshipId;

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
                      noOfShortlisted:shortlisted.length, companyId:res.data.companyId})

                // setInternApplication(res.data)
                const dataToSend = {
                    pending: pending.length,
                    shortlisted :shortlisted.length,
                    selected :selected.length
                }
            
                props.data(dataToSend); 
            })
    }, [changeInApplication])

    // section is pending/shortlisted/selected/rejected in fullList object
    const resetFullList = (newArr, section) => {
        if(section === "pending") setFullList({...fullList, pending: newArr})
    }

    const handleChangeOptions = (value, section) => {
        console.log("SELECTED " + value)
        console.log(fullList)
        const array = fullList[section];
        if(value === "resume-score"){
            const newArr = array.sort((a,b) => b.user.resumeScore - a.user.resumeScore)
            // setFullList({...fullList,pending:newArr})
            resetFullList(newArr, "pending")
        } else if(value === "most-recent"){
            const newArr2 = array.sort((a,b) => new Date(b.lastUpdatedAt).getTime() - new Date(a.lastUpdatedAt).getTime());
            console.log('%c filtered array', 'font-size: 25px')
            console.log(newArr2)
            resetFullList(newArr2, section)
            // setFullList({...fullList, pending:newArr2})
        }
    }

    const handleClick0 = (e) => {
        console.log(e.key)
        setCurrent0(e.key)
    }

    const callback = (key) => {
        console.log(key)
    }

    const codeToTextForCheckbox = {
        300: "pending",
        301: "shortlist",
        302: "select",
        303: "reject",
    }


    const [selectAllChechbox, setSelectAllCheckbox] = useState({
        pending: false,
        shortlist: false,
        select: false,
        reject: false,

    })


    const onChangeCheckbox=(e, section)=> {
        console.log(`checked = ${e.target.checked}`);
        setSelectAllCheckbox({...selectAllChechbox, [section]: e.target.checked})
        console.table(selectAllChechbox)
        if(section === "pending") setIsSelectAllPending(e.target.checked)
        else if(section === "shortlist") setIsSelectAllShorlisted(e.target.checked)
        else if(section === "select") setIsSelectAllSelected(e.target.checked)
        else if(section === "reject") setIsSelectAllRejected(e.target.checked)
        // setIsSelectAllPending(e.target.checked)
        // const allPendingCandidate =  fullList.pending.map(app => app.user._id);
        // console.log(allPendingCandidate)
    }

    const resetCheckbox = () => {
        setSelectAllCheckbox({ pending: false, shortlist: false, select: false, reject: false,})
        setIsSelectAllPending(false)
        setIsSelectAllShorlisted(false)
        setIsSelectAllRejected(false)
        setIsSelectAllSelected(false)
    }


    const selectAllActionHandler = (currStats, target) => {
        const url = 'internship/' + target +  '_all';
        const data = {
            internshipId: internshipId,
	        currentStatus: parseInt(currStats)
        }
        console.table(selectAllChechbox)
        // console.log(selectAllChechbox[codeToTextForCheckbox[parseInt(currStats)]])
        if(selectAllChechbox[codeToTextForCheckbox[parseInt(currStats)]] ){
            axios.put(url, data)
            .then(res => {
                console.log(res.data)
                // const obj = {...setSelectAllCheckbox, selectAllChechbox[action]: false }
                resetCheckbox()
                setChangeInApplication(Math.random())
            })
        }
        
    }
    

    const ranArr= [1,2,3,4,5,6]
   
    return (
        <div className="internship-status-huge" >
            {fullList ? <div>
                <Row className="menu-1">
                    <Col span={24}>
                        <Tabs defaultActiveKey="pending" onChange={callback}>
                            <TabPane tab={`Pending(${fullList.noOfPending})`} key="pending">
                                <div className="second-tab" >
                                    <Checkbox checked={selectAllChechbox.pending} onChange={(e) => onChangeCheckbox(e, "pending")}>Select All</Checkbox>

                                    <div className="clickable-options" style={{ marginLeft: "2rem" }}>
                                        <p onClick={() => selectAllActionHandler(300, "shortlist")}>SHORTLIST</p>
                                        <p onClick={()=> selectAllActionHandler(300, "accept")}>SELECT</p>
                                        <p onClick={()=> selectAllActionHandler(300, "reject")}>REJECT</p>
                                    </div>
                                    <div className="clickable-options-2">
                                        <p>Sort By </p>
                                        <Select defaultValue="Most Recent" style={{ width: 120 }} onChange={(value) => handleChangeOptions(value, "pending")}>
                                            <Option value="most-recent">Most Recent</Option>
                                            <Option value="resume-score">Resume Score</Option>
                                        </Select>
                                    </div>
                                </div>
                                {pendingApplication}
                                
                            </TabPane>
                            <TabPane tab={`Shortlisted(${fullList.noOfShortlisted})`} key="shortlisted">
                                <div className="second-tab" >
                                    <Checkbox checked={selectAllChechbox.shortlist} onChange={(e) => onChangeCheckbox(e, "shortlist")}>Select All</Checkbox>
                                    <div className="clickable-options" style={{ marginLeft: "2rem" }}>
                                        {/* <p>SHORTLIST</p> */}
                                        <p onClick={()=> selectAllActionHandler(301, "accept")}>SELECT</p>
                                        <p onClick={()=> selectAllActionHandler(301, "reject")}>REJECT</p>
                                    </div>
                                    <div className="clickable-options-2">
                                        <p>Sort By </p>
                                        <Select defaultValue="Most Recent" style={{ width: 120 }} onChange={(val) => handleChangeOptions(val, "shortlisted")}>
                                            <Option value="most-recent">Most Recent</Option>
                                            <Option value="resume-score">Resume Score</Option>
                                        </Select>
                                    </div>
                                </div>
                                {shortlistedApplication}
                            </TabPane>
                            <TabPane tab={`Selected(${fullList.noOfSelected})`} key="selected">
                            <div className="second-tab" >
                                    <Checkbox checked={selectAllChechbox.select} onChange={(e) => onChangeCheckbox(e, "select")}>Select All</Checkbox>
                                    <div className="clickable-options" style={{ marginLeft: "2rem" }}>
                                        {/* <p>SHORTLIST</p> */}
                                        <p onClick={()=> selectAllActionHandler(302, "shortlist")}>SHORTLIST</p>
                                        <p onClick={()=> selectAllActionHandler(302, "reject")}>REJECT</p>
                                    </div>
                                    <div className="clickable-options-2">
                                        <p>Sort By </p>
                                        <Select defaultValue="Most Recent" style={{ width: 120 }} onChange={(val) => handleChangeOptions(val, "selected")}>
                                            <Option value="most-recent">Most Recent</Option>
                                            <Option value="resume-score">Resume Score</Option>
                                        </Select>
                                    </div>
                                </div>
                                {selectedApplication}
                            </TabPane>
                            <TabPane tab={`Rejected(${fullList.noOfRejected})`} key="rejected">
                            <div className="second-tab" >
                                    <Checkbox checked={selectAllChechbox.reject} onChange={(e) => onChangeCheckbox(e, "reject")}>Select All</Checkbox>
                                    <div className="clickable-options" style={{ marginLeft: "2rem" }}>
                                        <p onClick={()=> selectAllActionHandler(303, "shortlist")}>SHORTLIST</p>
                                        <p onClick={()=> selectAllActionHandler(303, "accept")}>SELECT</p>
                                    </div>
                                    <div className="clickable-options-2">
                                        <p>Sort By </p>
                                        <Select defaultValue="Most Recent" style={{ width: 120 }} onChange={(val) => handleChangeOptions(val, "rejected")}>
                                            <Option value="most-recent">Most Recent</Option>
                                            <Option value="resume-score">Resume Score</Option>
                                        </Select>
                                    </div>
                                </div>
                                {rejectedApplication}
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </div> : <Skeleton active />}
        </div>

    )
}
