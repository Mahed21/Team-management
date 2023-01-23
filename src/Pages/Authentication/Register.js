import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import loginImage from "../../image/login.png";
import UseAuth from "../Context/UseAuth";

const Register = () => {
  const { emailPassSignIn } = UseAuth();
  let navigate = useNavigate();
  const [isUser, setIsUser] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [passWord, setPassword] = useState("");
  // const [isTeam, setIsTeam] = useState("team");
  const [error, setError] = useState("");

  //console.log(token);
  // const isUserFunction = () => {
  //   setIsUser("user");
  //   setIsTeam("");
  // };
  // const isTeamFunction = () => {
  //   setIsTeam("team");
  //   setIsUser("");
  // };
  const register = (e) => {
    e.preventDefault();

    if (passWord !== confirmPassword) {
      setError("Password and Confirm Password is not same");
    } else {
      emailPassSignIn(email, passWord, navigate, name);
    }
  };

  return (
    <div className="container">
      <div className="row row-cols-lg-2 login d-flex align-items-center ">
        <div className="d-flex justify-content-center">
          <img src={loginImage} alt="" />
        </div>
        <div className="d-flex justify-content-center login-input">
          <div>
            <form onSubmit={register}>
              <h5>Registration form</h5>
              <br />
              <div>
                <input
                  placeholder="Enter Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <br />
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
              <br />
              <div>
                <input
                  placeholder="Confirm Password"
                  type="password"
                  onChange={(e) => setConfirmPassowrd(e.target.value)}
                  required
                />
                <br />
              </div>
              {/* <h5>Register as a?</h5> */}
              {/* radio  */}
              {/* <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={isUserFunction}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  User
                </label>
              </div> */}
              {/* <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                  onClick={isTeamFunction}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Team
                </label>
              </div> */}
              <br />
              <NavLink to="/login" className="navLink ">
                Already have account?
              </NavLink>
              <br />
              <input
                type="submit"
                value="Register"
                className="login-btn  pt-2 pb-2 w-100 rounded mt-2"
              />
              <br />
              <p>{error}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
