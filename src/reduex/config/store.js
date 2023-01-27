import { configureStore } from "@reduxjs/toolkit";
import LoginSignup from "../modules/LoginSignup";

const store = configureStore({
  reducer: { LoginSignup: LoginSignup },
});

export default store;
