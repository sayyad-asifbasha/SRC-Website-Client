import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  introText: "",
  domainId: "",
};

export const carouselSlice = createSlice({
  name: "introText",
  initialState,
  reducers: {
    changeDomainData: (state, action) => {
      state.introText = action.payload.introText;
      state.domainId = action.payload.domainId;
    },
  },
});

export const { changeDomainData } = carouselSlice.actions;
export default carouselSlice.reducer;
