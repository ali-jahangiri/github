import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import debounce from "../Utils/debounce";

import { setGithubModal } from "../Store/UiSlice";
import { setUserGithub } from "../Store/userGithubSlice";

const GithubInputSetter = () => {
  const [value, setValue] = useState("");
  const [userImag, setUserImag] = useState("");
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(setGithubModal(false));
    dispatch(setUserGithub(value));
    setValue("");
  };
  const searchUserImage = debounce(() => {
    axios.get(`https://api.github.com/users/${value.trim()}`).then((data) => {
      console.log(data);
    });
  }, 1000);

  const onChangeHandler = ({ target: { value } }) => {
    setValue(value.trim());
    // (() => searchUserImage())();
  };
  return (
    <>
      <input
        onChange={onChangeHandler}
        value={value}
        placeholder="Enter your id"
        className="bg-transparent border-b-2 border-gray-50 text-2xl border-opacity-50 placeholder-red-100 text-red-100 transition duration-200 w-3/5 p-2 outline-none focus:border-opacity-100"
      />
      <button onClick={submitHandler} className="text-2xl text-red-200">
        save
      </button>
    </>
  );
};

export default GithubInputSetter;
