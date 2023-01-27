import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../modules/loginSlice";
import LoginSignup from "../modules/LoginSignup";

const store = configureStore({
  reducer: { loginSlice: loginSlice, LoginSignup: LoginSignup },

});

export default store;
