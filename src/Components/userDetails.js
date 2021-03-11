import React from "react";
import { useSelector } from "react-redux";

import useImmediate from "../Hooks/useImmediate";

const UserDetails = () => {
  const { id } = useSelector((state) => state.userGithub);
  return (
    <div className="w-64 h-64 flex items-center justify-center bg-green-900 text-red-200 relative">
      <p>{id}</p>
      <img
        className="absolute w-1/2 -right-10 -top-10 "
        src={"https://avatars.githubusercontent.com/u/74720040?v=4"}
        alt="userimage"
      />
    </div>
  );
};

export default UserDetails;
