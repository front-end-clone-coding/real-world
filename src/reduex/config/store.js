import { configureStore } from "@reduxjs/toolkit";
import test from "../modules/test";
const store = configureStore({
  reducer: { test: test },
});

export default store;
