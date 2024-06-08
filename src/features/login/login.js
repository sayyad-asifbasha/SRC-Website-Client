import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
};

export const logged = createSlice({
  name: "Login",
  initialState,
  reducers: {
    loggedStatus: (state, action) => {
      const status = {
        logStatus: action.payload,
      };
      state.logged = status.logStatus;
    },
  },
});

export const { loggedStatus } = logged.actions;
export default logged.reducer;
