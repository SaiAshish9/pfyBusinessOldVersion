import React, { useState, useEffect } from "react";
import { Input, Select, Icon, Button } from "antd";
import { useForm, Controller } from "react-hook-form";
import { arrayValidation } from "../../validation/validation";

const { Option } = Select;
export default function FormResponsibility({ handleContinue }) {
  const formData = JSON.parse(localStorage.getItem("internshipFormData"));
  const internRes = arrayValidation(formData.responsibilities)
    ? formData.responsibilities
    : [];
  const internReq = arrayValidation(formData.otherRequirements)
    ? formData.otherRequirements
    : [];
  const [skillRequired, setSkillRequired] = useState([]);
  const [responsibilities, setResponsibilities] = useState(internRes);
  const [otherRequirements, setOtherRequirements] = useState(internReq);

  const responsibility = "responsibility";
  const requirement = "requirement";

  const handleSkillRequired = value => {
    const skill = { skillName: value };
    setSkillRequired([...skillRequired, skill]);
  };

  console.log(skillRequired);

  const handleAddResponsibility = category => {
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
    localStorage.setItem(
      "internshipFormData",
      JSON.stringify({
        ...formData,
        skillRequired,
        responsibilities,
        otherRequirements
      })
    );
  }, [skillRequired, responsibilities, otherRequirements, formData]);

  return (
    <div className="responsibility-container">
      <div className="intern-skill-container">
        <h2 className="intern-skill__h2">Skills Required</h2>
          {/*//TODO  add array of select skill*/}

        <Select
          value={arrayValidation(skillRequired) && skillRequired[0].skillName}
          // defaultValue={
          //   arrayValidation(formData.skillRequired) &&
          //   formData.skillRequired.skillName
          // }
          onChange={handleSkillRequired}
          placeholder="Select Skills"
          style={{ width: "100%" }}
          className="intern-skill__select"
        >
          <Option value="React">React</Option>
          <Option value="Python">Python</Option>
          <Option value="JavaScript">JavaScript</Option>
          <Option value="Node JS">Node JS</Option>
          <Option value="C++">C++</Option>
        </Select>
      </div>

      <div className="intern-res-container">
        <h2 className="intern-res__h2">Intern Responsibilities</h2>
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
                onChange={e => handleAddQuestion(e, index, responsibility)}
              />
              <Icon
                className=""
                type="delete"
                onClick={() => handleDeleteInput(index, responsibility)}
              ></Icon>
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
        <h2 className="intern-requirement__h2">Requirements From Interns</h2>

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
                onChange={e => handleAddQuestion(e, index, requirement)}
              />
              <Icon
                className=""
                type="delete"
                onClick={() => handleDeleteInput(index, requirement)}
              ></Icon>
            </div>
          ))}
        <span
          className="intern-requirement__span"
          onClick={() => handleAddResponsibility(requirement)}
        >
          +Add Requirements
        </span>
      </div>

      <div className="submit-button-container">
        <Button
          htmlType="submit"
          className="submit-button"
          onClick={() => handleContinue(2)}
        >
          CONTINUE
        </Button>
      </div>
    </div>
  );
}
