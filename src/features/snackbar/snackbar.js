import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  variant: "",
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setSnackBar: (state, action) => {
      state.message = action.payload.message;
      state.variant = action.payload.variant;
    },
    resetSnackbar: (state) => {
      state.message = "";
      state.variant = "";
    },
  },
});

export const { setSnackBar, resetSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
