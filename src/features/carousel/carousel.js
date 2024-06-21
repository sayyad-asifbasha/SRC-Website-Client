import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  introText: "",
  domainId: "",
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
    changeDomainId: (state, action) => {
      const dmoain = {
        domainId: action.payload,
      };
      state.domainId = dmoain.domainId;
    },
  },
});

export const { changeIntroText, changeDomainId } = carousel.actions;
export default carousel.reducer;
