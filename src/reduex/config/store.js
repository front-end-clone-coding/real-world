import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../modules/loginSlice";
import SignupSilce from "../modules/SignupSilce";

const store = configureStore({
  reducer: { loginSlice, SignupSilce },
});

export default store;
