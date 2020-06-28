import React, { useEffect } from "react";
import axios from "axios";
import { Modal, Button, Input, Form, InputNumber } from "antd";
import modalSvg from "../../assets/img/modalSvg.svg";
import TextArea from "antd/lib/input/TextArea";
const commonQuestions = [
  "Explain your requirement",
  "Tell us your budget",
  "Required number of gig workers"
]
const freelanceQuestions = [
  "Explain your requirement",
  "Tell us your budget"
]
const questions = {
  "Instagram Content Creation": [
    "Explain your requirement",
    "Tell us your budget",
    "Required number of content creators",
  ],
  "Facebook Content Creation": [
    "Explain your requirement",
    "Tell us your budget",
    "Required number of content creators",
  ],
  "TikTok Content Creation": [
    "Explain your requirement",
    "Tell us your budget",
    "Required number of content creators",
  ],
  "Snapchat Content Creation": [
    "Explain your requirement",
    "Tell us your budget",
    "Required number of content creators",
  ],
  "Facebook & Instagram Live": [
    "Explain your requirement",
    "Tell us your budget",
    "Required number of live users",
  ],
  "Facebook & Instagram Polls": [
    "Explain your requirement",
    "Tell us your budget",
    "Required number of users ",
  ],
  "Mobile App Installs": [
    "Name of App",
    "Tell us your budget",
    "Required number of downloads",
  ],
  "Online Reviews": [
    "Where do you need the reviews",
    "Tell us your budget",
    "Required number of reviews",
  ],
  "Play Store Reviews": [
    "Name of app",
    "Tell us your budget",
    "Required number of reviews",
  ],
  "App Store Reviews": [
    "Name of app",
    "Tell us your budget",
    "Required number of reviews",
  ],
  "Website SignUp": [
    "Registration page link",
    "Tell us your budget",
    "Required number of signups",
  ],
  "Flyer Distribution (Campus)": [
    "Explain the requirement",
    "Tell us your budget",
    "Cities in which flyers have to be distributed",
  ],
  "Comment Engagement": [
    "Post link",
    "Tell us your budget",
    "Number of required comments",
  ],
  "Sampling Activity": [
    "Explain the requirement",
    "Tell us your budget",
    "Total number of samples",
  ],
  "Pasting Posters (Campus)": [
    "Explain the requirement",
    "Tell us your budget",
    "Cities in which posters have to be pasted",
  ],
  "Increase Social Media Followers": [
    "Social media page link",
    "Tell us your budget",
    "Number of required followers",
  ],
  "Vendor Acquisition":commonQuestions,
  "Address Verification":commonQuestions,
  "Lead Generation":commonQuestions,
  "Social Sales":commonQuestions,
  "Customer Onboarding":commonQuestions,
  "Field Sales":commonQuestions,  
  "Telecallers":commonQuestions,  
  "Data Entry":commonQuestions,
  "Data Digitization":commonQuestions,
  "Data Curation": commonQuestions,
  "Data Transcription": commonQuestions,
  "Mystery Audit":commonQuestions,
  "Non Mystery Audit":commonQuestions,
  "Online Survey":[
    "Explain your requirement",
    "Tell us your budget",
    "Required number of respondents"
  ],
  "Customer Experience Survey":[
    "Explain your requirement",
    "Tell us your budget",
    "Required number of respondents"
  ],
  "Beta Testing":[
    "Explain your requirement",
    "Tell us your budget",
    "Required number of testers"
  ],
  "Personal Interviews":[
    "Explain your requirement",
    "Tell us your budget",
    "Required number of respondents"
  ],
  "Product Reviews":[
    "Explain your requirement",
    "Tell us your budget",
    "Required number of testers"
  ],
  "Graphic Design":freelanceQuestions,
  "Web Development":freelanceQuestions,
  "Mobile App Development":freelanceQuestions,
  "Content Writing":freelanceQuestions,
  "Logo Design":freelanceQuestions,
  "Language Translation":freelanceQuestions,
  "UI/UX Design": freelanceQuestions
};
export default function DefaultCampaign({
  campaignTitle,
  modalVisible,
  handleCancel,
}) {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        onCreate(values);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    const data = { ...values, formName: campaignTitle };
    console.log(data);
    axios
      .post("company_contact_us/create", data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e.response);
      });
    handleCancel();
  };

  const modalFooter = (
    <div className="custom-modal-footer">
      <Button
        className="contactUs-button"
        htmlType="submit"
        onClick={handleSubmit}
      >
        SUBMIT
      </Button>
    </div>
  );

  return (
    <Modal
      title={`${campaignTitle}`}
      visible={modalVisible}
      footer={modalFooter}
      onCancel={handleCancel}
      className="contactToAdmin-modal"
      width={860}
    >
      <Form
        className="default-block"
        form={form}
        hideRequiredMark={true}
        name="defaultGigCampaign"
      >
        {questions[campaignTitle] &&
          questions[campaignTitle].map((question,index) => (
            <>
              <p className="requirement__p">{question}</p>
              <Form.Item
                name={index}
                rules={[
                  {
                    required: true,
                    message: "This question is required!",
                  },
                ]}
              >
                 <TextArea className="requirement__input" autoSize />
              </Form.Item>
            </>
          ))}
        
  
      </Form>
    </Modal>
  );
  
}

// {
// 	"formName":"Marketing",
// 	"description":"I want to creat a mission",
// 	"budget":1000,
// 	"noOfWorkers":100
// }
