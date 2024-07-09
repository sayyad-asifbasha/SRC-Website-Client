import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
  authToken: "",
};

export const logged = createSlice({
  name: "Login",
  initialState,
  reducers: {
    loggedStatus: (state, action) => {
      const status = {
        logStatus: action.payload,
      };
      state.logged = status.logStatus.logged;
      state.authToken = status.logStatus.token;
    },
  },
});

export const { loggedStatus } = logged.actions;
export default logged.reducer;
