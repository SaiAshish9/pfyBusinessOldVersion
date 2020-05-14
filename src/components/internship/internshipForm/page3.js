import React, {Fragment, useEffect, useState} from 'react'
import {Modal, Button, Form, Radio, InputNumber, Select, DatePicker, Input, Checkbox, Row,Col} from 'antd';
import { MinusCircleOutlined, PlusOutlined, RightOutlined, LeftOutlined } from "@ant-design/icons";

const { Option } = Select;
export default function Page3(props) {

    const [stipendType, setStipendType] = useState("paid")

    const initVal = props.initVal3;

    const onFinish = values => {
        console.log('Received values of form: ', values);
        // props.isSuccess();
        props.data3(values);
        props.submitHandler()
    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const rules = [{required: true, message: 'Required',}];

    useEffect(() => {
        if(!initVal){
            document.querySelector('.add-btn-additional-benefits').click();
        } else{
            setStipendType(initVal["stipendType"])
        }
       
    },[])

    const stipendTypeHandler = (value) => {
        console.log('stipend type is ', value)
        setStipendType(value);
    }

    return (
        <div>
            <Form
                className="page3"
                name="page3"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{
                    "stipendType": stipendType,
                        ...initVal
                    }}
                >
                    <div className="inline-form">
                        <div>
                            <div className="inline-form" style={{justifyContent:"flex-start"}} >
                                <div>
                                    <h2>Stipend Type</h2>
                                <Form.Item
                                name="stipendType"
                                rules={[{ required: true,message: 'Required',},]}
                            >
                                <Select onChange={stipendTypeHandler} >
                                <Option value="paid">Paid</Option>
                                <Option value="unpaid">Unpaid</Option>
                                <Option value="negotiable">Negotiable</Option>
                                </Select>
                            </Form.Item>
                                </div>
                                { stipendType === "negotiable" ? 
                                    <Fragment>
                                    <div style={{marginLeft: "2rem"}}>
                                        <h2>Minimun</h2>
                                        <Form.Item name="min" rules={[{required: true, message: 'Required'}]}>
                                            <InputNumber style={{width: "6rem"}} placeholder="" />
                                        </Form.Item>
                                    </div>
                                    <div style={{marginLeft: "1.25rem"}}>
                                        <h2>Maximum</h2>
                                        <Form.Item name="max" rules={[{required: true, message: 'Required'}]}>
                                            <InputNumber style={{width: "6rem"}} placeholder="" />
                                        </Form.Item>
                                    </div>
                                    </Fragment>
                                : stipendType === "paid" ?
                                <div style={{marginLeft: "4rem"}}>
                                    <h2>Amount</h2>
                                    <Form.Item name="stipend" rules={[{required: true, message: 'Required'}]}>
                                        <InputNumber style={{width: "11.2rem"}} placeholder="type amount" />
                                    </Form.Item>
                                </div> : null }
                            </div>
                            <div>
                                <h2>Does this Internship come with a Pre Placement Offer?</h2>
                                <Form.Item name="isPPO"  rules={[{required: true, message: 'Required'},]}>
                                    <Radio.Group>
                                    <Radio.Button style={{width: "9.25rem", fontSize:"1rem"}}  value="yes">Yes</Radio.Button>
                                    <Radio.Button style={{width: "9.25rem", fontSize:"1rem"}} value="no">No</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                            <div>
                                <h2>Will you offer Certificate of Internship?</h2>
                                <Form.Item name="isCertificate"  rules={[{required: true, message: 'Required',},]}>
                                    <Radio.Group>
                                    <Radio.Button style={{width: "9.25rem", fontSize:"1rem"}}  value="yes">Yes</Radio.Button>
                                    <Radio.Button style={{width: "9.25rem", fontSize:"1rem"}} value="no">No</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                        </div>
                        <div>
                        <h2>Additional Benefits</h2>
                                <Form.List  name="additional-benefits">
                                    
                                    {(fields, { add, remove }) => {
                                    /**
                                     * `fields` internal fill with `name`, `key`, `fieldKey` props.
                                     * You can extends this into sub field to support multiple dynamic fields.
                                     */
                                    return (
                                        <section className="additional-benefits">
                                        {fields.map((field, index) => (
                                            <Fragment>
                                            <div style={{ display: "block", width: "100%" }}>
                                                <div style={{ display: "flex", width: "100%" }}>
                                                    <Form.Item
                                                    name={[field.name, "additional-benefits-1"]}
                                                    fieldKey={[field.fieldKey, "additional-benefits-1"]}
                                                    rules={rules}
                                                    >
                                                    <Input  prefix={ index + 1 + "." } placeholder={''} />
                                                    
                                                    </Form.Item>
                                                    {index > 0 ? <MinusCircleOutlined
                                                    className="dynamic-delete-button"
                                                    onClick={() => {
                                                        remove(field.name);
                                                    }}
                                                    /> : null}
                                                </div>
                
                                                {/* <Form.Item
                                                    name={[field.name, "additional-benefits-2"]}
                                                    fieldKey={[field.fieldKey, "additional-benefits-2"]}
                                                    rules={rules}
                                                    label="Answer Type:"
                                                >
                                                    <Radio.Group >
                                                        <Radio value="1">Long</Radio>
                                                        <Radio value="0">Short</Radio>
                                                    </Radio.Group>
                                                </Form.Item> */}
                                                
                                            </div>
                                            </Fragment>
                                        ))}
                                        <Form.Item>
                                            <div className="add-btn add-btn-additional-benefits" onClick={() => {add()}}>+Add Responsibilities</div>
                                        </Form.Item>
                                        </section>
                                    );
                                    }}
                                
                                </Form.List>
                        </div>
                </div>
                <Form.Item style={{textAlign:"center"}} >
                    <Button onClick={() => props.back(2)}  className="go-back-btn" >
                        <LeftOutlined /> Go Back 
                    </Button>
                    <Button  className="continue-btn" type="primary" htmlType="submit">
                        Continue <RightOutlined />
                    </Button>
                    
                </Form.Item>
                </Form>
        </div>
    )
}


