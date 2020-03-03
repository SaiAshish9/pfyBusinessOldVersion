import React, { useState } from "react";
import { Radio, Input, Checkbox, Button, Select, DatePicker } from "antd";
import moment from "moment";

const { Option } = Select;

export default function FormInternshipDetail() {
  const [internshipProfile, setInternshipProfile] = useState(0);
  const [typeOfInternship, setTypeOfInternship] = useState(0);

  const handleRadioButton1 = e => {
    console.log("radio checked", e.target.value);
    setInternshipProfile(e.target.value);
  };

  const handleRadioButton2 = e => {
    console.log("radio checked", e.target.value);
    setTypeOfInternship(e.target.value);
  };

  const internshipStartDisabledDate = current => {
    return current && current < moment().endOf("day");
  };

  const endDateToApplyDisabledDate = current => {
    return current && current < moment().endOf("day");
  };

  return (
    <div>
      <div>
        <Radio.Group onChange={handleRadioButton1} value={internshipProfile}>
          <h2>Select Primary Profile</h2>
          <div className="radio-button-container1">
            <div className="radio-button-subContainer1">
              <Radio value={1}>Business Development(sales)</Radio>
              <Radio value={2}>Graphic Design</Radio>
              <Radio value={3}>Social Media Marketing</Radio>
              <Radio value={4}>Web Development</Radio>
              <Radio value={5}>Marketing</Radio>
              <Radio value={6}>Human Resources</Radio>
              <Radio value={7}>Other</Radio>
            </div>
            <div className="radio-button-subContainer2">
              <Radio value={8}>Digital Marketing</Radio>
              <Radio value={9}>Campus Ambassador</Radio>
              <Radio value={10}>Mobile App Development</Radio>
              <Radio value={11}>Law/Legal</Radio>
              <Radio value={12}>Operations</Radio>
              <Radio value={13}>Content Writing</Radio>
            </div>
          </div>
        </Radio.Group>
      </div>
      <div className="profile-input-container">
        <Input placeholder="Enter Primary Profile" />
      </div>
      <div className="typeOfInternship-container">
        <Radio.Group onChange={handleRadioButton2} value={typeOfInternship}>
          <div className="radio-button-container2">
            <h2>Select type of internship</h2>
            <Radio value={1}>Regular (In Office)</Radio>
            <Radio value={2}>Work From Home</Radio>
          </div>
        </Radio.Group>
      </div>
      <div>
        <h2>Internship Location</h2>
        <div
          className="internshipLocation-container"
          style={{
            display: "flex"
          }}
        >
          <Checkbox>All India</Checkbox>
          <h3>OR</h3>
          <Input placeholder="please enter the Location" />
        </div>
      </div>

      <div className="opening-duration-container">
        <div className="number-of-opening-container">
          <h2 className="opening-container__h2">Number of openings</h2>
          <Input className="opening-container__input"></Input>
        </div>
        <div className="internship-duration-container">
          <h2 className="internship-duration__h2">Internship Duration</h2>
          <div className="internship-duration-input-container">
            <Input className="internship-duration__input1"></Input>
            <Select
              defaultValue="month"
              className="internship-duration__input2"
            >
              <Option value="month">Month</Option>
              <Option value="week">Week</Option>
            </Select>
          </div>
        </div>
      </div>

      <div className="start-last-container">
        <div className="number-of-opening-container">
          <h2 className="opening-container__h2">Internship Start Date</h2>
          <DatePicker
            format="YYYY-MM-DD"
            disabledDate={internshipStartDisabledDate}
          />
        </div>
        <div className="internship-duration-container">
          <h2 className="internship-duration__h2">Last Date to Apply</h2>
          <div className="internship-duration-input-container">
            <DatePicker
              format="YYYY-MM-DD"
              disabledDate={endDateToApplyDisabledDate}
            />
          </div>
        </div>
      </div>

      <div className="submit-button-container">
        <Button className="submit-button">CONTINUE</Button>
      </div>
    </div>
  );
}
