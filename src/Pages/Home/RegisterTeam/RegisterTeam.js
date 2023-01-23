import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import teamImage from "../../../image/teamRegister.png";
import UseAuth from "../../Context/UseAuth";

const RegisterTeam = () => {
  let navigate = useNavigate();
  const { user } = UseAuth();

  const [teamName, setTeam] = useState("");
  const [address, setAddress] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    const TeamInformation = {
      teamName: teamName,
      email: user.email,
      address: address,
    };
    fetch(`http://localhost:5000/team`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(TeamInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          navigate("/home");
        }
      });
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="row row-cols-lg-2 login d-flex align-items-center ">
          <div className="d-flex justify-content-center">
            <img src={teamImage} alt="" />
          </div>
          <div className="d-flex justify-content-center login-input">
            <div>
              <form onSubmit={handleLogin}>
                <h5>Register For a Team</h5>
                <br />

                <div>
                  <input
                    placeholder="Enter Team Name"
                    type="text"
                    onChange={(e) => setTeam(e.target.value)}
                    required
                  />
                </div>
                <br />
                <br />
                <div>
                  <input
                    placeholder="Enter Team Name"
                    type="text"
                    value={user.email}
                    readOnly
                  />
                </div>
                <br />
                <br />
                <div>
                  <input
                    placeholder="Enter Address"
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>

                <br />
                <input
                  type="submit"
                  value="Submit"
                  className="login-btn  pt-2 pb-2 w-100 rounded mt-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterTeam;
