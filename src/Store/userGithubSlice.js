import { createSlice } from "@reduxjs/toolkit";

const userGithubSlice = createSlice({
  name: "userGithub",
  initialState: {
    id: "",
  },
  reducers: {
    setUserGithub: (state, action) => {
      state.id = action.payload;
    },
    removeUserGithub: (state, action) => {
      state = {
        id: "",
      };
    },
  },
});

export const { setUserGithub, removeUserGithub } = userGithubSlice.actions;
export default userGithubSlice.reducer;
