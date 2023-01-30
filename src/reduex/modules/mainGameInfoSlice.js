import { axiosInstance } from "../share/request";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  bestgameInfo: [],
  FreeGameInfo: [],
  Gamecategory: [],
  maingameInfo: [],
  error: null,
  isLoading: false,
};

//카테고리요청
export const getBestGameInfo = createAsyncThunk(
  "bestgameInfo",
  async (payload, thunkAPI) => {
    try {
      ///bestgameInfo
      const { data } = await axiosInstance.get("/games/recent");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      const errorObject = error.response.data;

      //에러코드 처리
      if (errorObject.status === 400) {
        alert(`${errorObject.message}`);
      }

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getFreeGameInfo = createAsyncThunk(
  "getFreeGameInfo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get("/games/free");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      const errorObject = error.response.data;

      //에러코드 처리
      if (errorObject.status === 400) {
        alert(`${errorObject.message}`);
      }

      return thunkAPI.rejectWithValue(error);
    }
  }
);
//메인 슬라이드 받아오기
export const getMainGameInfo = createAsyncThunk(
  "getMainGameInfo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get("/games/star");
      console.log("슬라이더?", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      const errorObject = error.response.data;

      //에러코드 처리
      if (errorObject.status === 400) {
        alert(`${errorObject.message}`);
      }

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const mainGameInfoSlice = createSlice({
  name: "mainGameInfoSlice",
  initialState,
  reducers: {},
  extraReducers: {
    //카테고리 받아오는 Reducers
    [getBestGameInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [getBestGameInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bestgameInfo = action.payload;

      //카테고리 얻기
      const category = action.payload.map((item) => item.category);
      console.log(action.payload.games);

      state.Gamecategory = category.filter(
        (item, index) => category.indexOf(item) === index
      );
    },
    [getBestGameInfo.rejected]: (state, action) => {
      state.isLoading = false;
      // catch 된 error 객체를 state.error에 넣습니다.
      state.error = action.payload;
    },
    [getFreeGameInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [getFreeGameInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.FreeGameInfo = action.payload;
    },
    [getFreeGameInfo.rejected]: (state, action) => {
      state.isLoading = false;
      // catch 된 error 객체를 state.error에 넣습니다.
      state.error = action.payload;
    },
    [getBestGameInfo.rejected]: (state, action) => {
      state.isLoading = false;
      // catch 된 error 객체를 state.error에 넣습니다.
      state.error = action.payload;
    },
    //메인 슬라이드
    [getMainGameInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [getMainGameInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.maingameInfo = action.payload;
      console.log("풀필드", state.maingameInfo);
      console.log("풀필드2", action.payload);
    },
    [getMainGameInfo.rejected]: (state, action) => {
      state.isLoading = false;
      // catch 된 error 객체를 state.error에 넣습니다.
      state.error = action.payload;
    },
  },
});

export default mainGameInfoSlice.reducer;
