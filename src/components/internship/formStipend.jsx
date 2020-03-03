import React, { useState } from "react";
import { Select, Input, Radio, Button, Icon } from "antd";

const { Option } = Select;
export default function FormStipend() {
  const [stipendType, setStipendTye] = useState();
  const [addBenefit, setAddBenefit] = useState([]);

  const handleAddBenefit = () => {
    setAddBenefit([...addBenefit, ""]);
  };

  const handleDeleteBenefit = index => {
    const question = [...addBenefit];
    question.splice(index, 1);
    setAddBenefit(question);
  };

  const handleEditBenefit = (e, index) => {
    console.log(e.target.value);
    let questions = [...addBenefit];
    questions[index] = e.target.value;
    setAddBenefit(questions);
  };

  const handleStipendType = value => {
    setStipendTye(value);
    console.log(value);
  };

  return (
    <div className="stipend">
      <div className="stipend-amount-container">
        <div className="stipend-container">
          <h2 className="stipend__h2">Stipend</h2>
          <Select
            className="stipend__select"
            // defaultValue="fixed"
            placeholder="Stipend Type"
            value={stipendType}
            onChange={handleStipendType}
          >
            <Option value="fixed">Fixed</Option>
            <Option value="negotiable">Negotiable</Option>
            <Option value="unpaid">Unpaid</Option>
          </Select>
        </div>
        {stipendType === "fixed" && (
          <div className="amount-container">
            <h2 className="amount__h2">Amount</h2>
            <Input className="amount__input"></Input>
          </div>
        )}
        {stipendType === "negotiable" && (
          <div className="amount-container">
            <h2 className="amount-container">Amount</h2>
            <div className="amount-input-container">
              <Input className="amount__input"></Input>
              <Input className="amount__input"></Input>
            </div>
          </div>
        )}
      </div>

      <div className="additional-benefit">
        <h2 className="additional-benefit__h2">Additional Benefits</h2>
        {addBenefit.length > 0 &&
          addBenefit.map((addQuestion, index) => (
            <div
              className="additional-benefit-input-container"
              key={index}
              style={{ display: "flex" }}
            >
              <Input
                addonBefore={index + 1}
                className="additional-benefit__input"
                value={addQuestion}
                onChange={e => handleEditBenefit(e, index)}
              />
              <Icon
                className="additional-benefit__icon"
                type="delete"
                onClick={() => handleDeleteBenefit(index)}
              ></Icon>
            </div>
          ))}
        <span
          className="additional-benefit-add-question"
          onClick={handleAddBenefit}
        >
          +Add Question
        </span>
      </div>

      <div className="ppo-container">
        <div className="ppo-block">
          <p className="ppo__paragraph">
            Does this Internship Come with a PPO?
          </p>
          <div className="ppo-option">
            <Radio>Yes</Radio>
            <Radio>No</Radio>
          </div>
        </div>
        <div className="ppo-block">
          <p className="ppo__paragraph">Will you provide a certificate?</p>
          <div className="ppo-option">
            <Radio>Yes</Radio>
            <Radio>No</Radio>
          </div>
        </div>
      </div>
      <div className="submit-button-container">
        <Button className="submit-button">CONTINUE</Button>
      </div>
    </div>
  );
}
