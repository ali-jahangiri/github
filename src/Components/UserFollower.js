import React from "react";
import { useSelector } from "react-redux";
import useImmediate from "../Hooks/useImmediate";
import FollowersItem from "./FollowersItems";

const UserFollower = () => {
  const { id } = useSelector((state) => state.userGithub);
  const { result } = useImmediate(
    `https://api.github.com/users/${id}/followers`
  );
  return (
    <div>
      <p className="text-green-800">Followers</p>
      {result?.map((el, i) => (
        <FollowersItem key={i} {...el} />
      ))}
    </div>
  );
};

export default UserFollower;
