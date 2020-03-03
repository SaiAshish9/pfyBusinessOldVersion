import React, { useState } from "react";
import { Steps } from "antd";
import FormInternshipDetail from "./formInternshipDetail";
import FormResponsibility from "./formResponsibility";
import FormStipend from "./formStipend";
import FormInterviewQuestion from "./formInterviewQuestion";
import detailIcon from "./img/detailIcon.svg";
import responsibilityIcon from "./img/responsibilityIcon.svg";
import stipendIcon from "./img/stipendIcon.svg";
import QAIcon from "./img/QAIcon.svg";

const { Step } = Steps;

export default function Internship() {
  const [currentStep, setCurrentState] = useState(0);

  const handleStep = current => {
    console.log("step ", current);
    setCurrentState(current);
  };

  return (
    <div className="internship-container">
      <div className="step-container">
        <Steps current={currentStep} onChange={handleStep}>
          <Step
            // status="finish"
            title="Internship Details"
            icon={<img src={detailIcon} alt="" />}
          />
          <Step
            // status="finish"
            title="Responsibilities & Skills"
            icon={<img src={responsibilityIcon} alt="" />}
          />
          <Step
            // status="process"
            title="Stipend & Perks"
            icon={<img src={stipendIcon} alt="" />}
          />
          <Step
            // status="wait"
            title="Interview Questions"
            icon={<img src={QAIcon} alt="" />}
          />
        </Steps>
      </div>
      <div className="internship-form-container">
        {currentStep === 0 && <FormInternshipDetail></FormInternshipDetail>}
        {currentStep === 1 && <FormResponsibility></FormResponsibility>}
        {currentStep === 2 && <FormStipend></FormStipend>}
        {currentStep === 3 && <FormInterviewQuestion></FormInterviewQuestion>}
      </div>
    </div>
  );
}
