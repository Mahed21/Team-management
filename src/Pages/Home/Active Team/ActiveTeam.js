import React from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";

const ActiveTeam = (props) => {
  let navigate = useNavigate();
  const { user } = UseAuth();
  const { teamName, address, email, _id } = props.data;
  const memberAdding = (id) => {
    if (user.email) {
      navigate("/teamDetails", {
        state: {
          id: id,
          teamName: teamName,
          searchingEmail: email,
          address: address,
        },
      });
    } else {
      navigate("/home");
    }
  };
  const viewTeamMember = (id) => {
    navigate("/teamMember", {
      state: {
        id: id,
        teamName: teamName,
        searchingEmail: email,
        address: address,
      },
    });
  };
  return (
    <tr>
      <td className="text-center">{teamName}</td>
      <td className="text-center"> {address}</td>
      <td className="text-center"> {email}</td>
      <td className="text-center">
        <button className="btn rounded" onClick={() => viewTeamMember(_id)}>
          View All Team Member
        </button>
      </td>
      <td className="text-center">
        <button className="btn rounded" onClick={() => memberAdding(_id)}>
          Applied as Team Member
        </button>
      </td>
    </tr>
  );
};

export default ActiveTeam;
