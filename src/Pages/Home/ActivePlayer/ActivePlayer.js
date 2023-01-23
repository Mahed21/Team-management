import React from "react";

const ActivePlayer = (props) => {
  const { email, userName } = props.data;
  return (
    <tr>
      <td className="text-center">{userName}</td>
      <td className="text-center"> {email}</td>
      {/* <td className="text-center">
        <button className="btn rounded">Update Profile</button>
      </td> */}
    </tr>
  );
};

export default ActivePlayer;
