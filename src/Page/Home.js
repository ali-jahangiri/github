import React from "react";
import { useDispatch } from "react-redux";
import { singOut } from "../Store/AuthSlice";

const Home = () => {
  const dispatch = useDispatch();
  const clickhandler = () => {
    dispatch(singOut());
  };
  return (
    <div>
      <button onClick={clickhandler}>click</button>
    </div>
  );
};

export default Home;
