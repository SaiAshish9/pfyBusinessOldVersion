import React, { useState } from "react";
import { Input, Button, Select } from "antd";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import cookie from "js-cookie";
import ShowCaseCarousel from "./showCaseCarousel";
import arrowLeft from "../../assets/img/goBackLeftArrow.svg";

const userDetail = [
  {
    name: "Full Name",
    formName: "fullName",
  },
  {
    name: "Mobile",
    formName: "mobile",
  },
  {
    name: "E-mail Address",
    formName: "email",
  },
  {
    name: "Password",
    formName: "password",
  },
];

const companyDetail = [
  { name: "Company Name", formName: "companyName", type: "input" },
  { name: "Company Website", formName: "companyWebsite", type: "input" },
  { name: "Company Type", formName: "companyType", type: "select" },
  { name: "About Company", formName: "aboutCompany", type: "textArea" },
];

const { Option } = Select;
const { TextArea } = Input;

export default function SignUp() {
  const history = useHistory();
  const { control, handleSubmit, watch, reset } = useForm({
    defaultValues: {},
  });

  console.log("aboutCompany", watch("aboutCompany"));

  const onSubmit = (data) => {
    console.log(data);
    reset({
      fullName: "",
      mobile: "",
      email: "",
      password: "",
    });
    setIsRegister(true);
  };

  const onSubmitOtp = (data) => {
    console.log(data);
    setIsFinalRegister(true);
  };

  const onSubmitFinalRegister = (data) => {
    console.log(data);
    cookie.set("token", "123");
    history.push("/home");
  };

  const [isRegister, setIsRegister] = useState(false);
  const [isFinalRegister, setIsFinalRegister] = useState(false);

  const whichInputField = (inputType, formName) => {
    switch (inputType) {
      case "input": {
        return <Input className={`${formName}__input`} />;
      }
      case "select": {
        return (
          <Select className={`${formName}__input`}>
            {/* <Option>hello</Option> */}
          </Select>
        );
      }
      case "textArea": {
        return <TextArea className={`${formName}__input`} />;
      }
      default: {
        console.log("there is some problem");
      }
    }
  };
  return (
    <div className="login-main-block">
      <div className="login-form-block">
        <h4 className="goBackToPracify" onClick={() => history.push("/")}>
          <img src={arrowLeft} alt="" className="goBackArrow" /> Pracify
        </h4>
        <h1 className="login__header">Sign Up</h1>
        <p className="login__para">
          {isRegister
            ? "We've sent you OTP on your email address"
            : "Get Started!"}
        </p>

        {!isRegister ? (
          <form onSubmit={handleSubmit(onSubmit)} className="signUp-form-block">
            {userDetail.map((userDetail, index) => {
              return (
                <div className={`${userDetail.formName}`} key={index}>
                  <p className={`${userDetail.formName}__label`}>
                    {userDetail.name}
                  </p>
                  <Controller
                    as={<Input className={`${userDetail.formName}__input`} />}
                    name={`${userDetail.formName}`}
                    control={control}
                  />
                </div>
              );
            })}
            <Button htmlType="submit" className="register__button">
              REGISTER
            </Button>
          </form>
        ) : !isFinalRegister ? (
          <form
            onSubmit={handleSubmit(onSubmitOtp)}
            className="signUp-form-block"
          >
            <div className="email-otp">
              <p className="email-otp__label">Email OTP</p>
              <Controller
                as={<Input className="email-otp__input" />}
                name={`${userDetail.formName}`}
                control={control}
              />
            </div>
            <Button htmlType="submit" className="register__button">
              VERIFY OTP
            </Button>
          </form>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmitFinalRegister)}
            className="signUp-form-block"
          >
            {companyDetail.map((companyDetail, index) => (
              <div className={`${companyDetail.formName}`} key={index}>
                <p className={`${companyDetail.formName}__label`}>
                  {companyDetail.name}
                </p>
                <Controller
                  as={whichInputField(
                    companyDetail.type,
                    companyDetail.formName
                  )}
                  name={`${companyDetail.formName}`}
                  control={control}
                />
              </div>
            ))}
            <Button htmlType="submit" className="register__button">
              REGISTER
            </Button>
          </form>
        )}

        {!isRegister && (
          <div className="newUserOrForgotPassword">
            <span className="newUser__span">
              Already a member?{" "}
              <span
                className="register__span"
                onClick={() => history.push("/login")}
              >
                Login
              </span>
            </span>
          </div>
        )}
      </div>
      <div className="login-showcase-carousel-block">
        <ShowCaseCarousel></ShowCaseCarousel>
      </div>
    </div>
  );
}
