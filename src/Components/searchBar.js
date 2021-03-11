import React, { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const changeHandler = ({ target: { value } }) => {
    setValue(value);
  };
  return (
    <input
      className="border-green-800 border-2 p-2 outline-none"
      placeholder="search for username"
      value={value}
      onChange={changeHandler}
    />
  );
};

export default SearchBar;
