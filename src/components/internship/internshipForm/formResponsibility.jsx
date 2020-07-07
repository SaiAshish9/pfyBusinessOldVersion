import React, { useState, useEffect } from "react";
import { Input, Select, Icon, Button } from "antd";
import { useForm, Controller } from "react-hook-form";
import { arrayValidation } from "../../validation/validation";
import { DeleteOutlined, DeleteOutline } from "@ant-design/icons";

const { Option } = Select;
export default function FormResponsibility({ handleContinue }) {
  const formData = JSON.parse(localStorage.getItem("internshipFormData"));

  const internRes =
    formData && arrayValidation(formData.responsibilities)
      ? formData.responsibilities
      : [];
  const internReq =
    formData && arrayValidation(formData.otherRequirements)
      ? formData.otherRequirements
      : [];

  const internSkill =
    formData &&
    arrayValidation(formData.skillRequired) &&
    formData.skillRequired.map((userSkill) => {
      return userSkill.skillName;
    });

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      skillRequired: internSkill,
    },
  });
  const mySkillRequired = watch("skillRequired");
  const [responsibilities, setResponsibilities] = useState(internRes);
  const [otherRequirements, setOtherRequirements] = useState(internReq);

  const responsibility = "responsibility";
  const requirement = "requirement";

  const handleAddResponsibility = (category) => {
    if (category === "responsibility") {
      setResponsibilities([...responsibilities, ""]);
    } else {
      setOtherRequirements([...otherRequirements, ""]);
    }
  };

  const handleDeleteInput = (index, category) => {
    if (category === "responsibility") {
      let question = [...responsibilities];
      question.splice(index, 1);
      setResponsibilities(question);
    } else {
      let question = [...otherRequirements];
      question.splice(index, 1);
      setOtherRequirements(question);
    }
  };

  const handleAddQuestion = (e, index, category) => {
    console.log(e.target.value);
    if (category === "responsibility") {
      let questions = [...responsibilities];
      questions[index] = e.target.value;
      setResponsibilities(questions);
    } else {
      let questions = [...otherRequirements];
      questions[index] = e.target.value;
      setOtherRequirements(questions);
    }
  };

  useEffect(() => {
    const skillRequired =
      arrayValidation(mySkillRequired) &&
      mySkillRequired.map((userSkill) => {
        return { skillName: userSkill };
      });

    localStorage.setItem(
      "internshipFormData",
      JSON.stringify({
        ...formData,
        skillRequired,
        responsibilities,
        otherRequirements,
      })
    );
  }, [responsibilities, otherRequirements, formData, mySkillRequired]);

  const skills = [
    "ReactJs",
    "Javascript",
    "Java",
    "Statistics",
    "Data Science",
  ];
  const mySkill = skills.map((skill, index) => (
    <Option key={index} value={skill}>
      {skill}
    </Option>
  ));

  return (
    <div className="responsibility-container">
      <div className="intern-skill-container">
        <h3 className="intern-skill__h3">Skills Required</h3>
        {/*//TODO  add array of select skill*/}

        <Controller
          as={
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Please select"
            >
              {mySkill}
            </Select>
          }
          name="skillRequired"
          control={control}
          className="intern-skill__select"
        />
      </div>

      <div className="intern-res-container">
        <h3 className="intern-res__h3">Intern Responsibilities</h3>
        {responsibilities.length > 0 &&
          responsibilities.map((addQuestion, index) => (
            <div
              className="intern-res-input-container"
              key={index}
              style={{ display: "flex" }}
            >
              <Input
                addonBefore={index + 1}
                className="intern-res__input"
                value={addQuestion}
                onChange={(e) => handleAddQuestion(e, index, responsibility)}
              />
              {/* <Icon
                className=""
                type="delete"
                onClick={() => handleDeleteInput(index, responsibility)}
              ></Icon> */}
              <DeleteOutlined
                onClick={() => handleDeleteInput(index, responsibility)}
              />
            </div>
          ))}
        <span
          className="add-responsibility"
          onClick={() => handleAddResponsibility(responsibility)}
        >
          +Add Question
        </span>
      </div>

      <div className="intern-requirement-container">
        <h3 className="intern-requirement__h3">Requirements From Interns</h3>

        {otherRequirements.length > 0 &&
          otherRequirements.map((addQuestion, index) => (
            <div
              className="intern-requirement-input-container"
              key={index}
              style={{ display: "flex" }}
            >
              <Input
                addonBefore={index + 1}
                className="intern-requirement__input"
                value={addQuestion}
                onChange={(e) => handleAddQuestion(e, index, requirement)}
              />
              {/* <Icon
                className=""
                type="delete"
                onClick={() => handleDeleteInput(index, requirement)}
              ></Icon> */}
              <DeleteOutlined
                onClick={() => handleDeleteInput(index, requirement)}
              />
            </div>
          ))}
        <span
          className="intern-requirement__span"
          onClick={() => handleAddResponsibility(requirement)}
        >
          +Add Requirements
        </span>
      </div>
    </div>
  );
}
