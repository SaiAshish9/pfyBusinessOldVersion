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
  const thisIsAllIndia =
    formData.location && formData.location.includes("All India");

  const [myFormData, setMyFormData] = useState(formData);

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      internshipType: formData.internshipType,
      isLocationAllIndia: thisIsAllIndia,
      location: thisIsAllIndia ? undefined : formData.location,
      noOfPosition: formData.noOfPosition,
      internshipDuration: myDuration[0],
      weekOrMonth: myDuration[1],
      startingOfInternship: !!formData.startingOfInternship
        ? moment(formData.startingOfInternship, "DD-MMM-YYYY")
        : null,
      applyBefore: !!formData.applyBefore
        ? moment(formData.applyBefore, "DD-MMM-YYYY")
        : null,
    },
  });

  //! --------------------------- input data testing --------------------------- */
  //#region
  const internshipCategory = watch("internshipCategory");
  console.log("internshipCategory", internshipCategory);
  console.log("");

  const designation = watch("designation");
  console.log("designation", designation);
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
  //#endregion
  //! -------------------------------------------------------------------------- */

  useEffect(() => {
    const location = isLocationAllIndia ? ["All India"] : myLocation;

    // const isInternCategory = internCategory.forEach((internRole, index) => {
    //   const myInternRole = internshipCategory === "other" ? false : internRole;
    //   console.log("myInternRole", myInternRole);
    //   if (internCategory[index] === myInternRole) {
    //     console.log("is Running");
    //     return true;
    //   } else {
    //     console.log("is running other");
    //     return false;
    //   }
    // });

    const myDesignation = internshipCategory === "other" ? designation : null;
    const myInternshipCategory =
      internshipCategory !== "other" ? internshipCategory : designation;

    localStorage.setItem(
      "internshipFormData",
      JSON.stringify({
        ...myFormData,
        internshipCategory: myInternshipCategory,
        designation: myDesignation,

        internshipType,
        location,
        noOfPosition,
        duration,
        startingOfInternship,
        applyBefore,
      })
    );
  }, [
    internshipType,
    myLocation,
    noOfPosition,
    duration,
    startingOfInternship,
    myFormData,
    isLocationAllIndia,
    applyBefore,
    internshipCategory,
    designation,
  ]);

  const myCity = ["Delhi", "NCR", "Bangalore", "Mumbai"];

  const cityLocation = myCity.map((cities, index) => {
    return (
      <Option key={index} value={cities}>
        {cities}
      </Option>
    );
  });

  const internshipStartDisabledDate = (current) => {
    return current && current < moment().endOf("day");
  };

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          as={
            <Radio.Group>
              <h3>Select Primary Profile</h3>
              {/* //TODO  create logic on the basis of other*/}
              {/* <div className="radio-button-container"> */}
              <div className="radio-button-container">
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
                <Radio value="Digital Marketing">Digital Marketing</Radio>
                <Radio value="Campus Ambassador">Campus Ambassador</Radio>
                <Radio value="Mobile App Development">
                  Mobile App Development
                </Radio>
                <Radio value="Law/Legal">Law/Legal</Radio>
                <Radio value="Operations">Operations</Radio>
                <Radio value="Content Writing">Content Writing</Radio>
                <Radio value="other">Other</Radio>
              </div>
              {/* </div> */}
            </Radio.Group>
          }
          name="internshipCategory"
          control={control}
        />
      </div>
      {(internshipCategory === "other" || null) && (
        <div className="profile-input-container">
          <Controller
            as={<Input placeholder="Enter Primary Profile" />}
            name="designation"
            control={control}
          />
        </div>
      )}
      <div className="typeOfInternship-container">
        <Controller
          as={
            <Radio.Group>
              <div className="radio-button-container2">
                <h3>Select type of internship</h3>
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
        <h3>Internship Location</h3>
        <div className="internshipLocation-container">
          <Controller
            as={<Checkbox>All India</Checkbox>}
            name="isLocationAllIndia"
            control={control}
            className="internshipLocation__checkbox"
          />
          <h3>OR</h3>
          {
            <Controller
              as={
                <Select
                  mode="tags"
                  // style={{ width: "100%" }}
                  placeholder="Please select"
                  disabled={isLocationAllIndia}
                >
                  {cityLocation}
                </Select>
              }
              name="location"
              control={control}
              className="internshipLocation__select"
            />
          }
        </div>
      </div>

      <div className="opening-duration-container">
        <div className="number-of-opening-container">
          <h3 className="opening-container__h2">Number of openings</h3>
          {/*//TODO  add array of input*/}
          <Controller
            as={<Input className="opening-container__input"></Input>}
            name="noOfPosition"
            control={control}
          />
        </div>
        <div className="internship-duration-container">
          <h3 className="internship-duration__h2">Internship Duration</h3>
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
          <h3 className="opening-container__h2">Internship Start Date</h3>
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
          <h3 className="internship-duration__h2">Last Date to Apply</h3>
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
    </form>
  );
}
