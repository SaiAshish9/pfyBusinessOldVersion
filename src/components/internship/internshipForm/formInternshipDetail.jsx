import React, { useState } from "react";
import { Radio, Input, Checkbox, Button, Select, DatePicker } from "antd";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";

const { Option } = Select;

export default function FormInternshipDetail({ handleContinue }) {
  const [internshipProfile, setInternshipProfile] = useState(0);
  const [typeOfInternship, setTypeOfInternship] = useState(0);

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      primaryProfile: "",
      isLocationAllIndia: false
    }
  });

//! --------------------------- input data testing --------------------------- */
  const primaryProfile = watch("primaryProfile");
  console.log("primaryProfile", primaryProfile);
  console.log("");

  console.log("otherProfile", watch("otherProfile"));
  console.log("");

  console.log("typeOfInternship", watch("typeOfInternship"));
  console.log("");

  const isLocationAllIndia =
    ("isLocationAllIndia", watch("isLocationAllIndia"));
  console.log("isLocationAllIndia", watch("isLocationAllIndia"));
  console.log("");

  console.log(Location, watch("internshipLocation"));
  console.log("");
  
  console.log("number Of Opening", watch("numberOfOpening"));
//! --------------------------- -------------------- --------------------------- */



  const startDate = watch("internshipStartDate");
  console.log(moment(startDate).format("L"));

  const endDate = watch("internshipEndDate");
  console.log(moment(endDate).format("L"));

  const internshipStartDisabledDate = current => {
    return current && current < moment().endOf("day");
  };

  const endDateToApplyDisabledDate = current => {
    return current && current < moment().endOf("day");
  };

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          as={
            <Radio.Group>
              <h2>Select Primary Profile</h2>
              <div className="radio-button-container1">
                <div className="radio-button-subContainer1">
                  <Radio value="Business Development(sales)">
                    Business Development(sales)
                  </Radio>
                  <Radio value="Graphic Design">Graphic Design</Radio>
                  <Radio value="Social Media Marketing">
                    Social Media Marketing
                  </Radio>
                  <Radio value="Web Development">Web Development</Radio>
                  <Radio value="Marketing">Marketing</Radio>
                  <Radio value="Human Resources">Human Resources</Radio>
                  <Radio value="other">Other</Radio>
                </div>
                <div className="radio-button-subContainer2">
                  <Radio value="Digital Marketing">Digital Marketing</Radio>
                  <Radio value="Campus Ambassador">Campus Ambassador</Radio>
                  <Radio value="Mobile App Development">
                    Mobile App Development
                  </Radio>
                  <Radio value="Law/Legal">Law/Legal</Radio>
                  <Radio value="Operations">Operations</Radio>
                  <Radio value="Content Writing">Content Writing</Radio>
                </div>
              </div>
            </Radio.Group>
          }
          name="primaryProfile"
          control={control}
        />
      </div>
      {primaryProfile === "other" && (
        <div className="profile-input-container">
          <Controller
            as={<Input placeholder="Enter Primary Profile" />}
            name="otherProfile"
            control={control}
          />
        </div>
      )}
      <div className="typeOfInternship-container">
        <Controller
          as={
            <Radio.Group>
              <div className="radio-button-container2">
                <h2>Select type of internship</h2>
                <Radio value={1}>Regular (In Office)</Radio>
                <Radio value={2}>Work From Home</Radio>
              </div>
            </Radio.Group>
          }
          name="typeOfInternship"
          control={control}
        />
      </div>

      <div>
        <h2>Internship Location</h2>
        <div
          className="internshipLocation-container"
          style={{
            display: "flex"
          }}
        >
          <Controller
            as={<Checkbox>All India</Checkbox>}
            name="isLocationAllIndia"
            control={control}
          />
          <h3>OR</h3>
          <Controller
            as={
              <Input
                placeholder="please enter the Location"
                disabled={isLocationAllIndia}
              />
            }
            name="internshipLocation"
            control={control}
          />
        </div>
      </div>

      <div className="opening-duration-container">
        <div className="number-of-opening-container">
          <h2 className="opening-container__h2">Number of openings</h2>
          <Controller
            as={<Input className="opening-container__input"></Input>}
            name="numberOfOpening"
            control={control}
          />
        </div>
        <div className="internship-duration-container">
          <h2 className="internship-duration__h2">Internship Duration</h2>
          <div className="internship-duration-input-container">
            <Controller
              as={<Input className="internship-duration__input1"></Input>}
              name="internship-duration"
              control={control}
            />
            <Controller
              as={
                <Select
                  defaultValue="month"
                  className="internship-duration__input2"
                >
                  <Option value="month">Month</Option>
                  <Option value="week">Week</Option>
                </Select>
              }
              name="week-or-month"
              control={control}
            />
          </div>
        </div>
      </div>

      <div className="start-last-container">
        <div className="number-of-opening-container">
          <h2 className="opening-container__h2">Internship Start Date</h2>
          <Controller
            as={
              <DatePicker
                format="YYYY-MM-DD"
                disabledDate={internshipStartDisabledDate}
              />
            }
            name="internshipStartDate"
            control={control}
          />
        </div>
        <div className="internship-duration-container">
          <h2 className="internship-duration__h2">Last Date to Apply</h2>
          <div className="internship-duration-input-container">
            <Controller
              as={
                <DatePicker
                  format="YYYY-MM-DD"
                  disabledDate={endDateToApplyDisabledDate}
                />
              }
              name="internshipEndDate"
              control={control}
            />
          </div>
        </div>
      </div>

      <div className="submit-button-container">
        <Button
          htmlType="submit"
          className="submit-button"
          onClick={() => handleContinue(1)}
        >
          CONTINUE
        </Button>
      </div>
    </form>
  );
}
