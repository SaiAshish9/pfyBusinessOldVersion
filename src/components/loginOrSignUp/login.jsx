import React from "react";
import cookie from "js-cookie";
import { Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import ShowCaseCarousel from "./showCaseCarousel";
import arrowLeft from "../../assets/img/goBackLeftArrow.svg";

export default function Login() {
  const history = useHistory();

  const handleLogin = () => {
    cookie.set("token", "123");
    history.push("/home");
  };

  return (
    <div className="login-main-block">
      <div className="login-form-block">
        <h4
          className="goBackToPracify"
          onClick={() => {
            history.push("/");
          }}
        >
          <img src={arrowLeft} alt="" className="goBackArrow" /> Pracify
        </h4>
        <h1 className="login__header">Login</h1>

        <p className="login__para">Get Started!</p>
        <div className="form-block">
          <p className="email__label">Email Address</p>
          <Input className="email__input" />
          <p className="password__label">Password</p>
          <Input className="password__input" />
          <Button className="login__button" onClick={handleLogin}>
            LOGIN
          </Button>
        </div>
        <div className="newUserOrForgotPassword">
          <span className="newUser__span">
            New Here?{" "}
            <span
              className="register__span"
              onClick={() => {
                history.push("/register");
              }}
            >
              Register
            </span>
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
