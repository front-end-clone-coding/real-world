import { axiosInstance } from "../share/request";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  userInfo: [],
  error: null,
  isLoading: false,
  loginCheck: false,
};
//로그인
export const __postLogin = createAsyncThunk(
  "login",
  async ({ user, navigate }, thunkAPI) => {
    try {
      const data = await axiosInstance.post(`user/login`, user);
      if (data.data.httpStatus === 200) {
        const token = data.headers.get("Authorization");
        localStorage.setItem("token", token);
        navigate("/");
      } else {
        alert("문제가 생겼습니다.");
      }

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      const errorObject = error.response.data;

      //에러코드 처리
      if (errorObject.httpStatus === 400) {
        alert(`${errorObject.msg}`);
      }

     
    }
  }
);
export const loginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    
  },
  extraReducers: {
    //로그인
    [__postLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [__postLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.loginCheck = true;
      window.localStorage("isLogin", state.loginCheck);
    },
    [__postLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default loginSlice.reducer;
