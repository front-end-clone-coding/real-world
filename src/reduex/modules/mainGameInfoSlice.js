import { axiosInstance } from "../share/request";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  bestgameInfo: [],
  FreeGameInfo: [],
  Gamecategory: [],
  GameDetailDescriptionInfo: [],
  GameDetailDescriptionTextInfo: [],
  error: null,
  isLoading: false,
  isSuccess: false,
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

export const GameDetailDescription = createAsyncThunk(
  "GameDetailDescription",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(`/games/sc/${payload}`);
      console.log(data);
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
export const GameDetailTextDescription = createAsyncThunk(
  "GameDetailTextDescription",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(`/games/info/${payload}`);
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
    //이미지랑 설명
    [GameDetailDescription.pending]: (state) => {
      state.isLoading = true;
    },
    [GameDetailDescription.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.GameDetailDescriptionInfo = action.payload;
    },
    [GameDetailDescription.rejected]: (state, action) => {
      state.isLoading = false;
      // catch 된 error 객체를 state.error에 넣습니다.
      state.error = action.payload;
    },
    //설명
    [GameDetailTextDescription.pending]: (state) => {
      state.isLoading = true;
    },
    [GameDetailTextDescription.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.GameDetailDescriptionTextInfo = action.payload;
    },
    [GameDetailTextDescription.rejected]: (state, action) => {
      state.isLoading = false;
      // catch 된 error 객체를 state.error에 넣습니다.
      state.error = action.payload;
    },
  },
});

export default mainGameInfoSlice.reducer;
