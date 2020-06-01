import React, {useState, useEffect} from 'react';
import randomImg from '../../assets/img/logo.svg';
import { Progress, Tabs, Checkbox, Select, Skeleton } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import GigProfile from './gigProfile';
import axios from 'axios';
import Internship from '../internship/internship/internship';


const { Option } = Select;
const { TabPane } = Tabs;

export default function SpecificGig(props) {
    const [isShow, setIsShow] = useState(false)
    const randomArr = [1,2,3,4,5,6,7,8];
    const history = useHistory();
    console.log(props)

    const [workerAppl, setWorkerAppl] = useState(null)
    const [userId, setUserId] = useState(null)
    const [isRefresh, setIsRefresh] = useState(null)
    const [filterApplication, setFilterApplication] = useState(null)

    // const InternshipId = props.match.params.id;
    const {id} = useParams();
    useEffect(() => {
        const url = `internship/get_applications/${id}`
        axios.get(url)
            .then(res => {
                const data = res.data;
                const applications = data.applications;
                console.log(res.data)
                setWorkerAppl(data.applications)
                const pendingAppl =  applications.filter(el => el.status == 300);
                const selectedAppl =  applications.filter(el => el.status == 301);
                const shortlistedAppl =  applications.filter(el => el.status == 302);
                const rejectedAppl =  applications.filter(el => el.status == 303);

                setFilterApplication({pendingAppl,selectedAppl,shortlistedAppl,rejectedAppl})
            })
    }, [isRefresh])

    
    const checkboxHandler = (e) => {
        console.log(e.target.checked);
    }

    
    const selectHandler = (value) => {
        console.log(`selected and filterapplication ${value}`);
        console.log(filterApplication)
        if(value === "Pending"){
            // const pendingAppl =  workerAppl.filter(el => el.status == 300);
            setWorkerAppl(filterApplication.pendingAppl)
        } else if(value === "Selected"){
            // const selectedAppl =  workerAppl.filter(el => el.status == 301);
            setWorkerAppl(filterApplication.selectedAppl)
        } else if(value === "Shortlisted"){
            // const shortlistedAppl =  workerAppl.filter(el => el.status == 302);
            setWorkerAppl(filterApplication.shortlistedAppl)
        } else if(value === "Rejected"){
            // const rejectedAppl =  workerAppl.filter(el => el.status == 303);
            setWorkerAppl(filterApplication.rejectedAppl)
        }
      }

      const selectHandler2 = (value) => {
        console.log(`selected ${value}`);
      }
      
    const openWorkerModal = (UserId) => {
        setUserId(UserId);
        setIsShow(true)
        console.log("open")
    }

    const isClose = () => {
        setIsShow(false)
    }
    const isUpdate = () => {
        setIsRefresh(Math.random())
    }

    const selectOptions = (
        <div style={{display: "flex", alignItems: "center"}}>
            <div style={{width: "fit-content", paddingRight: "0.5rem"}} >Filter:</div>
            <Select defaultValue="All" style={{ width: 100 }} onChange={selectHandler2}>
            <Option value="All">All</Option>
            <Option value="Option2">Option2</Option>
            <Option value="Option3">Option3</Option>
            <Option value="Option4">Option4</Option>
        </Select>  
        </div>
         
    )

    return (
        <div className="specific-gig">
            {isShow ? <GigProfile isUpdate={isUpdate} isShow={isShow} isClose={isClose} userId={userId} /> : null}
            <div className="specific-gig__title">
                Whatsapp Marketing
            </div>
            <div className="campaigns-block">
                <div className="single-block campaigns-details">
                    <div className="card-top">
                        Campaign Details
                    </div>
                    <div className="card-details">
                        <div className="task">
                            <p className="title">Task</p>
                            <p className="details">Whatsapp Marketing</p>
                        </div>
                        <div className="category">
                            <p className="title">Category</p>
                            <p className="details">Marketing</p>
                        </div>
                    </div>
                </div>
                <div className="single-block campaigns-summery">
                    <div className="card-top">
                            Campaign Summary
                    </div>
                    <div className="card-details">
                    <table className="single-detail" style={{width: "100%"}}>
                        <tbody>
                        <tr>
                            <td className="title" >End</td>
                            <td className="details">10 Apr</td>
                        </tr>
                        <tr>
                            <td className="title" >Gender</td>
                            <td className="details">Female</td>
                        </tr>
                        <tr>
                            <td className="title" >Cities</td>
                            <td className="details">All</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="single-block hire-o-meter">
                    <div className="card-top">
                            Hire-o-meter
                    </div>
                    <div className="card-details">
                        <table className="single-detail">
                            <tbody>
                            <tr>
                                <td className="title" >Workers Hired</td>
                                <td className="details">2/3</td>
                            </tr>
                            <tr>
                                <td className="title" >Taskers Under Review</td>
                                <td className="details">2/3</td>
                            </tr>
                            <tr>
                                <td className="title" >Projects Completed</td>
                                <td className="details">0</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        <div className="worker-task-block">
            <div className="applied-workers-block">
                <div className="applied-workers-block__title">
                    <div> Workers Applied</div>
                    <div  style={{display: "flex", alignItems: "center"}}>
                    <Checkbox style={{paddingRight: "1rem"}} onChange={checkboxHandler}>Select All</Checkbox>
                    <div style={{paddingRight: "0.5rem", fontSize: "14px", opacity: 0.5}}>Filter:</div>
                    <Select defaultValue="Pending" style={{ width: 100 }} onChange={selectHandler}>
                        {/* <Option value=""></Option> */}
                        <Option value="Pending">Pending</Option>
                        <Option value="Shortlisted">Shortlisted</Option>
                        <Option value="Selected">Selected</Option>
                        <Option value="Rejected">Rejected</Option>
                    </Select>
                    </div>
                </div>
                {workerAppl ? workerAppl.map((application, index) => 
                    <div className="applied-workers-panel" key={index} onClick={() => openWorkerModal(application.user._id)}>
                       
                    <div className="image">
                        <img src={application.user.imgUrl} alt=""></img>
                    </div>
                    <div className="worker-name">
                        <div className="name">{application.user.firstName} <br/> <span className="last-update">{application.user.lastUpdatedAt}</span>  </div>
                    </div>
                    <Progress className="progress-bar" percent={application.user.resumeScore} showInfo={false} />
                    
                    <div className="percentage">
                        {application.user.resumeScore}%
                    </div>
                </div>
                ) : <Skeleton height="50vh" active />}
            </div>
            <div className="task-info">
            <Tabs defaultActiveKey="1" tabBarExtraContent={selectOptions}>
                <TabPane tab="Selected" key="1">
                {randomArr.map((el, index) => 
                    <div key={index} className="workers-panel">
                        <table style={{width: "100%"}}>
                            <tbody>
                            <tr>
                                <td>
                                <div className="name-and-image">
                                    <div className="image">
                                        <img src={randomImg} alt=""></img>
                                    </div>
                                    <div className="worker-name">
                                        <div className="name">Rakesh Soni  </div>
                                    </div> 
                                </div>
                                </td>
                                <td width="50%">
                                <div className="submitted">
                                    <div style={{backgroundColor: index % 2 != 0 ? "#00d12f" : "#ff8000"}} className="dot" ></div>
                                    {index % 2 != 0 ? "Task Submitted" : "Task is Not Submited"}
                                </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                </div>
                    )}
                </TabPane>
                <TabPane tab="Completed" key="2">
                Content of Tab Pane 2
                </TabPane>
            </Tabs>
            
            
            </div>
        </div>
    </div>
    )
}
