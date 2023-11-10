import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lan: "er",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguageAction: (state, action) => {
      state.lan = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLanguageAction } = languageSlice.actions;

export default languageSlice.reducer;
