import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  introText: "",
};

export const carousel = createSlice({
  name: "introText",
  initialState,
  reducers: {
    changeIntroText: (state, action) => {
      const text = {
        introText: action.payload,
      };
      state.introText = text.introText;
    },
  },
});

export const { changeIntroText } = carousel.actions;
export default carousel.reducer;
