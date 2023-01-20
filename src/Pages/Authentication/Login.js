import React, { useEffect } from "react";
import "./Authentication.css";
import loginImage from "../../image/login.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useToken from "../../hooks/useToken";

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [user, setUser] = useState('');
  let signInError;

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = data => {
    setUser(data)
  };

  const [token] = useToken(user)

  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, [token, navigate])

  console.log(token);

  return (
    <div className="container">
      <div className="row row-cols-lg-2 login d-flex align-items-center ">
        <div className="d-flex justify-content-center">
          <img src={loginImage} alt="" />
        </div>
        <div className="d-flex justify-content-center login-input">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h5>Login form</h5>
              <br />

              <div>
                <input placeholder="Enter email" type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: 'Email is Required'
                    }
                  })} />
                <br />
                <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>
              </div>
              <br />
              <br />
              <div>
                <input placeholder="Enter Password" type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: 'Password is Required'
                    }
                  })} />
                <br />
                <label className="label">
                  {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>
              </div>
              <br />
              {signInError}
              <br />
              <NavLink to="/register" className="navLink ">
                Didn't have account?
              </NavLink>

              <br />
              <input type="submit" value="Login" className="login-btn  pt-2 pb-2 w-100 rounded mt-2" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
