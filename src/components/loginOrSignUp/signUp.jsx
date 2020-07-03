import React, { useState, useRef } from "react";
import {
  Input,
  Button,
  Select,
  Upload,
  message,
  Form,
  notification,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import cookie from "js-cookie";
import ShowCaseCarousel from "./showCaseCarousel";
import arrowLeft from "../../assets/img/goBackLeftArrow.svg";
import userIcon from "../../assets/img/loginOrSignUp/userIcon.svg";
import mailIcon from "../../assets/img/loginOrSignUp/mailIcon.svg";
import phoneNumberIcon from "../../assets/img/loginOrSignUp/phoneNumberIcon.svg";
import passwordIcon from "../../assets/img/loginOrSignUp/passwordIcon.svg";
import logo from "../../assets/img/logoDark.png";
import Axios from "axios";
import { objectValidation } from "../validation/validation";
import { apiURL, s3URL } from "../constant/userToken";
import { getHeaders } from "../../helpers/getHeaders";

const userDetail = [
  {
    placeHolder: "First Name",
    name: "firstName",
    icon: userIcon,
    rule: [{ required: true, message: "please enter your first name!" }],
  },
  {
    placeHolder: "Last Name",
    name: "lastName",
    icon: userIcon,
    rule: [
      {
        required: true,
        message: "please enter your last name!",
      },
    ],
  },
  {
    placeHolder: "Mobile Number",
    name: "mobile",
    icon: phoneNumberIcon,
    rule: [
      {
        required: true,
        message: "please enter your mobile number!",
      },
    ],
  },
  {
    placeHolder: "Email Address",
    name: "email",
    icon: mailIcon,
    rule: [
      {
        required: true,
        message: "please enter your email address!",
      },
    ],
  },
  {
    placeHolder: "Password",
    name: "password",
    icon: passwordIcon,
    rule: [
      {
        required: true,
        message: "please enter your password!",
      },
    ],
  },
];

const companyDetail = [
  {
    placeHolder: "Company Name",
    name: "companyName",
    type: "input",
    rule: [
      {
        required: true,
        message: "please enter your company name!",
      },
    ],
  },
  {
    placeHolder: "Company Website",
    name: "websiteLink",
    type: "input",
    rule: [
      {
        required: true,
        message: "please enter your company website!",
      },
    ],
  },
  {
    placeHolder: "Company Type",
    name: "companyType",
    type: "select",
    rule: [
      {
        required: true,
        message: "please select company type!",
      },
    ],
  },
  {
    placeHolder: "About Company",
    name: "aboutCompany",
    type: "textArea",
    rule: [
      {
        required: true,
        message: "please tell us about your company!",
      },
    ],
  },
];

const { Option } = Select;
const { TextArea } = Input;

// const getBase64 = (img, callback) => {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => callback(reader.result));
//   reader.readAsDataURL(img);
// };

export default function SignUp() {
  const history = useHistory();
  
  // const isVerify =
  //   !!history.location.state && history.location.state.isEmailVerify;
  // const token = !!history.location.state && history.location.state.token;
  const [token,setToken] = useState(cookie.get("companytoken"));

  const { control, handleSubmit, watch, reset, errors } = useForm({
    defaultValues: {},
  });

  console.log("aboutCompany", watch("aboutCompany"));

  // const onSubmit = (data) => {
  //   console.log(data);
  //   reset({
  //     firstName: "",
  //     lastName: "",
  //     mobile: "",
  //     email: "",
  //     password: "",
  //   });
  // };

  // const onSubmitOtp = (data) => {
  //   console.log(data);
  //   setIsFinalRegister(true);
  // };

  // const onSubmitFinalRegister = (data) => {

  //   history.push("/dashboard");
  // };

  const [isRegister, setIsRegister] = useState(!!token);
  const [isFinalRegister, setIsFinalRegister] = useState();
  const [isOtpVerified, setOtpVerification] = useState(false);
  const [userId, setUserId] = useState();
  const [loading, setLoading] = useState(false);

  const [registerLoader,setRegisterLoader] = useState(false);
  const [OTPLoader,setOTPLoader]= useState(false);
  const [resendLoader,setResendLoader] = useState(false);
  const [detailsLoader,setDetailsLoader] = useState(false);
  // const [error, setError] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [imageUploadUrl, setImageUploadUrl] = useState();
  console.log("imageUrl", imageUrl);

  const whichInputField = (inputType, inputName, name) => {
    switch (inputType) {
      case "input": {
        return <Input placeholder={inputName} className={`${name}__input`} />;
      }
      case "select": {
        return (
          <Select
            className={`${name}__input`}
            listItemHeight={10}
            listHeight={200}
            placeholder={inputName}
          >
            {["Freelancer","Startup","Digital Agency", "Enterprise"].map((data, index) => (
              <Option key={index}>{data}</Option>
            ))}
          </Select>
        );
      }
      case "textArea": {
        return (
          <TextArea className={`${name}__input`} placeholder={inputName} />
        );
      }
      default: {
        console.log("there is some problem");
      }
    }
  };

  const beforeUpload = async (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }

    const response = await Axios.get(
      `${apiURL}company/upload_dp_url?fileType=${file.type}`,getHeaders()
    );
    const { key, url } = response.data;
    setImageUploadUrl(url);
    setImageUrl(key);
    return isJpgOrPng && isLt2M;
  };

  const handleUpload = async (info) => {
    console.log(info.file.originFileObj);

    switch (info.file.status) {
      case "uploading":
        setLoading({ loading: true });
        return;

      case "done":
        console.log(info.file.originFileObj);

        return;
      default:
        // if(info.file){
        //   await Axios.put(imageUploadUrl,info.file);
        // }
        return;
    }
  };
  const imgProps = {
    // name: "avatar",
    listType: "picture-card",
    className: "avatar-uploader",
    showUploadList: false,
    method: "put",
    customRequest: async (data) =>
      await Axios.put(imageUploadUrl, data.file).then(() => {
        setImageUrl((imageUrl) => imageUrl+"?");
      }),
    headers: { token },
    beforeUpload: beforeUpload,
    onChange: handleUpload,
  };

  const onRegisterFinish = (value) => {
    // console.log(value);
    setRegisterLoader(true)
    Axios.post("company/register", value)
      .then((res) => {
        console.log(res);
        setUserId(res.data.userId);
        cookie.set("companytoken", res.data.token);
        setIsRegister(true);
        openNotification("Check Your Email for OTP",'info');
        setRegisterLoader(false);
      })
      .catch((e) => {
        console.log(e.response);
        openNotification("Something Went Wrong",'error');
        setRegisterLoader(false);

      });
  };

  const onRegisterFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  const onMailVerificationFinish = (value) => {
    setOTPLoader(true);
    Axios.post("company/verify_email", { otp: value.OTP }, getHeaders())
      .then((res) => {
        setOTPLoader(false);
        setOtpVerification(true);
        cookie.set("companytoken", res.data.token);
        setToken(res.data.token)
        openNotification("Email Verified Successfully", "success");
      })
      .catch((e) => {
        if (e.response.status === 400) {
          openNotification("Invalid OTP", "error");
        } else {
          openNotification("Something went wrong", "error");
        }
        setOTPLoader(false);

      });
  };
  const onMailVerificationFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  const onCompanyDetailFinish = async (value) => {
    const companyDetail = { ...value, logoUrl: imageUrl };
    setDetailsLoader(true);
    Axios.post("company/add_details", companyDetail,getHeaders())
      .then((res) => {
        openNotification("Account created successfully", "success");
        setDetailsLoader(false);

        history.push("/dashboard");
      })
      .catch((e) => {
        openNotification("Something Went Wrong", "error");
    setDetailsLoader(false);

      });
  };
  const resendOTP = () => {
    setResendLoader(true);
    Axios.get("company/resend_otp", getHeaders())
      .then(() => {
        openNotification("OTP sent successfully to your email", "success");
    setResendLoader(false);

      })
      .catch(() => {
        console.log("false");
        openNotification("Something Went Wrong", "error");
    setResendLoader(false);

      });
  };

  const openNotification = (message, type = "open") => {
    notification[type]({
      message: message,
      placement: 'bottomLeft'
    });

  };
  const onCompanyDetailFinishFailed = () => {};
  return (
    <div className="login-main-block">
      <img
        src={logo}
        alt=""
        onClick={() => {
          history.push("/");
        }}
        className="pracify-logo"
      />
      <ShowCaseCarousel />
      <div className="login-form-block">
        <h1 className="login__header">Sign Up</h1>
        {isRegister && !isFinalRegister && !isOtpVerified && (
          <>
            {/* <img src={arrowLeft} alt="" className="back-to-register"></img> */}
            <p className="OTP__para">
              "We've sent you One Time Password (OTP) to verify your email
              address. Please enter it to continue."
            </p>
            <div style={{textAlign:"right"}}>
              <Button loading={resendLoader} onClick={resendOTP}>Resend OTP</Button>
            </div>
          </>
        )}
        {!isRegister ? (
          <Form
            name="registrationForm"
            // initialValues={{ remember: true }}
            onFinish={onRegisterFinish}
            onFinishFailed={onRegisterFinishFailed}
            className="signUp-form-block"
          >
            {userDetail.map((userDetail, index) => {
              return (
                <div className={`${userDetail.name}`} key={index}>
                  <Form.Item
                    name={`${userDetail.name}`}
                    rules={userDetail.rule}
                  >
                    {userDetail.name === "password" ? (
                      <Input.Password
                        prefix={
                          <img src={userDetail.icon} alt="" className="" />
                        }
                        placeholder={userDetail.placeHolder}
                        className={`${userDetail.name}__input`}
                      />
                    ) : (
                      <Input
                        prefix={
                          <img src={userDetail.icon} alt="" className="" />
                        }
                        placeholder={userDetail.placeHolder}
                        className={`${userDetail.name}__input`}
                      />
                    )}
                  </Form.Item>
                </div>
              );
            })}
            <Form.Item>
              <Button htmlType="submit" loading={registerLoader} className="register__button">
                NEXT
              </Button>
            </Form.Item>
          </Form>
        ) : !isOtpVerified ? (
          <Form
            name="vForm"
            // initialValues={{ remember: true }}
            onFinish={onMailVerificationFinish}
            onFinishFailed={onMailVerificationFailed}
            className="signUp-form-block"
          >
            <div className="email-otp">
              <Form.Item
                name="OTP"
                rules={[{ required: true, message: "Please input your OTP!" }]}
              >
                <Input placeholder="Enter OTP" className="email-otp__input" />
              </Form.Item>
            </div>
            <Button htmlType="submit" loading={OTPLoader} className="register__button">
              VERIFY OTP
            </Button>
          </Form>
        ) : (
          <>
            <Form
              name="companyDetailForm"
              onFinish={onCompanyDetailFinish}
              onFinishFailed={onCompanyDetailFinishFailed}
              className="signUp-form-block"
            >
              <Upload {...imgProps}>
                {imageUrl ? (
                  <img
                    src={s3URL + imageUrl}
                    alt="avatar"
                    style={{ width: "100%" }}
                  />
                ) : loading ? (
                  <div>
                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                    <div className="ant-upload-text">Upload</div>
                  </div>
                ) : (
                  <div>
                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                    {/* <div className="ant-upload-text">their is some error</div> */}
                  </div>
                )}
              </Upload>

              {companyDetail.map((companyDetail, index) => (
                <div className={`${companyDetail.name}`} key={index}>
                  <Form.Item
                    name={companyDetail.name}
                    rules={companyDetail.rule}
                  >
                    {whichInputField(
                      companyDetail.type,
                      companyDetail.placeHolder,
                      companyDetail.name
                    )}
                  </Form.Item>
                </div>
              ))}
              <Form.Item>
                <Button htmlType="submit" loading={detailsLoader} className="register__button">
                  SUBMIT
                </Button>
              </Form.Item>
            </Form>
          </>
        )}
        {!isRegister && (
          <div className="newUserOrForgotPassword">
            <div className="newUser__span">
              Already a member?{" "}
              <span
                className="register__span"
                onClick={() => history.push("/login")}
              >
                Login
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
