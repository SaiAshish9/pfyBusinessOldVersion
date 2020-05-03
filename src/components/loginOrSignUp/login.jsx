import React from "react";
import cookie from "js-cookie";
import { Input, Button, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import ShowCaseCarousel from "./showCaseCarousel";
import arrowLeft from "../../assets/img/goBackLeftArrow.svg";
import mailIcon from "../../assets/img/loginOrSignUp/mailIcon.svg";
import passwordIcon from "../../assets/img/loginOrSignUp/passwordIcon.svg";

export default function Login() {
  const history = useHistory();

  const handleLogin = () => {
    cookie.set("token", "123");
    history.push("/dashboard");
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
            <span className="forgotPassword__span">Forgot password?</span>
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
    </div>
  );
}
