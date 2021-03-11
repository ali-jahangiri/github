import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";

import { signIn } from "../Store/AuthSlice";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const onSuccess = ({ profileObj }) => {
    dispatch(signIn(profileObj));
    history.push("/");
  };
  const onFailure = ({ error }) => alert(error);
  return (
    <div className="text-center flex justify-center items-center h-screen">
      <div>
        <p className="text-green-900 text-4xl font-bold mb-3">
          Login with Google Account
        </p>
        <GoogleLogin
          style={{ color: "red" }}
          className="google__submit"
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onFailure={onFailure}
          onSuccess={onSuccess}
        />
      </div>
    </div>
  );
};

export default Login;
