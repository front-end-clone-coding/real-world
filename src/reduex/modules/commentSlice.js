import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../share/request";
import axios from "axios"; // axios import 합니다.

const initialState = {
  comments: [],
  disabledToggle: false,
  hiddenToggle: true,
  isLoading: false,
  error: null,
};
const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};
export const getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    //console.log("겟 페이로드", payload);
    try {
      // const data = await axios.get(
      //   `http://localhost:3001/comments?gameId=${payload}`
      // ); //로컬용*/
      const data = await axiosInstance.get(`/comments/${payload}`);
      console.log(data.data);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      //console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    //console.log("에드 페이로드", payload);
    try {
      const commentInfo = {
        comment: payload.comment,
        stars: payload.stars,
        isSpoil: payload.isSpoil,
      };
      //const data = await axios.post("http://localhost:3001/comments", payload); //로컬용
      const data = await axiosInstance
        .post(`/comments/${payload.gameId}`, commentInfo, config)
        .then((response) => {
          thunkAPI.dispatch(getComments(payload.gameId));
        });
      // console.log(data);
      // console.log("코멘트 페이로드", payload);
      // return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      //console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    //console.log("딜리트 페이로드", payload);
    try {
      // const data = await axios
      //   .delete(`http://localhost:3001/comments/${payload.id}`)
      //   .then((response) => {
      //     thunkAPI.dispatch(getComments(payload.postId));
      //   });

      const data = await axiosInstance
        .delete(`/comments/${payload.id}`, config)
        .then((response) => {
          thunkAPI.dispatch(getComments(payload.gameId));
        });
      // console.log("딜리트데이터", data);
      // if (data.request.status === 200) {
      //   console.log("실행?");
      //   thunkAPI.dispatch(getComments());
      // }
      // console.log(data.request.status);
      // return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      const errorObject = error.response.data;
      if (errorObject.status === 400) {
        alert(errorObject.message);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateCommentDetail = createAsyncThunk(
  //업데이트
  "todos/update_comments",
  async (payload, thunkAPI) => {
    try {
      const updateCommentPayload = payload.updateComment;
      //console.log(updateCommentPayload);
      const updateComment = {
        comment: updateCommentPayload.comment,
        isSpoil: updateCommentPayload.isSpoil,
        stars: updateCommentPayload.stars,
      };
      //console.log(updateComment.id);
      // await axios.patch(
      //   `http://localhost:3001/comments/${updateComment.id}`,
      //   updateComment
      // );

      await axiosInstance.patch(
        `/comments/${updateCommentPayload.id}`,
        updateComment,
        config
      );
      return thunkAPI.fulfillWithValue(updateComment);
    } catch (error) {
      const errorObject = error.response.data;
      //(error.response.data.status);
      if (errorObject.status === 400) {
        return alert(errorObject.message);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  // name: "comment",
  initialState,
  reducers: {
    isDisabledToggle: (state, action) => {
      // console.log(action);
      //console.log(state);
      state.disabledToggle = action.payload;
    },
    isHiddenToggle: (state, action) => {
      // console.log(action);
      //console.log(state);
      state.hiddenToggle = action.payload;
    },
  },
  extraReducers: {
    // get 받아오는 리듀서
    [getComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments = action.payload;
      //console.log("풀필드", state.comments);
    },
    [getComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    // post 보내는 리듀서
    // [addComment.pending]: (state) => {
    //   state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    // },
    // [addComment.fulfilled]: (state, action) => {
    //   state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.comments.push(action.payload);
    // },
    // [addComment.rejected]: (state, action) => {
    //   state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    // },

    // delete 리듀서
    // [deleteComment.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   console.log("코멘트리스트", state.comments);
    //   const target = state.comments.findIndex(
    //     (comment) => comment.id === action.payload
    //   );
    //   console.log("코멘트 아이디", action.payload);
    //   console.log("액션페이로드", action.payload);
    //   state.comments.splice(target, 1); // state 변화 생김
    // },
    [deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    // [deleteComment.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    // delete 리듀서
    // [deleteComment.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   console.log(action.payload);
    //   console.log(state.comments);
    //   const target = state.comments.findIndex(
    //     (comment) => comment.id === action.payload
    //   );
    //   state.comments.splice(target, 1);
    // },
    // [deleteComment.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [deleteComment.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // update 리듀서
    [updateCommentDetail.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateCommentDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      //console.log(action.payload);
      //console.log(state.comments);
      state.comments = [...state.comments].map((comment) => {
        if (comment.id === action.payload.id) {
          const newComment = comment;
          newComment.comment = action.payload.comment;
          return newComment;
        }
        return comment;
      });
      // const target = state.comments.findIndex(
      //   (comment) => comment.commentId === action.payload.commentId
      // );
      // //console.log(target);
      // state.comments.splice(target, 1, action.payload);
    },
    [updateCommentDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { isDisabledToggle, isHiddenToggle } = commentsSlice.actions;
export default commentsSlice.reducer;
