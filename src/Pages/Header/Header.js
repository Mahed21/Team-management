import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import icon from "../../image/mainLogo.png";
import UseAuth from "../Context/UseAuth";
const Header = () => {
  let navigate = useNavigate();
  const { user, Logout } = UseAuth();
  const [checkActive, setCheckActive] = useState(false);
  const [checkAlreadyTeam, setCheckAlreadyTeam] = useState(false);
  const [checkTeamActive, setCheckTeamActive] = useState(false);
  //check active player
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.data.filter(
          (datas) => user.email === datas.email && datas.status === "active"
        );

        if (fetchData.length > 0) {
          setCheckActive(true);
        } else {
          setCheckActive(false);
        }
      });
  }, [user.email]);

  //check already registerd
  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.data.filter(
          (datas) => user.email === datas.email
        );

        if (fetchData.length > 0) {
          setCheckAlreadyTeam(true);
        } else {
          setCheckAlreadyTeam(false);
        }
      });
  }, [user.email]);
  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.data.filter(
          (datas) => user.email === datas.email && datas.status === "active"
        );

        if (fetchData.length > 0) {
          setCheckTeamActive(true);
        } else {
          setCheckTeamActive(false);
        }
      });
  }, [user.email]);

  const activePlayer = (e) => {
    e.preventDefault();
    const updatestatus = {
      status: "active",
    };
    fetch(`http://localhost:5000/user/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatestatus),
    })
      .then((res) => res.json())
      .then((data) => {
        setCheckActive(true);
        alert("succssfully activated as player");
      });
  };
  const InActivePlayer = (e) => {
    e.preventDefault();
    const updatestatus = {
      status: "inactive",
    };
    fetch(`http://localhost:5000/user/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatestatus),
    })
      .then((res) => res.json())
      .then((data) => {
        setCheckActive(false);
        alert("succssfully Inactive as player");
      });
  };

  //update team active
  const activeTeam = (e) => {
    e.preventDefault();
    const updatestatus = {
      status: "active",
    };
    fetch(`http://localhost:5000/team/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatestatus),
    })
      .then((res) => res.json())
      .then((data) => {
        setCheckTeamActive(true);
        alert("succssfully activated team");
      });
  };
  const InActiveTeam = (e) => {
    e.preventDefault();
    const updatestatus = {
      status: "inactive",
    };
    fetch(`http://localhost:5000/team/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatestatus),
    })
      .then((res) => res.json())
      .then((data) => {
        setCheckTeamActive(false);
        alert("succssfully Inactive team");
      });
  };

  return (
    <div className="header container pt-2 pb-2">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div className="navbar-brand">
            <NavLink class=" header-text ">
              <img src={icon} alt="" className="logo" />
            </NavLink>
          </div>
          <button
            class="navbar-toggler toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item me-3">
                <NavLink
                  class="nav-link active "
                  aria-current="page"
                  to="/home"
                >
                  <button className="btn rounded">Home</button>
                </NavLink>
              </li>

              {user.email ? (
                <li class="nav-item dropdown me-3">
                  <NavLink
                    class="nav-link dropdown-toggle  "
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <button className="btn rounded">dropdown</button>
                  </NavLink>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {user.email && checkActive ? (
                      <li>
                        <NavLink class="dropdown-item" onClick={InActivePlayer}>
                          Inactive Player
                        </NavLink>
                      </li>
                    ) : user.email ? (
                      <li>
                        <NavLink class="dropdown-item  " onClick={activePlayer}>
                          Active Player
                        </NavLink>
                      </li>
                    ) : (
                      ""
                    )}

                    {!checkAlreadyTeam ? (
                      <li>
                        <NavLink
                          class="dropdown-item nav-link  "
                          to="/registerTeam"
                        >
                          Register Team
                        </NavLink>
                      </li>
                    ) : checkTeamActive ? (
                      <li>
                        <NavLink
                          class="dropdown-item nav-link "
                          onClick={InActiveTeam}
                        >
                          Inactive Team
                        </NavLink>
                      </li>
                    ) : user.email ? (
                      <li>
                        <NavLink
                          class="dropdown-item nav-link "
                          onClick={activeTeam}
                        >
                          Active Team
                        </NavLink>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </li>
              ) : (
                ""
              )}
              {user.email ? (
                <li class="nav-item me-3">
                  <NavLink
                    class="nav-link   "
                    aria-current="page"
                    to="/updateProfile"
                  >
                    <button className="btn rounded">update Profile</button>
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              {user.email ? (
                <li class="nav-item ">
                  <NavLink
                    class="nav-link   "
                    aria-current="page"
                    to="/login"
                    onClick={Logout}
                  >
                    <button className="btn rounded">LogOut</button>
                  </NavLink>
                </li>
              ) : (
                <li class="nav-item">
                  <NavLink class="nav-link   " aria-current="page" to="/login">
                    <button className="btn rounded">Login</button>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
