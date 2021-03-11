import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGithubModal } from "../Store/UiSlice";

const SignInGitHub = () => {
  const isModalOpen = useSelector((state) => state.ui.isGithubModalOpen);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(setGithubModal(!isModalOpen));
  };
  return (
    <div className="mt-5">
      <div className="w-64 h-64 flex items-center bg-green-900 text-red-200">
        <p className="p-3">
          Please
          <span
            onClick={clickHandler}
            id="githubLogin"
            className="font-semibold p-2"
          >
            Login
          </span>
          with Github to see Details
        </p>
      </div>
    </div>
  );
};

export default SignInGitHub;
