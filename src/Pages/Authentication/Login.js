import React, { useEffect, useState } from "react";
import "./Authentication.css";
import loginImage from "../../image/login.png";
import { NavLink, useNavigate } from "react-router-dom";
import UseAuth from "../Context/UseAuth";

const Login = () => {
  const { emailPassLogIn } = UseAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    emailPassLogIn(email, password, navigate);
  };
  return (
    <div className="container">
      <div className="row row-cols-lg-2 login d-flex align-items-center ">
        <div className="d-flex justify-content-center">
          <img src={loginImage} alt="" />
        </div>
        <div className="d-flex justify-content-center login-input">
          <div>
            <form onSubmit={handleLogin}>
              <h5>Login form</h5>
              <br />

              <div>
                <input
                  placeholder="Enter email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <br />
              <br />
              <div>
                <input
                  placeholder="Enter Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <br />
              <NavLink to="/register" className="navLink ">
                Didn't have account?
              </NavLink>

              <br />
              <input
                type="submit"
                value="Login"
                className="login-btn  pt-2 pb-2 w-100 rounded mt-2"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
