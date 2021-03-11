import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import GithubSignInModal from "../Components/GithubSignInModal";
import SearchBar from "../Components/searchBar";
import UserFollower from "../Components/UserFollower";
import UserInfo from "../Components/UserInfo";
import UserDetail from "../Components/userProfile";

const Home = () => {
  return (
    <>
      <GithubSignInModal />
      <div className="container mt-16 ">
        <div className="row">
          <div className="col-md-3">
            <UserDetail />
          </div>
          <div className="col-md-9">
            <SearchBar />
            <div className="row text-center mt-5">
              <div className="col-md-6 text-left">
                <UserInfo />
              </div>
              <div className="col-md-6">
                <UserFollower />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
