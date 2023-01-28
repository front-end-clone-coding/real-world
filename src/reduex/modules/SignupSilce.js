import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../share/request";
import axios from "axios";

const initialState = {
  users: [],
  error: null,
  isLoading: false,
  loginCheck: false,
};

//회원가입
export const __signUp = createAsyncThunk(
  "signUp",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosInstance.post(`/user/signup`, payload);
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
export const SignUpSlice = createSlice({
  name: "SignUpSlice",

  initialState,
  reducers: {
    logOut: (state, payload) => {
      state.loginCheck = false;
    },
  },
  extraReducers: {
    //회원가입
    [__signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [__signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
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

export const { logOut } = SignUpSlice.actions;
export default SignUpSlice.reducer;
