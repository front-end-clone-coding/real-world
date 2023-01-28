import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../modules/loginSlice";
import SignupSilce from "../modules/SignupSilce";
import gameInfoSlice from "../modules/gameInfoSlice";
const store = configureStore({
  reducer: { loginSlice, SignupSilce, gameInfoSlice },
});

export default store;
