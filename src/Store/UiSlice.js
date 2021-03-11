import { createSlice } from "@reduxjs/toolkit";

const UiSlice = createSlice({
  name: "ui",
  initialState: {
    isGithubModalOpen: false,
  },
  reducers: {
    setGithubModal: (state, action) => {
      state.isGithubModalOpen = action.payload;
    },
  },
});

export const { setGithubModal } = UiSlice.actions;
export default UiSlice.reducer;
