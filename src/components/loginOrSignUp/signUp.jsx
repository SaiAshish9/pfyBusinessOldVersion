import React, { useState, useRef } from "react";
import { Input, Button, Select, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
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

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export default function SignUp() {
  const history = useHistory();
  const inputRef = useRef();
  const { control, handleSubmit, watch, reset, errors } = useForm({
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
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const whichInputField = (inputType, formName) => {
    switch (inputType) {
      case "input": {
        return <Input className={`${formName}__input`} />;
      }
      case "select": {
        return (
          <Select
            className={`${formName}__input`}
            listItemHeight={10}
            listHeight={250}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((data, index) => (
              <Option key={index}> {data}</Option>
            ))}
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

  const handleUpload = (info) => {
    if (info.file.status === "uploading") {
      setLoading({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageUrl(imageUrl);
      });
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
                name="otp"
                control={control}
                rules={{ required: true, minLength: 3 }}
              />
              {errors.otp && errors.otp.type === "required" && (
                <span>This is required</span>
              )}
              {errors.otp && errors.otp.type === "minLength" && (
                <span>should have 3 character</span>
              )}
            </div>
            <Button htmlType="submit" className="register__button">
              VERIFY OTP
            </Button>
          </form>
        ) : (
          <>
            <form
              onSubmit={handleSubmit(onSubmitFinalRegister)}
              className="signUp-form-block"
            >
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleUpload}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  <div>
                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                    <div className="ant-upload-text">Upload</div>
                  </div>
                )}
              </Upload>

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
                    // onFocus={() => inputRef.current.focus()}
                  />
                </div>
              ))}
              <Button htmlType="submit" className="register__button">
                REGISTER
              </Button>
            </form>
          </>
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
