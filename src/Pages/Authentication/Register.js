import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import loginImage from "../../image/login.png";

const Register = () => {
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
              <h5>Registration form</h5>
              <br />
              <div>
                <input placeholder="Enter Name" type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: 'Name is Required'
                    }
                  })} />
                <br />
                <label className="label">
                  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
              </div>
              <br />
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
                <input placeholder="Enter Team" type="text"
                  {...register("team", {
                    required: {
                      value: true,
                      message: 'Team is Required'
                    }
                  })} />
                <br />
                <label className="label">
                  {errors.team?.type === 'required' && <span className="label-text-alt text-red-500">{errors.team.message}</span>}
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
              <br />
              <div>
                <input placeholder="Confirm Password" type="password"
                  {...register("cpassword", {
                    required: {
                      value: true,
                      message: 'Confirm Password is Required'
                    }
                  })} />
                <br />
                <label className="label">
                  {errors.cpassword?.type === 'required' && <span className="label-text-alt text-red-500">{errors.cpassword.message}</span>}
                </label>
              </div>
              <br />
              {signInError}
              <br />
              <NavLink to="/login" className="navLink ">
                Already have account?
              </NavLink>

              <br />
              <input type="submit" value="Register" className="login-btn  pt-2 pb-2 w-100 rounded mt-2" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
