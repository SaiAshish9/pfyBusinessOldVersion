import React, {useState} from 'react';
import {Modal, Button, Form, Radio, InputNumber, Select, DatePicker} from 'antd';
import { RightOutlined } from '@ant-design/icons';


const { Option } = Select;
export default function Page1(props) {
    // const [isSuccess, setIsSuccess] = useState(false)

    const initVal = props.initVal1;

    console.log('%c intival', initVal, 'font-size: 25px')

    const onFinish = values => {
        console.log('Received values of form: ', values);
        props.isSuccess1();
        props.data1(values);
    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form   className="page1"
                    name="page1"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={{
                        'month-or-year': "month",
                        ...initVal
                      }}
                    >
                        <h2>Select Internship Profile</h2>
                        <Form.Item name="internship-profile"  rules={[{required: true, message: 'Required',},]}>
                            <Radio.Group>
                            <Radio.Button  value="business-development">Business Development (Sales)</Radio.Button>
                            <Radio.Button value="campus-ambassador">Campus Ambassador</Radio.Button>
                            <Radio.Button value="web-devlopment">Web Development</Radio.Button>
                            <Radio.Button value="operations">Operations</Radio.Button>
                            <Radio.Button value="human-resources">Human Resources</Radio.Button>
                            <Radio.Button value="digital-marketing">Digital Marketing</Radio.Button>
                            <Radio.Button value="social-media-marketing">Social Media Marketing</Radio.Button>
                            <Radio.Button value="marketing">Marketing</Radio.Button>
                            <Radio.Button value="content-writing">Content Writing</Radio.Button>
                            <Radio.Button value="law">Law/Legal</Radio.Button>
                            <Radio.Button value="graphic-design">Graphic Design</Radio.Button>
                            <Radio.Button value="mobile-app-development">Mobile App Development</Radio.Button>
                            <Radio.Button value="other">other</Radio.Button>
                            </Radio.Group>
                        </Form.Item>

                        <div className="inline-form">
                        
                        <div>
                            <h2>Select Internship Type</h2>
                            <Form.Item name="internship-type"  rules={[{required: true, message: 'Required'}]}>
                                <Radio.Group>
                                    <Radio.Button style={{marginTop: "0"}}  value="in-office">In Office</Radio.Button>
                                    <Radio.Button style={{marginTop: "0"}} value="work-from-home">Work From Home</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div>
                            <h2>Number of openings</h2>
                            <Form.Item name="no-of-openings" rules={[{required: true, message: 'Required'}]}>
                                <InputNumber placeholder="type no of openings"  />
                            </Form.Item>
                        </div>
                        <div>
                        <div>
                        <h2>Internship Duration</h2>
                            <div className="inline-form">
                            <Form.Item name="internship-duration" rules={[{required: true, message: 'req'}]}>
                                <InputNumber style={{width: "8rem"}} placeholder="type duration" />
                            </Form.Item>
                            <Form.Item
                                name="month-or-year"
                                // label="Select"
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
                                <Form.Item name="start-date" rules={[{ required: true,message: 'Required',},]}>
                                    <DatePicker />
                                </Form.Item>
                            </div>
                            <div>
                                <h2>Last Date To Apply</h2>
                                <Form.Item name="end-date" rules={[{ required: true,message: 'Required',},]}>
                                    <DatePicker />
                                </Form.Item>
                            </div>
                        
                        

                            <div>
                                <h2>Internship Location</h2>
                                <Form.Item  className="location" name="location"  rules={[{required: true, message: 'Required'}]}>
                                    <Radio.Group>
                                        <Radio.Button style={{width: "11rem", marginLeft:"3rem",textAlign:"center"}}  value="all-india">All India</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                            <div style={{alignSelf:"center", marginTop: "1.5rem"}} >OR</div>
                            <div style={{alignSelf:"center"}}>
                                <h2 style={{color: "#f7f7f7"}}>  "  "</h2>
                            <Form.Item
                                    name="cities"
                                    // label="Type Cities"
                                    rules={[{ required: true,message: 'Required',  type: 'array'},]}
                                >
                                    <Select mode="multiple" placeholder="Type Cities" >
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
