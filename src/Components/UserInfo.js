import React from "react";
import { useSelector } from "react-redux";

import UserFollower from "../Components/UserFollower";
const UserInfo = () => {
  const { id } = useSelector((state) => state.userGithub);
  console.log(id);
  return (
    <div className="row text-center mt-5">
      <div className="col-md-6 text-left">
        <p className="mb-3 text-green-800">Information</p>
        <p>Name : {"ali jahangiri"}</p>
        <p>Location : {"Tehran , Iran"}</p>
        <p>Company : {"brain"}</p>
      </div>
      <div className="col-md-6">
        <UserFollower />
      </div>
    </div>
  );
};

export default UserInfo;
