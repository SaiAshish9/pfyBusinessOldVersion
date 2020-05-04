import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CloseOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Modal, Button, Input, Select, DatePicker } from "antd";
import TextArea from "antd/lib/input/TextArea";

const css = "font-size:30px";
export default function CampaignCustom() {
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

  return (
    <div className="customCampaign-main-block">
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
              <Select className="select-option-select"></Select>

              <p className="lastDateToApply-label">Last Date to Apply</p>
              <DatePicker
                className="lastDateToApply-datePicker"
                format="DD-MMM-YYYY"
                placeholder="last date to apply"
              />

              <p className="gender-label">Gender</p>
              <Select className="gender-select">
                <option>Male</option>
                <option>Female</option>
                <option>Both</option>
              </Select>

              <p className="chargesPerWorker-label">Charges Per Worker</p>
              <Input className="chargesPerWorker-input"></Input>

              <p className="numOfWorker-label">No Of Workers</p>
              <Input className="numOfWorker-input"></Input>
            </div>

            <div className="customCampaign-block-two">
              <p className="cities-label">Cities</p>
              <Select className="cities-select"></Select>

              <p className="taskDescription-label">Task Description</p>
              <TextArea className="taskDescription-textarea"></TextArea>

              <p className="interviewQues-label">
                Interview Question (optional)
              </p>
              <Input className="interviewQues-input"></Input>
              <Button
                className="customCampaign-next-button"
                onClick={handleCustomCampaignNext}
              >
                NEXT
              </Button>
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
                  Our team will approve your campaign or will get in touch with
                  you if needed.
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
                <h5 className="total-gig-workers-header">Total Gig Workers</h5>
                <h5 className="task-fees-header">Task Fees</h5>
                <h5 className="amount-before-tax-header">Amount Before Tax</h5>
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
    </div>
  );
}
