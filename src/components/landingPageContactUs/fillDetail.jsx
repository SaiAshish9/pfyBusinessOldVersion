import React from "react";
import { Modal, Form, Button } from "antd";
import InputType from "../inputType";
import moment from "moment";

const userDetail = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your Name",
    rule: [{ required: true, message: "please input your name!" }],
    inputType: "text",
  },
  {
    name: "city",
    label: "City",
    placeholder: "Your City",
    rule: [{ required: true, message: "please input your city!" }],
    option: ["Delhi", "Mumbai", "Kolkata", "Bangalore", "Pune"],
    inputType: "select",
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "Your Email",
    rule: [{ required: true, message: "please input your email!" }],
    inputType: "text",
  },
  {
    name: "mobile",
    label: "Mobile Number",
    placeholder: "Your Phone",
    rule: [{ required: true, message: "please input your mobile!" }],
    inputType: "number",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Your Message",
    rule: [{ required: true, message: "please input your message!" }],
    inputType: "textarea",
  },
];
const companyDetail = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your Name",
    rule: [{ required: true, message: "please input your name!" }],
    inputType: "text",
  },
  {
    name: "companyName",
    label: "Company Name",
    placeholder: "Your Company",
    rule: [{ required: true, message: "please input your company name!" }],
    inputType: "text",
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "Your Email",
    rule: [{ required: true, message: "please input your email!" }],
    inputType: "text",
  },
  {
    name: "mobile",
    label: "Mobile Number",
    placeholder: "Your Phone",
    rule: [{ required: true, message: "please input your mobile!" }],
    inputType: "number",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Your Message",
    rule: [{ required: true, message: "please input your message!" }],
    inputType: "textarea",
  },
];
const partnerDetail = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your Name",
    rule: [{ required: true, message: "please input your name!" }],
    inputType: "text",
  },
  {
    name: "collegeName",
    label: "College Name",
    placeholder: "Your College Name",
    rule: [{ required: true, message: "please input your college name!" }],
    inputType: "text",
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "Your Email",
    rule: [{ required: true, message: "please input your email!" }],
    inputType: "text",
  },
  {
    name: "mobile",
    label: "Mobile Number",
    placeholder: "Your Phone",
    rule: [{ required: true, message: "please input your mobile!" }],
    inputType: "number",
  },
  {
    name: "city",
    label: "City",
    placeholder: "Your City",
    rule: [{ required: true, message: "please input your city!" }],
    option: ["Delhi", "Mumbai", "Kolkata", "Bangalore", "Pune"],
    inputType: "select",
  },

  {
    name: "collegeSocietyName",
    label: "College Society Name",
    placeholder: "Your College Society Name",
    rule: [
      { required: true, message: "please input your college society name!" },
    ],
    inputType: "text",
  },
  {
    name: "eventDate",
    label: "Event Date",
    placeholder: ["Starts From", "Ends On"],
    rule: [
      { type: "array", required: true, message: "please input event dates!" },
    ],
    disabledDate: (current) => {
      return current && current < moment().startOf("day");
    },
    inputType: "rangePicker",
  },
  {
    name: "partnerFor",
    label: "Partnering For",
    rule: [{ required: true, message: "please choose an option!" }],
    option: ["College Festival", "Society Event"],
    inputType: "radioButton",
  },
];

export default function FillDetail({
  contactName,
  modalVisible,
  handleCancelModal,
}) {
  const [form] = Form.useForm();

  const onFormSubmit = (value, formName) => {
    if (formName === "user") {
      console.log(value);
    } else if (formName === "business") {
      console.log(value);
    } else {
      const range = value["eventDate"];
      const startDate = range[0]._d.toISOString();
      const endDate = range[1]._d.toISOString();
      const preProcessedValue = { ...value, eventDate: { startDate, endDate } };
      console.log(value);
      console.log(preProcessedValue);
    }
  };
  return (
    <Modal
      title="Get In Touch"
      visible={modalVisible}
      onCancel={handleCancelModal}
      footer={null}
      width={812}
      className="contactUs-form-field"
    >
      {contactName === "user" && (
        <Form
          name="userContact"
          onFinish={(value) => onFormSubmit(value, "user")}
          form={form}
          className="userContact-form-main-block"
        >
          {userDetail.map((user, index) => (
            <div className="user-form" key={index}>
              <p>{user.label}</p>
              <InputType
                type={user.inputType}
                name={user.name}
                rule={user.rule}
                placeholder={user.placeholder}
                option={user.option}
              />
            </div>
          ))}
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
      {contactName === "business" && (
        <Form
          name="companyContact"
          onFinish={(value) => onFormSubmit(value, "business")}
          form={form}
          className="companyContact-form-main-block"
        >
          {companyDetail.map((company, index) => (
            <div className="company-form" key={index}>
              <p>{company.label}</p>
              <InputType
                type={company.inputType}
                name={company.name}
                rule={company.rule}
                placeholder={company.placeholder}
              />
            </div>
          ))}
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
      {contactName === "partner" && (
        <Form
          name="partnerContact"
          onFinish={(value) => onFormSubmit(value, "partner")}
          form={form}
          className="partnerContact-form-main-block"
        >
          {partnerDetail.map((partner, index) => (
            <div className="partner-form" key={index}>
              <p>{partner.label}</p>
              <InputType
                type={partner.inputType}
                name={partner.name}
                rule={partner.rule}
                placeholder={partner.placeholder}
                option={partner.option}
                disabledDate={partner.disabledDate}
              />
            </div>
          ))}
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
}
