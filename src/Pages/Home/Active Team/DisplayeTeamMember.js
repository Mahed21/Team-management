import React from "react";

const DisplayeTeamMember = (props) => {
  const { teamName, playerEmail, playerName } = props.data;
  return (
    <tr>
      <td className="text-center">{playerName}</td>
      <td className="text-center"> {playerEmail}</td>
      <td className="text-center"> {teamName}</td>
    </tr>
  );
};

export default DisplayeTeamMember;
