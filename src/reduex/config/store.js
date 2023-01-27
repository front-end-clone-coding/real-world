import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../modules/loginSlice";
import { SignUpSlice } from "../modules/SignUpSlice";

const store = configureStore({
  reducer: { loginSlice, SignUpSlice },
});

export default store;
