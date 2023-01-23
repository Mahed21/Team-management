import React, { useEffect, useState } from "react";
import UseAuth from "../../Context/UseAuth";
import DisplayUpdateProfile from "./DisplayUpdateProfile";

const UpdateProfile = () => {
  const { user } = UseAuth();
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.data.filter(
          (datas) => user.email === datas.email
        );

        setProfile(fetchData);
      });
  }, [user.email]);
  return (
    <div>
      {profile.map((data) => (
        <DisplayUpdateProfile data={data} key={data._id}></DisplayUpdateProfile>
      ))}
    </div>
  );
};

export default UpdateProfile;
