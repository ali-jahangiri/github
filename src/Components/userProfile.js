import React from "react";
import { useSelector } from "react-redux";

import SignInGitHub from "./SignInGithub";
import UserDetails from "./userDetails";

const UserDetail = () => {
  const userDetails = useSelector((state) => state.userGithub);
  if (!userDetails.id) return <SignInGitHub />;
  return <UserDetails />;
};

export default UserDetail;
