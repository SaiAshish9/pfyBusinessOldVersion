import React, {useState, useEffect} from 'react';
import {Modal, Button, Form, Radio, InputNumber, Select, DatePicker, Input} from 'antd';
import { RightOutlined } from '@ant-design/icons';


const { Option } = Select;
export default function Page1(props) {
    const [showInput, setShowInput] = useState(false)
    const [isSelected, setIsSelected] = useState(true)
    const [otherProfileName, setOtherProfileName] = useState(null)

    const initVal = props.initVal1;

    // console.log('%c intival', initVal, 'font-size: 25px')

    const onFinish = values => {
        console.log('Received values of form: ', values);
        values['location'] = isSelected;
        props.isSuccess1();
        
        props.data1(values);

    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const profileHandler = (e) => {
        const val = e.target.value
        if(val === 'other') setShowInput(true)
        else setShowInput(false)
    }

    const otherProfileHandler = (e) => {
        const val = e.target.value
        setOtherProfileName(val)

    }
 
    useEffect(() => {
        if(initVal){
            if(initVal['internship-profile'] === 'other') {
                setOtherProfileName(initVal['other-profile-name'])
                setShowInput(true)
            }
            if(initVal['cities'] && initVal['cities'].length) setIsSelected(false)
            else setIsSelected(true)

         }

    }, [])
    
    const allIndiaHandler = () => {
        setIsSelected(!isSelected)
    }

    const citiesHandler = (value) => {
        if(value.length) setIsSelected(false)
        else setIsSelected(true)
    }
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
    return (
        <div>
            <Form   className="page1"
                    name="page1"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={{
                        'duration-2': "month",
                        'location': true,
                        ...initVal
                      }}
                    >
                        <h2>Select Internship Profile</h2>
                        <Form.Item name="internshipCategory" onChange={profileHandler} rules={[{required: true, message: 'Required',},]}>
                            <Radio.Group>
                            <Radio.Button key={"business-development"}  value="Business Development">Business Development (Sales)</Radio.Button>
                            <Radio.Button key={"campus-ambassador"} value="Campus Ambassador">Campus Ambassador</Radio.Button>
                            <Radio.Button key={"web-devlopment"} value="Web Devlopment">Web Development</Radio.Button>
                            <Radio.Button key={"operations"} value="Operations">Operations</Radio.Button>
                            <Radio.Button key={"human-resources"} value="Human Resources">Human Resources</Radio.Button>
                            <Radio.Button key={"digital-marketing"} value="Digital Marketing">Digital Marketing</Radio.Button>
                            <Radio.Button key={"social-media-marketing"} value="Social Media Marketing">Social Media Marketing</Radio.Button>
                            <Radio.Button key={"marketing"} value="Marketing">Marketing</Radio.Button>
                            <Radio.Button key={"content-writing"} value="Content Writing">Content Writing</Radio.Button>
                            <Radio.Button key={"law"} value="Law">Law/Legal</Radio.Button>
                            <Radio.Button key={"graphic-design"} value="Graphic Design">Graphic Design</Radio.Button>
                            <Radio.Button key={"mobile-app-development"} value="Mobile App Development">Mobile App Development</Radio.Button>
                            <Radio.Button key={"other"} value="other">other</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        {showInput ? <Form.Item name="internship-profile-other" rules={[{required: true, message: 'Required'}]} >
                            <Input onChange={otherProfileHandler} style={{height: '44px', width: '50%', borderRadius: '5px'}}  placeholder="enter internship profile"  rules={[{required: true, message: 'Required'}]}  />
                        </Form.Item> : null }  

                        <div className="inline-form">
                        
                        <div>
                            <h2>Select Internship Type</h2>
                            <Form.Item name="internshipType"  rules={[{required: true, message: 'Required'}]}>
                                <Radio.Group>
                                    <Radio.Button style={{marginTop: "0"}}  value="in-office">In Office</Radio.Button>
                                    <Radio.Button style={{marginTop: "0"}} value="work-from-home">Work From Home</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div>
                            <h2>Number of openings</h2>
                            <Form.Item name="noOfPosition" rules={[{required: true, message: 'Required'}]}>
                                <InputNumber  />
                            </Form.Item>
                        </div>
                        <div>
                        <div>
                        <h2>Internship Duration</h2>
                            <div className="inline-form">
                            <Form.Item name="duration-1" rules={[{required: true, message: 'req'}]}>
                                <InputNumber style={{width: "8rem"}} />
                            </Form.Item>
                            <Form.Item
                                name="duration-2"
                                rules={[{ required: true, message: 'Required'},]}
                            >
                                <Select >
                                <Option value="month">Month</Option>
                                <Option value="year">Year</Option>
                                </Select>
                            </Form.Item>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* new inline form */}
                        <div className="inline-form">
                            <div>
                                <h2>Internship Start Date</h2>
                                <Form.Item name="startingOfInternship" rules={[{ required: true,message: 'Required',},]}>
                                    <DatePicker  />
                                </Form.Item>
                            </div>
                            <div className="last-date-input">
                                <h2>Last Date To Apply</h2>
                                <Form.Item name="applyBefore" rules={[{ required: true,message: 'Required',},]}>
                                    <DatePicker/>
                                </Form.Item>
                            </div>
                        
                        

                            <div style={{marginLeft: "2rem"}}>
                                <h2>Internship Location</h2>
                                <Form.Item  className="location" name="location"  rules={[{required: isSelected, message: 'Required'}]}>
                                    <Radio.Group>
                                        <Radio.Button onClick={allIndiaHandler} style={{width: "11rem",textAlign:"center", background: isSelected ? "#ccc" : "#fff"}}  value="all-india">All India</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                            <div style={{alignSelf:"center", marginTop: "1.5rem"}} >OR</div>
                            <div style={{alignSelf:"center",marginLeft:"1rem"}}>
                                <h2 style={{color: "#f7f7f7"}}>  "  "</h2>
                            <Form.Item
                                    name="cities"
                                    rules={[{ required: false, message: 'Required',  type: 'array'} ]}
                                    validateTrigger={['onChange']}
                                >
                                    <Select onChange={citiesHandler} mode="multiple" placeholder="Type Cities" >
                                        <Option value="delhi">Delhi</Option>
                                        <Option value="mumbai">Mumbai</Option>
                                        <Option value="bangalore">Bangalore</Option>
                                        <Option value="hyderabad">Hyderabad</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                        <Form.Item style={{textAlign:"center"}} >
                            <Button className="continue-btn" type="primary" htmlType="submit">
                                Continue <RightOutlined />
                            </Button>
                        </Form.Item>
                    </Form>
        </div>
    )
}
