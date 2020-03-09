import React, { useState, useEffect } from "react";
import { Input, Button, Icon } from "antd";
import { useForm, Controller } from "react-hook-form";
import { arrayValidation } from "../../validation/validation";

export default function FormInterviewQuestion() {
  const formData = JSON.parse(localStorage.getItem("internshipFormData"));
  const internQues = arrayValidation(formData.questions)
    ? formData.questions
    : [];
  const [questions, setQuestions] = useState(internQues);

  const { control, handleSubmit, watch } = useForm();

  //! --------------------------- input data testing --------------------------- */
  console.log("questions", questions);
  console.log("");

  //! -------------------------------------------------------------------------- */

  const handleAddInput = () => {
    setQuestions([...questions, ""]);
  };

  const handleDeleteInput = index => {
    const question = [...questions];
    question.splice(index, 1);
    setQuestions(question);
  };

  const handleAddQuestion = (e, index) => {
    console.log(e.target.value);
    let myQuestion = [...questions];
    myQuestion[index] = e.target.value;
    setQuestions(myQuestion);
  };

  useEffect(() => {
    localStorage.setItem(
      "internshipFormData",
      JSON.stringify({
        ...formData,
        questions
      })
    );
  }, [formData, questions]);

  useEffect(() => {
    console.log(questions);
  }, [questions]);
  return (
    <div className="interview-ques-container">
      <div className="interview-ques-header-container">
        <h2 className="interview-ques__h2">Interview Question</h2>
        <span className="interview-ques__span">+Add Sample Question</span>
      </div>
      {/* <Input className="interview-ques__input"></Input> */}
      {questions.length > 0 &&
        questions.map((addQuestion, index) => (
          <div
            className="interview-ques-input-container"
            key={index}
            style={{ display: "flex" }}
          >
            <Input
              addonBefore={index + 1}
              className="interview-ques__input"
              value={addQuestion}
              onChange={e => handleAddQuestion(e, index)}
            />
            <Icon
              className="interview-ques__icon"
              type="delete"
              onClick={() => handleDeleteInput(index)}
            ></Icon>
          </div>
        ))}
      <span className="interview-add-question" onClick={handleAddInput}>
        +Add Question
      </span>
      <div className="submit-button-container">
        <Button htmlType="submit" className="submit-button">
          SUBMIT
        </Button>
      </div>
    </div>
  );
}
