import React, { useState, useEffect } from "react";
import { Select, Input, Radio, Button, Icon } from "antd";
import { useForm, Controller } from "react-hook-form";
import { arrayValidation } from "../../validation/validation";
import DeleteOutlined from "@ant-design/icons";

const { Option } = Select;
export default function FormStipend({ handleContinue }) {
  const formData = JSON.parse(localStorage.getItem("internshipFormData"));

  const internBenefit = arrayValidation(formData.benefits)
    ? formData.benefits
    : [];

  const [benefits, setBenefits] = useState(internBenefit);

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      stipendType: formData.stipendType,
      stipend: formData.stipend,
      minStipend: formData.minStipend,
      maxStipend: formData.maxStipend,
    },
  });

  //! --------------------------- input data testing --------------------------- */
  //#region
  const stipendType = watch("stipendType");
  console.log("stipendType", watch("stipendType"));
  console.log("");

  const stipend = watch("stipend");
  console.log("stipend", stipend);
  console.log("");

  const minStipend = watch("minStipend");
  console.log("minStipend", watch("minStipend"));
  console.log("");

  const maxStipend = watch("maxStipend");
  console.log("maxStipend", watch("maxStipend"));
  console.log("");

  console.log("benefits", benefits);
  console.log("");

  console.log("isPPO", watch("isPPO"));
  console.log("");

  console.log("isCertificate", watch("isCertificate"));
  console.log("");
  //#endregion
  //! -------------------------------------------------------------------------- */

  useEffect(() => {
    const myStipend = stipendType === "fixed" ? stipend : null;
    const myMinStipend = stipendType === "negotiable" ? minStipend : null;
    const myMaxStipend = stipendType === "negotiable" ? maxStipend : null;

    localStorage.setItem(
      "internshipFormData",
      JSON.stringify({
        ...formData,
        stipendType,
        stipend: myStipend,
        minStipend: myMinStipend,
        maxStipend: myMaxStipend,
        benefits,
      })
    );
  }, [formData, stipendType, benefits, stipend, minStipend, maxStipend]);

  //? ------------------------------- handleData ------------------------------- */
  //#region
  const handleAddBenefit = () => {
    setBenefits([...benefits, ""]);
  };

  const handleDeleteBenefit = (index) => {
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
  //#endregion
  //? -------------------------------------------------------------------------- */

  return (
    <form>
      {/*//  add logic in stipend*/}
      <div className="stipend">
        <div className="stipend-amount-container">
          <div className="stipend-container">
            <h3 className="stipend__h3">Stipend</h3>
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
              <h3 className="amount__h3">Amount</h3>
              <Controller
                as={
                  <Input
                    className="amount__input"
                    suffix="RS"
                    placeholder="stipend"
                  />
                }
                name="stipend"
                control={control}
              />
            </div>
          )}
          {stipendType === "negotiable" && (
            <div className="amount-container">
              <h3 className="amount-container">Amount</h3>
              <div className="amount-input-container">
                <Controller
                  as={
                    <Input
                      suffix="RS"
                      className="amount__input"
                      placeholder="min"
                    ></Input>
                  }
                  name="minStipend"
                  control={control}
                />
                <span className="amount__span"> - </span>
                <Controller
                  as={
                    <Input
                      suffix="RS"
                      className="amount__input"
                      placeholder="max"
                    ></Input>
                  }
                  name="maxStipend"
                  control={control}
                />
              </div>
            </div>
          )}
        </div>

        <div className="additional-benefit">
          <h3 className="additional-benefit__h3">Additional Benefits</h3>
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
                  onChange={(e) => handleEditBenefit(e, index)}
                />
                {/* <Icon
                  className="additional-benefit__icon"
                  type="delete"
                  onClick={() => handleDeleteBenefit(index)}
                ></Icon> */}
                <DeleteOutlined onClick={() => handleDeleteBenefit(index)} />
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
            <h3 className="ppo__paragraph">
              Does this Internship Come with a PPO?
            </h3>
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
            <h3 className="ppo__paragraph">Will you provide a certificate?</h3>
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
        <div className="submit-button-container"></div>
      </div>
    </form>
  );
}
