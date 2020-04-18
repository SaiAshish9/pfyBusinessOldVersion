import React, { useState, useEffect } from "react";
import { Input, Button, Icon, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";
import { arrayValidation } from "../../validation/validation";
import {DeleteOutlined} from '@ant-design/icons';


export default function FormInterviewQuestion({ handleSubmit }) {
  const formData = JSON.parse(localStorage.getItem("internshipFormData"));
  const internQues = arrayValidation(formData.questions)
    ? [...formData.questions]
    : [];

  const [questionsState, setQuestionsState] = useState(internQues);

  const handleAddInput = () => {
    setQuestionsState([...questionsState, { question: "", questionType: 0 }]);
  };

  const handleDeleteInput = (index) => {
    const question = [...questionsState];
    question.splice(index, 1);
    setQuestionsState(question);
  };

  const handleAddQuestion = (e, index) => {
    console.log(e.target.value);
    let myQuestion = [...questionsState];
    myQuestion[index].question = e.target.value;
    setQuestionsState(myQuestion);
  };

  const handleLongAnswer = (e, index) => {
    const isQues = e.target.checked;
    let myQuestionType = [...questionsState];
    myQuestionType[index].questionType = isQues ? 1 : 0;
    setQuestionsState(myQuestionType);
  };

  useEffect(() => {
    console.log(questionsState);
    // const myQuestion = questions;
    localStorage.setItem(
      "internshipFormData",
      JSON.stringify({
        ...formData,
        questions: questionsState,
      })
    );
  }, [formData, questionsState]);

  return (
    <div className="interview-ques-container">
      <div className="interview-ques-header-container">
        <h3 className="interview-ques__h3">Interview Question</h3>
        <span className="interview-ques__span">+Add Sample Question</span>
      </div>
      {questionsState.length > 0 &&
        questionsState.map((addQuestion, index) => (
          <div
            className="interview-ques-input-container"
            key={index}
            style={{ display: "flex" }}
          >
            <Input
              addonBefore={index + 1}
              className="interview-ques__input"
              value={addQuestion.question}
              onChange={(e) => handleAddQuestion(e, index)}
            />
            <Checkbox
              checked={addQuestion.questionType === 0 ? false : true}
              onChange={(e) => handleLongAnswer(e, index)}
            >
              Long Answer
            </Checkbox>
            {/* <Icon
              className="interview-ques__icon"
              type="delete"
              onClick={() => handleDeleteInput(index)}
            ></Icon> */}
            <DeleteOutlined onClick={() => handleDeleteInput(index)} />
          </div>
        ))}
      <span className="interview-add-question" onClick={handleAddInput}>
        +Add Question
      </span>
    </div>
  );
}
