import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import teamImage from "../../../image/teamRegister.png";

const DisplayUpdateProfile = (props) => {
  let navigate = useNavigate();
  const { email, userName } = props.data;
  const [name, setName] = useState(userName);
  const [history, setHistory] = useState("");
  const [achievements, setAchivement] = useState(userName);
  const handleLogin = (e) => {
    e.preventDefault();
    const updatestatus = {
      userName: name,
      tournamentHistory: history,
      achievement: achievements,
    };
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatestatus),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("succssfully Updated Profile");
        navigate("/home");
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
                <h5>Update Profile</h5>
                <br />

                <div>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <br />
                <br />
                <div>
                  <input
                    placeholder="Enter Team Name"
                    type="text"
                    value={email}
                    readOnly
                  />
                </div>
                <br />
                <br />
                <div>
                  <input
                    placeholder="Enter Tournament History"
                    type="text"
                    onChange={(e) => setHistory(e.target.value)}
                    required
                  />
                </div>
                <br />
                <br />
                <div>
                  <input
                    placeholder="Enter Achievement"
                    type="text"
                    onChange={(e) => setAchivement(e.target.value)}
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

export default DisplayUpdateProfile;
