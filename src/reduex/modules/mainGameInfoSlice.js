import { axiosInstance } from "../share/request";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  gameInfo: [],
  error: null,
  isLoading: false,
};

//카테고리요청
export const getCategoryGameInfo = createAsyncThunk(
  "categoryGameInfo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get("/freegameInfo");
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
    [getCategoryGameInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategoryGameInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.gameInfo = action.payload;
    },
    [getCategoryGameInfo.rejected]: (state, action) => {
      state.isLoading = false;
      // catch 된 error 객체를 state.error에 넣습니다.
      state.error = action.payload;
    },
  },
});

export default mainGameInfoSlice.reducer;
