import {
  ArrowLeftOutlined,
  CloseOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState, Fragment, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const css = "font-size:30px";
const { Option } = Select;
export default function CampaignCustom() {
  const [form] = Form.useForm();

  const { campaignTitle } = useParams();
  const history = useHistory();
  console.log("history", history);
  console.log(campaignTitle);

  const [campaignStep, setCampaignStep] = useState(0);

  const handleCustomCampaignClose = () => {
    history.goBack();
  };

  const handleCustomCampaignNext = () => {
    setCampaignStep(campaignStep + 1);
  };

  const handleCampaignBack = () => {
    setCampaignStep(campaignStep - 1);
  };

  useEffect(() => {
    document.querySelector(".add-btn-interview-ques").click();
  }, []);

  const onFormSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className="customCampaign-main-block">
      <Form
        name="customCampaign"
        onFinish={onFormSubmit}
        form={form}
        className="customCampaign-form-main-block"
      >
        {campaignStep === 0 && (
          <>
            <CloseOutlined
              className="customCampaign-close-button"
              onClick={handleCustomCampaignClose}
            />
            <h1 className="campaignTitle-heading">{campaignTitle}</h1>
            <div className="stepOne-customCampaign-block">
              <div className="customCampaign-block-one">
                <p className="selectOption-label">Select an Option</p>
                <Form.Item name="option">
                  <Select className="select-option-select">
                    {[1, 2, 3, 4, 5, 6].map((option, index) => (
                      <Option key={index} value={option}>
                        {option}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <p className="lastDateToApply-label">Last Date to Apply</p>
                <Form.Item name="lastDate">
                  <DatePicker
                    className="lastDateToApply-datePicker"
                    format="DD-MMM-YYYY"
                    placeholder="last date to apply"
                  />
                </Form.Item>

                <p className="gender-label">Gender</p>
                <Form.Item name="gender">
                  <Select className="gender-select">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                  </Select>
                </Form.Item>

                <p className="chargesPerWorker-label">Charges Per Worker</p>
                <Form.Item name="charge">
                  <Input className="chargesPerWorker-input"></Input>
                </Form.Item>

                <p className="numOfWorker-label">No Of Workers</p>
                <Form.Item name="noOfWorker">
                  <Input className="numOfWorker-input"></Input>
                </Form.Item>
              </div>

              <div className="customCampaign-block-two">
                <p className="cities-label">Cities</p>
                <Form.Item name="city">
                  <Select className="cities-select">
                    {["Delhi", "Mumbai", "Kolkata", "Bangalore", "Pune"].map(
                      (city, index) => (
                        <Option value={city} key={index}>
                          {city}
                        </Option>
                      )
                    )}
                  </Select>
                </Form.Item>

                <p className="taskDescription-label">Task Description</p>
                <Form.Item name="taskDescription">
                  <TextArea className="taskDescription-textarea"></TextArea>
                </Form.Item>

                <p className="interviewQues-label">
                  Interview Question (optional)
                </p>
                <Form.List name="questions">
                  {(fields, { add, remove }) => (
                    <section className="interviewQues-ques-main-block">
                      {fields.map((field, index) => (
                        <div className="interviewQues-ques-block">
                          <Form.Item
                            key={index}
                            name={[field.name, "question"]}
                            fieldKey={[field.fieldKey, "question"]}
                            rules={[{ required: true, message: "Required" }]}
                          >
                            <Input
                              prefix={index + 1 + "."}
                              placeholder={""}
                              className="interviewQues-ques"
                            />
                          </Form.Item>
                          {index > 0 && (
                            <MinusCircleOutlined
                              className="ques-deleteIcon"
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          )}
                        </div>
                      ))}
                      <Form.Item>
                        <div
                          onClick={() => {
                            add();
                          }}
                          className="add-btn add-btn-interview-ques"
                        >
                          +Add Question
                        </div>
                      </Form.Item>
                    </section>
                  )}
                </Form.List>

                <Form.Item>
                  <Button
                    htmlType="submit"
                    className="customCampaign-next-button"
                    // onClick={handleCustomCampaignNext}
                  >
                    NEXT
                  </Button>
                </Form.Item>
              </div>
            </div>
          </>
        )}
        {campaignStep === 1 && (
          <>
            <ArrowLeftOutlined onClick={handleCampaignBack} />
            <div className="stepTwo-customCampaign-block">
              <div className="next-step-guide-block">
                <h2 className="next-step-guide-header">Next Steps</h2>
                <ul className="next-step-guide-list">
                  <li>
                    Our team will approve your campaign or will get in touch
                    with you if needed.
                  </li>
                  <li>
                    Once your gig is live on the app, gig workers will start
                    applying for it.
                  </li>
                  <li>Approve applications which match your requirement.</li>
                  <li>The gig workers will submit proof of work.</li>
                  <li>
                    Review performance of gig workers and approve work which
                    matches requirement.
                  </li>
                </ul>
              </div>

              <div className="campaign-payment-block">
                <h2 className="campaign-payment-header">Campaign Payment</h2>
                <div className="campaign-payment-summery-block">
                  <h5 className="total-gig-workers-header">
                    Total Gig Workers
                  </h5>
                  <h5 className="task-fees-header">Task Fees</h5>
                  <h5 className="amount-before-tax-header">
                    Amount Before Tax
                  </h5>
                  <h2 className="total-gig-workers">4000</h2>
                  <h2 className="multiple-symbol">x</h2>
                  <h2 className="task-fees">50</h2>
                  <h2 className="equalTo-symbol">=</h2>
                  <h2 className="amount-before-tax">200000</h2>
                  <h5 className="total-gst">+36000 (18%GST)</h5>
                </div>
                <h5 className="campaign-payment-gst-guide">
                  Note : GST invoice will be mailed to you after payment
                </h5>
                <div className="campaign-payment-button-block">
                  <Button className="campaign-payment-later">PAY LATER</Button>
                  <Button className="campaign-payment-now">PAY NOW</Button>
                </div>
              </div>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
