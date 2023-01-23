import React, { useEffect, useState } from "react";
import ActiveTeam from "./Active Team/ActiveTeam";
import ActivePlayer from "./ActivePlayer/ActivePlayer";

import "./Home.css";

const Home = () => {
  const [activeUser, setActiveUser] = useState([]);
  const [activeTeam, setActiveTeam] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.data.filter(
          (datas) => datas.status === "active"
        );

        setActiveUser(fetchData);
        //console.log(activeUser);
      });
  }, [activeUser]);
  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.data.filter(
          (datas) => datas.status === "active"
        );

        setActiveTeam(fetchData);
        //console.log(activeUser);
      });
  }, [activeUser]);
  return (
    <div className="mt-5">
      <div className="home"></div>
      <div className="container">
        <div className="active-player">
          <h1 className="text-center">All Active Player</h1>
        </div>
        <table class="table mt-5">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                Player Name
              </th>
              <th scope="col" className="text-center">
                email
              </th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {activeUser.map((data) => (
              <ActivePlayer data={data} key={data._id}></ActivePlayer>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container">
        <div className="active-player">
          <h1 className="text-center">All Active Player</h1>
        </div>
        <table class="table mt-5">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                Team Name
              </th>
              <th scope="col" className="text-center">
                Team Address
              </th>
              <th scope="col" className="text-center">
                Team Manager Email
              </th>

              <th scope="col" className="text-center"></th>
              <th scope="col" className="text-center"></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {activeTeam.map((data) => (
              <ActiveTeam data={data} key={data._id}></ActiveTeam>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
