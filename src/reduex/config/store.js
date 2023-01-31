import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../modules/loginSlice";
import SignupSilce from "../modules/SignupSilce";
import mainGameInfoSlice from "../modules/mainGameInfoSlice";
import commentSlice from "../modules/commentSlice";
const store = configureStore({
  reducer: { loginSlice, SignupSilce, mainGameInfoSlice, commentSlice },
});

export default store;
