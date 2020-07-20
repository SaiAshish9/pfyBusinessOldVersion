import React from "react";
import { Modal, Form, Button } from "antd";
import InputType from "../../inputType";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import modalCloseIcon from "../../../assets/img/modalCloseIcon.svg";
import {useMediaQuery} from "react-responsive";

const userDetail = [
  {
    name: "name",
    label: "Name",
    // placeholder: "Your Name",
    rule: [{ required: true, message: "please input your name!" }],
    inputType: "text",
  },
  {
    name: "city",
    label: "City",
    rule: [{ required: true, message: "please input your city!" }],
    option: [
      { option: "Delhi", value: "Delhi" },
      { option: "Mumbai", value: "Mumbai" },
      { option: "Kolkata", value: "Kolkata" },
      { option: "Bangalore", value: "Bangalore" },
      { option: "Pune", value: "Pune" },
    ],
    value: ["Delhi", "Mumbai", "Kolkata", "Bangalore", "Pune"],
    inputType: "select",
  },
  {
    name: "email",
    label: "Email Address",
    // placeholder: "Your Email",
    rule: [{ required: true, message: "please input your email!" }],
    inputType: "text",
  },
  {
    name: "mobile",
    label: "Mobile Number",
    // placeholder: "Your Phone",
    rule: [{ required: true, message: "please input your mobile!" }],
    inputType: "number",
  },
  {
    name: "message",
    label: "Message",
    // placeholder: "Your Message",
    rule: [{ required: true, message: "please input your message!" }],
    inputType: "textarea",
  },
];
const companyDetail = [
  {
    name: "name",
    label: "Name",
    // placeholder: "Your Name",
    rule: [{ required: true, message: "please input your name!" }],
    inputType: "text",
  },
  {
    name: "companyName",
    label: "Company Name",
    // placeholder: "Your Company",
    rule: [{ required: true, message: "please input your company name!" }],
    inputType: "text",
  },
  {
    name: "email",
    label: "Email Address",
    // placeholder: "Your Email",
    rule: [{ required: true, message: "please input your email!" }],
    inputType: "text",
  },
  {
    name: "mobile",
    label: "Mobile Number",
    // placeholder: "Your Phone",
    rule: [{ required: true, message: "please input your mobile!" }],
    inputType: "number",
  },
  {
    name: "message",
    label: "Message",
    // placeholder: "Your Message",
    rule: [{ required: true, message: "please input your message!" }],
    inputType: "textarea",
  },
];
const partnerDetail = [
  {
    name: "name",
    label: "Name",
    // placeholder: "Your Name",
    rule: [{ required: true, message: "please input your name!" }],
    inputType: "text",
  },
  {
    name: "collegeName",
    label: "College Name",
    // placeholder: "Your College Name",
    rule: [{ required: true, message: "please input your college name!" }],
    inputType: "text",
  },
  {
    name: "email",
    label: "Email Address",
    // placeholder: "Your Email",
    rule: [{ required: true, message: "please input your email!" }],
    inputType: "text",
  },
  {
    name: "mobile",
    label: "Mobile Number",
    // placeholder: "Your Phone",
    rule: [{ required: true, message: "please input your mobile!" }],
    inputType: "number",
  },
  {
    name: "city",
    label: "City",
    // placeholder: "Your City",
    rule: [{ required: true, message: "please input your city!" }],
    option: [
      { option: "Delhi", value: "Delhi" },
      { option: "Mumbai", value: "Mumbai" },
      { option: "Kolkata", value: "Kolkata" },
      { option: "Bangalore", value: "Bangalore" },
      { option: "Pune", value: "Pune" },
    ],
    inputType: "select",
  },

  {
    name: "collegeSocietyName",
    label: "College Society Name",
    rule: [
      { required: true, message: "please input your college society name!" },
    ],
    inputType: "text",
  },
  {
    name: "eventStartDate",
    label: "Event Starts On",
    rule: [{ required: true, message: "please input event dates!" }],
    placeholder: null,
    inputType: "date",
    suffix: null,
  },
  {
    name: "eventEndDate",
    label: "Event Ends On",
    placeholder: null,
    rule: [{ required: true, message: "please input event dates!" }],
    inputType: "date",
    suffix: null,
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
  return (
    <Modal
      title="Get In Touch"
      visible={modalVisible}
      onCancel={handleCancelModal}
      footer={null}
      width={812}
      className="contactUs-form-field"
      closeIcon={<img src={modalCloseIcon} alt="close" className="" />}
    >
      <GetUserDetailForm contactName={contactName} />
    </Modal>
  );
}

export const GetUserDetailForm = ({ contactName }) => {
  const location = useLocation();
  console.log("location", location);
  const media=useMediaQuery({
    query: "(min-width:600px)"
  })

  const [form] = Form.useForm();

  const onFormSubmit = (value, formName) => {
    if (formName === "user") {
      console.log(value);
    } else if (formName === "business") {
      console.log(value);
    } else {
      const startDate = value.eventStartDate._d.toISOString();
      const endDate = value.eventEndDate._d.toISOString();
      delete value.eventStartDate;
      delete value.eventEndDate;
      const preProcessedValue = { ...value, eventDate: { startDate, endDate } };
      console.log(preProcessedValue);
    }
  };
  return (
    <>
      {location.pathname !== "/partner-with-us" && (
        <h1 className="get-in-touch-head">Get in Touch</h1>
      )}
      {contactName === "user" && (
        <Form
          name="userContact"
          onFinish={(value) => onFormSubmit(value, "user")}
          form={form}
          style={{
            display: !media && "flex",
            flexDirection: "column",
          }}
          className="userContact-form-main-block"
        >
          {userDetail.map((user, index) => (
            <div
              style={{
                width: media ? "100%" : "90vw",
              }}
              className="user-form"
              key={index}
            >
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
            {!media ? (
              <div
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </div>
            ) : (
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            )}
          </Form.Item>
        </Form>
      )}
      {contactName === "business" && (
        <Form
          name="companyContact"
          onFinish={(value) => onFormSubmit(value, "business")}
          form={form}
          style={{
            display: !media && "flex",
            flexDirection: "column",
          }}
          className="companyContact-form-main-block"
        >
          {companyDetail.map((company, index) => (
            <div
              style={{
                width: media ? "100%" : "90vw",
              }}
              className="company-form"
              key={index}
            >
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
            {!media ? (
              <div
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </div>
            ) : (
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            )}
          </Form.Item>
        </Form>
      )}
      {contactName === "partner" && (
        <Form
          name="partnerContact"
          onFinish={(value) => onFormSubmit(value, "partner")}
          form={form}
          style={{
            display: !media && "flex",
            flexDirection: "column",
          }}
          className="partnerContact-form-main-block"
        >
          {partnerDetail.map((partner, index) => (
            <div
              style={{
                width: media ? "100%" : "90vw",
                display: "flex",
                flexDirection: media ? "row" : "column",
              }}
              className="partner-form"
              key={index}
            >
              <p
                style={{
                  marginBottom: !media ? "1rem" : 0,
                }}
              >
                {partner.label}
              </p>
              <InputType
                type={partner.inputType}
                name={partner.name}
                rule={partner.rule}
                placeholder={partner.placeholder}
                option={partner.option}
                disabledDate={partner.disabledDate}
                suffix={partner.suffix}
              />
            </div>
          ))}
          <Form.Item>
            {!media ? (
              <div
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </div>
            ) : (
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            )}
          </Form.Item>
        </Form>
      )}
    </>
  );
};
