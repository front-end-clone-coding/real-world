import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  users: [],
  error: null,
  isLoading: false,
  loginCheck: false,
};

export const __signUp = createAsyncThunk(
  "signUp",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/user", payload);
      console.log(data);
      console.log(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      //에러
      console.log(error);
      alert(`${error.response.data.message}`);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//리덕스
export const LoginSignup = createSlice({
  name: "loginSignUp",
  initialState,
  reducers: {
    logOut: (state, payload) => {
      state.loginCheck = false;
    },
  },
  extraReducers: {
    // //로그인
    // [__postLogin.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__postLogin.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    // },
    // [__postLogin.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    //회원가입
    [__signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [__signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userInfo.push(action.payload);
    },
    [__signUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //아이디중복확인
    // [__idCheck.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__idCheck.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.userInfo.push(action.payload);
    // },
    // [__idCheck.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    //   console.log(action.payload);
    // },
  },
});

export const { logOut } = LoginSignup.actions;
export default LoginSignup.reducer;
