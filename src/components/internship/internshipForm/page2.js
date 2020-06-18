import React, { useState, useEffect, Fragment } from "react";
import {
  Modal,
  Button,
  Form,
  Radio,
  InputNumber,
  Select,
  DatePicker,
  Input,
} from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";

const { Option } = Select;

export default function Page2(props) {
  const initVal = props.initVal2;

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    props.isSuccess2();
    props.data2(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const rules = [{ required: true, message: "Required" }];

  // const DynamicFieldSet = () => {
  // const onFinish = values => {
  //     console.log("Received values of form:", values);
  // };

  useEffect(() => {
    if (!initVal) {
      document.querySelector(".add-btn-responsibliliy").click();
      document.querySelector(".add-btn-requirement").click();
      document.querySelector(".add-btn-interview-ques").click();
    }
    console.log("init Val from parent ", initVal);
  }, []);

  return (
    <div>
      <Form
        className="page2"
        name="page2"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          ...initVal,
        }}
      >
        <div className="inline-form">
          <div>
            <h2>Intern Responsibilities</h2>
            <Form.List name="responsibilities">
              {(fields, { add, remove }) => {
                /**
                 * `fields` internal fill with `name`, `key`, `fieldKey` props.
                 * You can extends this into sub field to support multiple dynamic fields.
                 */
                return (
                  <section className="intern-responsiponsibiliy">
                    {fields.map((field, index) => (
                      <Fragment key={index}>
                        <div style={{ display: "flex", width: "100%" }}>
                          <Form.Item
                            name={[field.name]}
                            fieldKey={[field.fieldKey, "intern-responsibility"]}
                            rules={rules}
                          >
                            <Input prefix={index + 1 + "."} placeholder={""} />
                          </Form.Item>
                          {index > 0 ? (
                            <MinusCircleOutlined
                              className="dynamic-delete-button"
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          ) : null}
                        </div>
                      </Fragment>
                    ))}
                    <Form.Item>
                      <div
                        className="add-btn add-btn-responsibliliy"
                        onClick={() => {
                          add();
                        }}
                      >
                        +Add Responsibilities
                      </div>
                    </Form.Item>
                  </section>
                );
              }}
            </Form.List>
            <h2>Requirements From Interns</h2>
            <Form.List name="otherRequirements">
              {(fields, { add, remove }) => {
                /**
                 * `fields` internal fill with `name`, `key`, `fieldKey` props.
                 * You can extends this into sub field to support multiple dynamic fields.
                 */
                return (
                  <section className="requirements-from-interns">
                    {fields.map((field, index) => (
                      <Fragment>
                        <div style={{ display: "flex", width: "100%" }}>
                          <Form.Item
                            name={[field.name]}
                            fieldKey={[
                              field.fieldKey,
                              "requirements-from-interns",
                            ]}
                            rules={rules}
                          >
                            <Input prefix={index + 1 + "."} placeholder={""} />
                          </Form.Item>
                          {index > 0 ? (
                            <MinusCircleOutlined
                              className="dynamic-delete-button"
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          ) : null}
                        </div>
                      </Fragment>
                    ))}
                    <Form.Item>
                      <div
                        className="add-btn add-btn-requirement"
                        onClick={() => {
                          add();
                        }}
                      >
                        +Add Requirements
                      </div>
                    </Form.Item>
                  </section>
                );
              }}
            </Form.List>
            <h2>Skills</h2>
            <Form.Item
              name="skillsRequired"
              // label="Type Cities"
              rules={[{ required: true, message: "Required", type: "array" }]}
            >
              <Select
                style={{ width: "25rem" }}
                mode="multiple"
                placeholder="Type skills"
              >
                <Option value="business-development">
                  Business Development (Sales)
                </Option>
                <Option value="campus-ambassador">Campus Ambassador</Option>
                <Option value="operations">Operations</Option>
                <Option value="human-resources">Human Resources</Option>
                <Option value="digital-marketing">Digital Marketing</Option>
                <Option value="social-media-marketing">
                  Social Media Marketing
                </Option>
                <Option value="marketing">Marketing</Option>
              </Select>
            </Form.Item>
          </div>
          <div>
            <h2>Interview Questions</h2>
            <Form.List name="questions">
              {(fields, { add, remove }) => {
                /**
                 * `fields` internal fill with `name`, `key`, `fieldKey` props.
                 * You can extends this into sub field to support multiple dynamic fields.
                 */
                return (
                  <section className="questions">
                    {fields.map((field, index) => (
                      <Fragment>
                        <div style={{ display: "block", width: "100%" }}>
                          <div style={{ display: "flex", width: "100%" }}>
                          
                          <Form.Item
                            name={[field.name, "question"]}
                            fieldKey={[field.fieldKey, "question"]}
                            rules={rules}
                          >
                            <Input prefix={index + 1 + "."} placeholder={""} />
                          </Form.Item>
                          {index > 0 ? (
                            <MinusCircleOutlined
                              className="dynamic-delete-button"
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          ) : null}
                          </div>
                          <Form.Item
                              name={[field.name, "type"]}
                              fieldKey={[field.fieldKey, "type"]}
                              rules={rules}
                              label="Answer Type: "
                          >
                              <Radio.Group >
                                  <Radio value="1">Long</Radio>
                                  <Radio value="0">Short</Radio>
                              </Radio.Group>
                          </Form.Item>
                        </div>
                      </Fragment>
                    ))}
                    <Form.Item>
                      <div
                        style={{marginTop: "-3.2rem"}}
                        className="add-btn add-btn-interview-ques"
                        onClick={() => {
                          add();
                        }}
                      >
                        +Add Question
                      </div>
                    </Form.Item>
                  </section>
                );
              }}
            </Form.List>
          </div>
        </div>

        <Form.Item style={{ textAlign: "center" }}>
          <Button onClick={() => props.back(1)} className="go-back-btn">
            <LeftOutlined /> Go Back
          </Button>
          <Button className="continue-btn" type="primary" htmlType="submit">
            Continue <RightOutlined />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
