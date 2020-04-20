import React from "react";
import { Input, Button } from "antd";
import ShowCaseCarousel from "./showCaseCarousel";

export default function Login() {
  return (
    <div className="login-main-block">
      <div className="login-form-block">
        <h1 className="login__header">Login</h1>
        <p className="login__para">Get Started!</p>
        <div className="form-block">
          <p className="email__label">Email Address</p>
          <Input className="email__input" />
          <p className="password__label">Password</p>
          <Input className="password__input" />
          <Button className="login__button">LOGIN</Button>
        </div>
        <div className="newUserOrForgotPassword">
          <span className="newUser__span">
            New Here? <span className="register__span">Register</span>
          </span>
          <span className="forgotPassword__span">Forgot password?</span>
        </div>
      </div>
      <div className="login-showcase-carousel-block">
        <ShowCaseCarousel></ShowCaseCarousel>
      </div>
    </div>
  );
}
