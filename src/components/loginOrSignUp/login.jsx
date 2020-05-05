import React, { useState } from "react";
import cookie from "js-cookie";
import { Input, Button, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import ShowCaseCarousel from "./showCaseCarousel";
import arrowLeft from "../../assets/img/goBackLeftArrow.svg";
import mailIcon from "../../assets/img/loginOrSignUp/mailIcon.svg";
import passwordIcon from "../../assets/img/loginOrSignUp/passwordIcon.svg";

export default function Login() {
  const history = useHistory();
  const [forgetPass, setForgetPass] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

  const handleLogin = () => {
    cookie.set("token", "123");
    history.push("/dashboard");
  };

  const handleForgetPass = () => {
    setForgetPass(true);
  };

  const handleEmail = () => {
    setResetPassword(true);
  };

  const handleConfirmPass = () => {
    setForgetPass(false);
    setResetPassword(false);
  };

  return (
    <div className="login-main-block">
      <h4
        className="goBackToPracify"
        onClick={() => {
          history.push("/");
        }}
      >
        <img src={arrowLeft} alt="" className="goBackArrow" /> Pracify
      </h4>
      <ShowCaseCarousel />
      {!forgetPass ? (
        <div className="login-form-block">
          <h1 className="login__header">Login</h1>

          {/* <p className="login__para">Get Started!</p> */}
          <div className="form-block">
            {/* <p className="email__label">Email Address</p> */}
            <Input
              className="email__input"
              prefix={<img src={mailIcon} alt="" className="" />}
              placeholder="Email Address"
            />
            {/* <p className="password__label">Password</p> */}
            <Input.Password
              className="password__input"
              prefix={<img src={passwordIcon} alt="" className="" />}
              placeholder="Password"
            />
            <div className="rememberOrForgotPassword">
              <Checkbox className="remember-user">Remember Me</Checkbox>
              <span className="forgotPassword__span" onClick={handleForgetPass}>
                Forgot password?
              </span>
            </div>

            <Button className="login__button" onClick={handleLogin}>
              LOGIN
            </Button>
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
            <Button className="login__button" onClick={handleEmail}>
              SUBMIT
            </Button>
            <div className="newUser__span">
              <span>
                <img src={arrowLeft} alt="" className="" />
              </span>{"  "}
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
