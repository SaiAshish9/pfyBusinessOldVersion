import React, {Fragment, useState} from 'react';
import { Menu, Checkbox, Select  } from 'antd';
import exportSvg from './export.svg';
import ApplicationCard from './ApplicationCard';
const { Option } = Select;



export default function InternshipStatus() {

    const [current, setCurrent] = useState("pending");
    // const [current, setCurrent] = useState("mail");

    const handleClick = (e) =>{
        console.log('click ', e);
        setCurrent(e.key)
        // this.setState({
        // current: e.key,
        // });
    }

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      }

    const handleChangeOptions = (value) => {
        console.log("selected " + value)
      }

    return (
        <Fragment>
            <div style={{marginTop: "5rem", padding: "0 5rem"}}>
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
                <Menu.Item style={{color: "#ec3f78"}}>
                EXPORT CSV <img src={exportSvg} alt="export SVG"/>
                </Menu.Item>
            </Menu>
            <div className="second-tab" style={{margin: "2rem 0"}}>
            <Checkbox onChange={onChange}>Select All</Checkbox>

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
                     {/* <p>Short By</p>
                     <p style={{fontWeight: "500"}}>Most Recent</p> */}
                </div>
            </div>
            {/* <div className="student" style={{backgroundColor:"lightblue", width: "100%", height: "500px"}}>
            <div  className="student-min" >
                   <div className="photo"></div>
                   <div className="name">
                       <p>Shivani Sharma</p>
                   </div>
                   <div className="institute">
                    <p>Netaji Subhash Institute of Technology</p>    
                   </div>
                   <div className="location">
                    <p>Delhi</p>    
                   </div>
                   <div style={{width: "10rem", height:"2rem", backgroundColor: "#ccc",borderRadius: "3px"}}>
                       <div style={{width: "3rem", height:"2rem", backgroundColor: "#2acf18", borderRadius: "3px"}}>
                        <div style={{color: "$fff"}}>Resume Score: 70%</div> 
                       </div>
                   </div>
            </div>
            <div className="student-details">
                details
            </div>
            </div> */}
            
            <ApplicationCard
            key={1}
            companyId={"demo"}
            internshipId={"this.props.match.params.id"}
            application={"application"}
      />
            </div>
            
        </Fragment>
    )
}
