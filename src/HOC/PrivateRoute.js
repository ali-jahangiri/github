import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ ...rest }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return <>{!isLogin ? <Redirect to="/login" /> : <Route {...rest} />}</>;
};

export default PrivateRoute;
