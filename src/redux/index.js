import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../redux/themSlice";
import userReducer from "../redux/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

export default store;
