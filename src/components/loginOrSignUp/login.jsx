import axios from "axios";
import React, { useState } from "react";
import cookie from "js-cookie";
import { Input, Button, Checkbox, Form } from "antd";
import { useHistory } from "react-router-dom";
/* ---------------------------------- ***** --------------------------------- */
import ShowCaseCarousel from "./showCaseCarousel";
import arrowLeft from "../../assets/img/goBackLeftArrow.svg";
import mailIcon from "../../assets/img/loginOrSignUp/mailIcon.svg";
import passwordIcon from "../../assets/img/loginOrSignUp/passwordIcon.svg";
import logo from "../../assets/img/logoDark.png";

export default function Login() {
  const history = useHistory();
  const [forgetPass, setForgetPass] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [loginFailMsg, setLoginFailMsg] = useState("");

  const handleForgetPass = () => {
    setForgetPass(true);
  };

  const handleEmailForPassChange = () => {
    setResetPassword(true);
  };

  const handleConfirmPass = () => {
    setForgetPass(false);
    setResetPassword(false);
  };

  const onFinish = (value) => {
    console.log(value);
    axios
      .post("company/login", value)
      .then((res) => {
        console.log(res);
        const isCompanyDetailsExist = res.data.isCompanyDataExist;
        console.log("isCompanyDetailsExist", isCompanyDetailsExist);
        if (isCompanyDetailsExist === 1400) {
          history.push("/register", {
            isEmailVerify: true,
            token: res.data.token,
          });
          console.log("isCompanyDetailsExist", isCompanyDetailsExist);
        } else {
          cookie.set("token", res.data.token);
          history.push("/dashboard");
        }
      })
      .catch((e) => {
        console.log(e.response);
        setLoginFailMsg(e.response.data.message);
      });
  };
  const onFinishFailed = () => {};

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
      {!forgetPass ? (
        <div className="login-form-block">
          <h1 className="login__header">Login</h1>
          {!!loginFailMsg && <p>{loginFailMsg}!</p>}
          <Form
            name="loginForm"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className="form-block">
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  className="email__input"
                  prefix={<img src={mailIcon} alt="" className="" />}
                  placeholder="Email Address"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input.Password
                  className="password__input"
                  prefix={<img src={passwordIcon} alt="" className="" />}
                  placeholder="Password"
                />
              </Form.Item>
              <div className="rememberOrForgotPassword">
                <Checkbox className="remember-user">Remember Me</Checkbox>
                <span
                  className="forgotPassword__span"
                  onClick={handleForgetPass}
                >
                  Forgot password?
                </span>
              </div>
              <Form.Item>
                <Button className="login__button" htmlType="submit">
                  LOGIN
                </Button>
              </Form.Item>
              <div className="newUser__span">
                New Here?{" "}
                <span
                  className="register__span"
                  onClick={() => {
                    history.push("/register");
                  }}
                >
                  Register
                </span>
              </div>
            </div>
          </Form>
        </div>
      ) : !resetPassword ? (
        <div className="login-form-block">
          <h1 className="login__header">FORGOT PASSWORD</h1>
          <p className="">Enter your registered Email Address</p>
          <div className="form-block">
            <Input
              className="email__input"
              prefix={<img src={mailIcon} alt="" className="" />}
              placeholder="Email Address"
            />
            <Button
              className="login__button"
              onClick={handleEmailForPassChange}
            >
              SUBMIT
            </Button>
            <div className="newUser__span">
              <span>
                <img src={arrowLeft} alt="" className="" />
              </span>
              {"  "}
              Back To{" "}
              <span
                className="register__span"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="login-form-block">
          <h1 className="login__header">RESET PASSWORD</h1>
          <p className="">
            Please enter new password to login into your Pracify account
          </p>

          <div className="form-block">
            <Input.Password
              className="password__input"
              prefix={<img src={passwordIcon} alt="" className="" />}
              placeholder="Enter New Password"
            />
            <Input.Password
              className="password__input"
              prefix={<img src={passwordIcon} alt="" className="" />}
              placeholder="Confirm New Password"
            />
            <Button className="login__button" onClick={handleConfirmPass}>
              CONFIRM
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
