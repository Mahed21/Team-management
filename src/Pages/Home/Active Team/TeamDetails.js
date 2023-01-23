import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Home.css";
import teamImage from "../../../image/teamRegister.png";
import UseAuth from "../../Context/UseAuth";

const TeamDetails = () => {
  let navigate = useNavigate();
  const { user } = UseAuth();
  const location = useLocation();
  const { id, teamName, searchingEmail, address } = location.state;
  const [playerName, setPlayerName] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const PlayerInformation = {
      teamName: teamName,
      adminEmail: searchingEmail,
      playerEmail: user.email,
      playerName: playerName,
    };
    fetch(`http://localhost:5000/member`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(PlayerInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Sucessfully added");
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
                <h5>
                  Fill up the form form if you want to be part of team member
                </h5>
                <br />

                <div>
                  <input
                    placeholder="Team Name"
                    type="text"
                    value={teamName}
                    readOnly
                  />
                </div>
                <br />
                <br />
                <div>
                  <input
                    placeholder="Enter Name"
                    type="text"
                    onChange={(e) => setPlayerName(e.target.value)}
                  />
                </div>
                <br />
                <br />
                <div>
                  <input
                    placeholder="Enter Address"
                    type="text"
                    value={user.email}
                    readOnly
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

export default TeamDetails;
