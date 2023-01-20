import React from "react";
import "./Authentication.css";
import loginImage from "../../image/login.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="row row-cols-lg-2 login d-flex align-items-center ">
        <div className="d-flex justify-content-center">
          <img src={loginImage} alt="" />
        </div>
        <div className="d-flex justify-content-center login-input">
          <div>
            <h5>Login form</h5>
            <br />

            <input placeholder="Enter email" type="text" />
            <br />
            <br />
            <input placeholder="Enter Password" type="password" />
            <br />
            <br />
            <NavLink to="/register" className="navLink ">
              Didn't have account?
            </NavLink>

            <br />
            <button className="login-btn  pt-2 pb-2 w-100 rounded mt-2">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
