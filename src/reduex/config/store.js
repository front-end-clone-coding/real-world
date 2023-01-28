import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../modules/loginSlice";
import SignupSilce from "../modules/SignupSilce";
import mainGameInfoSlice from "../modules/mainGameInfoSlice";
const store = configureStore({
  reducer: { loginSlice, SignupSilce, mainGameInfoSlice },
});

export default store;
