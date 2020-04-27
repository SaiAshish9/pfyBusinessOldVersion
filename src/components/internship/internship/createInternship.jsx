import React, { useContext, useState, useEffect } from "react";
import { Modal, Button } from "antd";
import axios from "axios";
import { token, companyId, apiURL } from "../../constant/userToken";
import { ModalVisibleContext } from "./newInternship";
import modalSvg from "../../../assets/img/modalSvg.svg";
import FormInternshipDetail from "../internshipForm/formInternshipDetail";
import FormResponsibility from "../internshipForm/formResponsibility";
import FormStipend from "../internshipForm/formStipend";
import FormInterviewQuestion from "../internshipForm/formInterviewQuestion";

const internshipForm = { companyId };

localStorage.setItem("internshipFormData", JSON.stringify(internshipForm));

export default function CreateInternship() {
  const formData = JSON.parse(localStorage.getItem("internshipFormData"));

  const { modalVisible, dispatchModalVisible } = useContext(
    ModalVisibleContext
  );
  const [formStep, setFormStep] = useState(0);

  const handleGoBack = () => {
    setFormStep(formStep - 1);
  };

  const handleNext = () => {
    setFormStep(formStep + 1);
  };

  const handleSubmit = () => {
    console.log("submit!");
    axios
      .post(`${apiURL}internship/add`, formData, token)
      .then((res) => {
        console.log(res);
        localStorage.clear();
        setFormStep(0);
        dispatchModalVisible({ type: "cancelModalVisible" });
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  useEffect(() => {
    formStep < 0 && dispatchModalVisible({ type: "cancelModalVisible" });
    formStep === -1 && setFormStep(0);
    console.log("formStep", formStep);
  }, [dispatchModalVisible, formStep]);

  const modalTitle = (
    <div className="custom-modal-title">
      <img src={modalSvg} alt="" className="modal-title__img" />
      <div className="modal-title-content">
        <h1 className="modal-title__header">Internship Details</h1>
        <p className="modal-title__para">Fill the details below.</p>
      </div>
    </div>
  );

  const modalFooter = (
    <div className="custom-modal-footer">
      <Button className="goBack-button" onClick={handleGoBack}>
        Go Back
      </Button>
      {formStep < 3 ? (
        <Button className="contactUs-button" onClick={handleNext}>
          Next
        </Button>
      ) : (
        <Button className="contactUs-button" onClick={handleSubmit}>
          Submit
        </Button>
      )}
    </div>
  );

  const handleCancel = (e) => {
    console.log(e);
    dispatchModalVisible({ type: "cancelModalVisible" });
  };

  return (
    <Modal
      title={modalTitle}
      visible={modalVisible}
      footer={modalFooter}
      onCancel={handleCancel}
      className="contactToAdmin-modal"
    >
      {formStep === 0 && <FormInternshipDetail />}
      {formStep === 1 && <FormResponsibility />}
      {formStep === 2 && <FormStipend />}
      {formStep === 3 && <FormInterviewQuestion />}
    </Modal>
  );
}
