import React from "react";
import { NavLink } from "react-router-dom";
import loginImage from "../../image/login.png";

const register = () => {
  return (
    <div className="container">
      <div className="row row-cols-lg-2 login d-flex align-items-center ">
        <div className="d-flex justify-content-center">
          <img src={loginImage} alt="" />
        </div>
        <div className="d-flex justify-content-center login-input">
          <div>
            <h5>Registration form</h5>
            <br />
            <input placeholder="Enter Full Name" type="text" />
            <br />
            <br />
            <input placeholder="Enter email" type="text" />
            <br />
            <br />
            <input placeholder="Register as team or user" type="text" />
            <br />
            <br />
            <input placeholder="Enter Password" type="password" />
            <br />
            <br />
            <input placeholder="Confirm Password" type="password" />
            <br />
            <br />
            <NavLink to="/login" className="navLink ">
              Already have account?
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

export default register;
