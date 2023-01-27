import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../modules/loginSlice";
import Signup from "../modules/Signup";

const store = configureStore({
  reducer: { loginSlice: loginSlice, Signup: Signup },
});

export default store;
