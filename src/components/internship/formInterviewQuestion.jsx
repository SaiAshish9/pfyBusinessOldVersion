import React, { useState, useEffect } from "react";
import { Input, Button, Icon } from "antd";



export default function FormInterviewQuestion() {
  const [addInput, setAddInput] = useState([]);

  const handleAddInput = () => {
    setAddInput([...addInput, ""]);
  };

  const handleDeleteInput = index => {
    const question = [...addInput];
    question.splice(index,1);
    setAddInput(question);
  };

  const handleAddQuestion = (e, index) => {
    console.log(e.target.value);
    let questions = [...addInput];
    questions[index] = e.target.value;
    setAddInput(questions);
  };

  //!------------------------- testing -------------------------

  useEffect(() => {
    console.log(addInput);
  }, [addInput]);
  return (
    <div className="interview-ques-container">
      <div className="interview-ques-header-container">
        <h2 className="interview-ques__h2">Interview Question</h2>
        <span className="interview-ques__span">+Add Sample Question</span>
      </div>
      {/* <Input className="interview-ques__input"></Input> */}
      {addInput.length > 0 &&
        addInput.map((addQuestion, index) => (
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
        <Button className="submit-button">CONTINUE</Button>
      </div>
    </div>
  );
}
