import React, {Fragment, useState, useEffect} from 'react';
import { Menu, Checkbox, Select, Row, Col  } from 'antd';
import exportSvg from './export.svg';
import ApplicationCard from './ApplicationCard';
import SingleInternship from '../../internship/singleInternship/singleIntersnship';
import axios from 'axios';
const { Option } = Select;



export default function InternshipStatus(props) {

    const [current, setCurrent] = useState("pending");
    const [current0, setCurrent0] = useState("recruit");
    const [singleInternship, setSingleInternship ] = useState(null)
    const [internApplication, setInternApplication ] = useState(null)
    const [isSelectAll, setIsSelectAll ] = useState(false)
    // const [current, setCurrent] = useState("mail");

    const handleClick = (e) =>{
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
                setInternApplication(res.data)
            })
    },[])

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

    return (
            <div style={{marginTop: "5rem", padding: "0 5rem"}}>
                <div style={{width: "250px", margin: "auto", textAlign:"center"}}>
                    <Menu style={{margin: "3rem 1rem"}} onClick={handleClick0} selectedKeys={[current0]} mode="horizontal">
                        <Menu.Item key="posting">
                            POSTING
                        </Menu.Item>
                        <Menu.Item key="recruit" >
                            RECRUTE
                        </Menu.Item>
                    </Menu>
                </div>
            
            { current0 === "recruit" ? <div> 
                <Row className="menu-1">
                    <Col span={20}>
                    <Menu className="internship-status"  onClick={handleClick} selectedKeys={[current]} mode="horizontal">
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
                        
                        </Menu.Item> */}
                    </Menu> 
                    </Col>
                    <Col span={4}>
                        <div style={{color: "#ec3f78", cursor:"pointer", paddingTop:"10px"}} >
                            EXPORT CSV <img src={exportSvg} alt="export SVG"/>
                        </div>
                    </Col>
                </Row>
                
            <div className="second-tab" style={{margin: "2rem 0"}}>
            <Checkbox onChange={onChangeCheckbox}>Select All</Checkbox>

                <div className="clickable-options" style={{marginLeft: "2rem"}}>
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

            {internApplication ? internApplication.applications.map((application, index) => 
                <ApplicationCard
                isSelectAll={isSelectAll}
                key={index}
                companyId={application.companyId}
                internshipId={props.match.params.internship_id}
                application={application}
            /> 
            ) : null}
            
            
            </div> : current0 === "posting" ? <SingleInternship internship={singleInternship}/> : "Something went wrong"}
            </div>
            
    )
}
