import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DisplayeTeamMember from "./DisplayeTeamMember";

const TeamMember = () => {
  const location = useLocation();
  const { id, teamName, searchingEmail, address } = location.state;
  const [member, setMember] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/member")
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.data.filter(
          (datas) => datas.adminEmail === searchingEmail
        );

        setMember(fetchData);
        //console.log(activeUser);
      });
  }, [searchingEmail]);
  return (
    <div className="teamMember">
      <div className="container">
        <table class="table mt-5">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                Player Name
              </th>
              <th scope="col" className="text-center">
                email
              </th>
              <th scope="col" className="text-center">
                TeamName
              </th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {member.map((data) => (
              <DisplayeTeamMember
                data={data}
                key={data._id}
              ></DisplayeTeamMember>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamMember;
