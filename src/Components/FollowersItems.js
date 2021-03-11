import React from "react";

const FollowersItem = ({ avatar_url, login, html_url }) => {
  return (
    <a
      className="border-2 border-red-100 my-3 flex items-center justify-around"
      href={html_url}
    >
      <img
        alt="follower"
        src={avatar_url}
        className="w-12 transform scale-150"
      />
      <p>{login}</p>
    </a>
  );
};

export default FollowersItem;
