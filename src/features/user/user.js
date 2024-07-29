import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
  authToken: "",
  name: "",
  role: "",
  email: "",
  isCr: false,
};

export const logged = createSlice({
  name: "Login",
  initialState,
  reducers: {
    loggedStatus: (state, action) => {
      state.name = action.payload.name;
      state.logged = action.payload.logged;
      state.authToken = action.payload.token;
      state.role = action.payload.role;
      state.email = action.payload.email;
      state.isCr = action.payload.isCr;
    },
  },
});

export const { loggedStatus } = logged.actions;
export default logged.reducer;
