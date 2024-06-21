import { configureStore } from "@reduxjs/toolkit";
import introTextReducer from "../features/carousel/carousel";
import logStatus from "../features/login/login";
export const store = configureStore({
  reducer: {
    introText: introTextReducer,
    logStatus: logStatus,
  },
});
