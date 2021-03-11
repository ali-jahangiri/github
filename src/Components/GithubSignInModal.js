import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGithubModal } from "../Store/UiSlice";
import GithubInputSetter from "./GithubsetterInput";

const GithubSignInModal = () => {
  const isModalOpen = useSelector((state) => state.ui.isGithubModalOpen);
  const dispatch = useDispatch();
  return (
    <div
      className={`w-screen h-screen absolute bg-green-800 top-0 left-0 z-10 bg-opacity-90 justify-center flex items-center  ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <div className="text-4xl text-center">
        <p className="mb-5">
          Sign in with your Github account to get your Information
        </p>
        <GithubInputSetter />
      </div>
      <p
        onClick={() => dispatch(setGithubModal(false))}
        className="absolute top-10 left-8 cursor-pointer"
      >
        close
      </p>
    </div>
  );
};

export default GithubSignInModal;
