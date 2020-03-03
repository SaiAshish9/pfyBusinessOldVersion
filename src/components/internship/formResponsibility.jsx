import React, { useState } from "react";
import { Input, Select, Icon } from "antd";

const { Option } = Select;
export default function FormResponsibility() {
  const [addResponsibility, setAddResponsibility] = useState([]);
  const [addRequirement, setAddRequirement] = useState([]);

  const handleAddResponsibility = category => {
    if (category === "responsibility") {
      setAddResponsibility([...addResponsibility, ""]);
    } else {
      setAddRequirement([...addRequirement, ""]);
    }
  };

  const handleDeleteInput = (index, category) => {
    if (category === "responsibility") {
      let question = [...addResponsibility];
      question.splice(index, 1);
      setAddResponsibility(question);
    } else {
      let question = [...addRequirement];
      question.splice(index, 1);
      setAddRequirement(question);
    }
  };

  const handleAddQuestion = (e, index, category) => {
    console.log(e.target.value);
    if (category === "responsibility") {
      let questions = [...addResponsibility];
      questions[index] = e.target.value;
      setAddResponsibility(questions);
    } else {
      let questions = [...addRequirement];
      questions[index] = e.target.value;
      setAddRequirement(questions);
    }
  };

  const responsibility = "responsibility";
  const requirement = "requirement";

  return (
    <div className="responsibility-container">
      <div className="intern-skill-container">
        <h2 className="intern-skill__h2">Skills Required</h2>
        <Select
          className="intern-skill__select"
          defaultValue="react"
          style={{ width: "100%" }}
        >
          <Option value="react">react</Option>
        </Select>
      </div>

      <div className="intern-res-container">
        <h2 className="intern-res__h2">Intern Responsibilities</h2>
        {addResponsibility.length > 0 &&
          addResponsibility.map((addQuestion, index) => (
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

        {addRequirement.length > 0 &&
          addRequirement.map((addQuestion, index) => (
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
    </div>
  );
}
