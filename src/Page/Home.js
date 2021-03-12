import React from "react";

import GithubSignInModal from "../Components/GithubSignInModal";
import SearchBar from "../Components/searchBar";

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
            <UserInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
