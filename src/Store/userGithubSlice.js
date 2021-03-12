import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userGithubSlice = createSlice({
  name: "userGithub",
  initialState: {},
  reducers: {
    setUserGithub: (state, action) => {
      return (state = action.payload);
    },
    removeUserGithub: (state, action) => {
      state = {
        id: "",
      };
    },
  },
});

const { setUserGithub, removeUserGithub } = userGithubSlice.actions;

export { removeUserGithub };

// async action
export const getUserGithubInfo = (userName) => (dispatch) => {
  axios.get(`https://api.github.com/users/${userName}`).then(({ data }) => {
    dispatch(setUserGithub(data));
  });
};
export default userGithubSlice.reducer;
