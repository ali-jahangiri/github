import React from "react";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const { id } = useSelector((state) => state.userGithub);
  return (
    <div>
      <p className="mb-3 text-green-800">Information</p>
      <p>Name : {"ali jahangiri"}</p>
      <p>Location : {"Tehran , Iran"}</p>
      <p>Company : {"brain"}</p>
    </div>
  );
};

export default UserInfo;
