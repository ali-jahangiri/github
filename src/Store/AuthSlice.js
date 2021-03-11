import { createSlice } from "@reduxjs/toolkit";

const INIT = {
  isLogin: false,
  profile: {},
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState: { ...INIT },
  reducers: {
    signIn: (state, action) => {
      state.isLogin = true;
      state.profile = action.payload;
    },
    singOut: (state, action) => (state = INIT),
  },
});

export const { signIn, singOut } = AuthSlice.actions;
export default AuthSlice.reducer;
