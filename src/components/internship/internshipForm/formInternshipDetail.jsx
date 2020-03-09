import React, { useState, useEffect } from "react";
import { Radio, Input, Checkbox, Button, Select, DatePicker } from "antd";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";
// import Internship from '../internship/internship'

const { Option } = Select;

export default function FormInternshipDetail({ handleContinue }) {
  const formData = JSON.parse(localStorage.getItem("internshipFormData"));
  const myDuration = !!formData.duration
    ? formData.duration.split("-")
    : ["", ""];

  const [myFormData, setMyFormData] = useState(formData);

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      designation: formData.designation,
      internshipType: formData.internshipType,
      // isLocationAllIndia: false,
      location: formData.location,
      noOfPosition: formData.noOfPosition,

      internshipDuration: myDuration[0],
      weekOrMonth: myDuration[1],

      startingOfInternship: !!formData.startingOfInternship
        ? moment(formData.startingOfInternship, "DD-MMM-YYYY")
        : null,
      applyBefore: !!formData.applyBefore
        ? moment(formData.applyBefore, "DD-MMM-YYYY")
        : null
    }
  });

  //! --------------------------- input data testing --------------------------- */
  const designation = watch("designation");
  console.log("designation", designation);
  console.log("");

  console.log("otherProfile", watch("otherProfile"));
  console.log("");

  const internshipType = watch("internshipType");
  console.log("internshipType", internshipType);
  console.log("");

  const isLocationAllIndia =
    ("isLocationAllIndia", watch("isLocationAllIndia"));
  console.log("isLocationAllIndia", watch("isLocationAllIndia"));
  console.log("");

  const myLocation = watch("location");
  console.log("Location", myLocation);
  console.log("");

  const noOfPosition = watch("noOfPosition");
  console.log("number Of Opening", noOfPosition);
  console.log("");

  const duration = `${watch("internshipDuration")}-${watch("weekOrMonth")}`;
  console.log("internshipDuration", duration);
  console.log("");
  console.log("weekOrMonth", watch("weekOrMonth"));
  console.log("");

  const startDate = watch("startingOfInternship");
  const startingOfInternship = moment(startDate).format("DD MMM YYYY");
  console.log("startingOfInternship", startingOfInternship);
  console.log("");

  console.log("startingOfInternship", moment(startDate).format("DD MMM YYYY"));
  console.log("");

  const endDate = watch("applyBefore");
  const applyBefore = moment(endDate).format("DD MMM YYYY");
  console.log("applyBefore", applyBefore);
  console.log("");
  //! -------------------------------------------------------------------------- */

  useEffect(() => {
    const location = isLocationAllIndia ? "All India" : myLocation;
    localStorage.setItem(
      "internshipFormData",
      JSON.stringify({
        ...myFormData,
        designation,
        internshipType,
        location,
        noOfPosition,
        duration,
        startingOfInternship,
        applyBefore
      })
    );
  }, [
    designation,
    internshipType,
    myLocation,
    noOfPosition,
    duration,
    startingOfInternship,
    myFormData,
    isLocationAllIndia,
    applyBefore
  ]);

  const internshipStartDisabledDate = current => {
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
              {/* //TODO  create logic on the basis of other*/}
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
          name="designation"
          control={control}
        />
      </div>
      {designation === "other" && (
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
                <Radio value="In Office">Regular (In Office)</Radio>
                <Radio value="work from home">Work From Home</Radio>
              </div>
            </Radio.Group>
          }
          name="internshipType"
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
            name="location"
            control={control}
          />
        </div>
      </div>

      <div className="opening-duration-container">
        <div className="number-of-opening-container">
          <h2 className="opening-container__h2">Number of openings</h2>
          {/*//TODO  add array of input*/}
          <Controller
            as={<Input className="opening-container__input"></Input>}
            name="noOfPosition"
            control={control}
          />
        </div>
        <div className="internship-duration-container">
          <h2 className="internship-duration__h2">Internship Duration</h2>
          <div className="internship-duration-input-container">
            <Controller
              as={<Input className="internship-duration__input1"></Input>}
              name="internshipDuration"
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
              name="weekOrMonth"
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
                format="DD-MMM-YYYY"
                disabledDate={internshipStartDisabledDate}
              />
            }
            name="startingOfInternship"
            control={control}
          />
        </div>
        <div className="internship-duration-container">
          <h2 className="internship-duration__h2">Last Date to Apply</h2>
          <div className="internship-duration-input-container">
            <Controller
              as={
                <DatePicker
                  format="DD-MMM-YYYY"
                  placeholder="Start Date"
                  // disabledDate={}
                />
              }
              name="applyBefore"
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
