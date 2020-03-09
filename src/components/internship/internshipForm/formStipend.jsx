import React, { useState, useEffect } from "react";
import { Select, Input, Radio, Button, Icon } from "antd";
import { useForm, Controller } from "react-hook-form";
import { arrayValidation } from "../../validation/validation";

const { Option } = Select;
export default function FormStipend({ handleContinue }) {
  // const [stipendType, setStipendTye] = useState();
  const formData = JSON.parse(localStorage.getItem("internshipFormData"));

  const internBenefit = arrayValidation(formData.benefits)
    ? formData.benefits
    : [];
  const [benefits, setBenefits] = useState(internBenefit);

  // const [isPPO, setIsPPO] = useState();
  // const [isCertification, setIsCertification] = useState();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      stipendType: formData.stipendType,
      stipend: ""
    }
  });

  //! --------------------------- input data testing --------------------------- */
  const stipendType = watch("stipendType");
  console.log("stipendType", watch("stipendType"));
  console.log("");

  console.log("amount", watch("amount"));
  console.log("");

  console.log("amountFrom", watch("amountFrom"));
  console.log("");

  console.log("amountTo", watch("amountTo"));
  console.log("");

  console.log("amountFrom", watch("amountFrom"));
  console.log("");

  console.log("benefits", benefits);
  console.log("");

  console.log("isPPO", watch("isPPO"));
  console.log("");

  console.log("isCertificate", watch("isCertificate"));
  console.log("");
  //! -------------------------------------------------------------------------- */

  useEffect(() => {
    localStorage.setItem(
      "internshipFormData",
      JSON.stringify({ ...formData, stipendType, benefits })
    );
  }, [formData, stipendType, benefits]);

  const handleAddBenefit = () => {
    setBenefits([...benefits, ""]);
  };

  const handleDeleteBenefit = index => {
    const question = [...benefits];
    question.splice(index, 1);
    setBenefits(question);
  };

  const handleEditBenefit = (e, index) => {
    console.log(e.target.value);
    let questions = [...benefits];
    questions[index] = e.target.value;
    setBenefits(questions);
  };

  // const handleStipendType = value => {
  //   setStipendTye(value);
  //   console.log(value);
  // };

  return (
    <form>
      {/*//TODO  add logic in stipend*/}
      <div className="stipend">
        <div className="stipend-amount-container">
          <div className="stipend-container">
            <h2 className="stipend__h2">Stipend</h2>
            <Controller
              as={
                <Select
                  className="stipend__select"
                  placeholder="Stipend Type"
                  // defaultValue="fixed"
                  // value={stipendType}
                  // onChange={handleStipendType}
                >
                  <Option value="fixed">Fixed</Option>
                  <Option value="negotiable">Negotiable</Option>
                  <Option value="unpaid">Unpaid</Option>
                </Select>
              }
              name="stipendType"
              control={control}
            />
          </div>
          {stipendType === "fixed" && (
            <div className="amount-container">
              <h2 className="amount__h2">Amount</h2>
              <Controller
                as={<Input className="amount__input"></Input>}
                name="amount"
                control={control}
              />
            </div>
          )}
          {stipendType === "negotiable" && (
            <div className="amount-container">
              <h2 className="amount-container">Amount</h2>
              <div className="amount-input-container">
                <Controller
                  as={<Input className="amount__input"></Input>}
                  name="amountFrom"
                  control={control}
                />
                <Controller
                  as={<Input className="amount__input"></Input>}
                  name="amountTo"
                  control={control}
                />
              </div>
            </div>
          )}
        </div>

        <div className="additional-benefit">
          <h2 className="additional-benefit__h2">Additional Benefits</h2>
          {benefits.length > 0 &&
            benefits.map((addQuestion, index) => (
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
              <Controller
                as={
                  <Radio.Group
                  // onChange={handleRadioButton1} value={isPPO}
                  >
                    <Radio value="ppoYes">Yes</Radio>
                    <Radio value="ppoNo">No</Radio>
                  </Radio.Group>
                }
                name="isPPO"
                control={control}
              />
            </div>
          </div>
          <div className="ppo-block">
            <p className="ppo__paragraph">Will you provide a certificate?</p>
            <div className="ppo-option">
              <Controller
                as={
                  <Radio.Group
                  // onChange={handleRadioButton2}
                  // value={isCertification}
                  >
                    <Radio value="certificateYes">Yes</Radio>
                    <Radio value="certificateNo">No</Radio>
                  </Radio.Group>
                }
                name="isCertificate"
                control={control}
              />
            </div>
          </div>
        </div>
        <div className="submit-button-container">
          <Button className="submit-button" onClick={() => handleContinue(3)}>
            CONTINUE
          </Button>
        </div>
      </div>
    </form>
  );
}
