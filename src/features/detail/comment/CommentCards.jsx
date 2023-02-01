import React, { useRef, useSelector, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  deleteComment,
  isDisabledToggle,
  updateCommentDetail,
} from "../../../reduex/modules/commentSlice";
const CommentCards = ({ commentInfo, disabledToggle }) => {
  const dispatch = useDispatch();
  const [spoiler, Setspoiler] = useState(commentInfo.spolier);
  // const commentRef = useRef();
  console.log(spoiler);
  // const commentsObject = useRef();

  // //편집모드
  const [commentUpdate, setCommetUpdate] = useState(commentInfo.comment);
  const [editMode, setEditMode] = useState(false);

  //삭제기능
  const onDeleteHandler = () => {
    const result = window.confirm("이 코멘트를 지울까요?");
    if (result) {
      console.log(commentInfo.id);
      return dispatch(
        deleteComment({ id: commentInfo.id, postId: commentInfo.postId })
      );
    } else {
      return;
    }
  };
  console.log();
  //수정기능
  //수정버튼 눌렀을시
  // const onChangeEditMode = () => {
  //   // //토큰이 없을 경우 실행 못하도록
  //   // if (!token) return alert("로그인을 해주세요");
  //   //편집모드
  //   setEditMode(true);
  //   //수정을 했을 시 다른 버튼들 비활성화
  //   dispatch(isDisabledToggle(true));
  // };
  // //수정시 빈칸입력
  // const onChangeHandler = (event) => {
  //   setCommetUpdate(event.target.value);
  //   // console.log("코멘트 입력 값", comment);
  // };

  //   //수정버튼 클릭시
  //   const onEditButtonHandler = () => {
  //     //빈칸 유효성
  //     if (commentUpdate.trim() === "") {
  //       return alert("입력된 내용이 없습니다.");
  //     }
  //     //console.log(comment.id);
  //     const updateComment = {
  //       postId: postId,
  //       comment: commentUpdate,
  //       commentId: comment.commentId,
  //     };
  //     dispatch(
  //       updateCommentDetail({
  //         updateComment,
  //       })
  //     );
  //     setEditMode(false);
  //     dispatch(isDisabledToggle(false));
  //   };
  const onHendlerSopiler = () => {
    Setspoiler(false);
  };
  const onChangeEditMode = () => {
    setEditMode(true);
    //수정을 했을 시 다른 버튼들 비활성화
    dispatch(isDisabledToggle(true));
  };
  const onChangeHandler = (event) => {
    setCommetUpdate(event.target.value);
  };
  const onEditButtonHandler = () => {
    if (commentUpdate.trim() === "") {
      return alert("입력된 내용이 없습니다.");
    }
    const updateComment = {
      postId: commentInfo.postId,
      comment: commentUpdate,
      id: commentInfo.id,
      star: commentInfo.star,
    };
    dispatch(
      updateCommentDetail({
        updateComment,
      })
    );
    setEditMode(false);
    dispatch(isDisabledToggle(false));
  };
  return (
    <div>
      <CommentCard>
        <CardWrap>
          <Profil>
            <img
              src="https://realworld.to/images/profile/user-default-img.svg"
              alt="user"
            />

            <UserData>
              <span>user</span>
              <div>{commentInfo.commentDay}</div>
            </UserData>
          </Profil>
          {spoiler ? (
            <>
              <div onClick={onHendlerSopiler}>스포일러입니다</div>
            </>
          ) : (
            <>
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={commentUpdate}
                    onChange={onChangeHandler}
                  ></input>
                  <button onClick={onEditButtonHandler}>수정완료</button>
                </>
              ) : (
                <>
                  {" "}
                  <Comment>
                    <div>{commentInfo.comment}</div>
                  </Comment>
                  <Star>
                    <div>{commentInfo.star}</div>
                  </Star>
                  <button onClick={onDeleteHandler} disabled={disabledToggle}>
                    삭제
                  </button>
                  <button onClick={onChangeEditMode} disabled={disabledToggle}>
                    수정
                  </button>
                </>
              )}
            </>
          )}
        </CardWrap>
      </CommentCard>
    </div>
  );
};

export default CommentCards;
const CommentCard = styled.div`
  border: 1px solid blue;
`;
const CardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Profil = styled.div`
  border: 1px solid black;
  display: flex;
`;
const UserData = styled.div`
  margin: 10px;
  border: 1px solid red;
`;
const Star = styled.div`
  border: 1px solid blue;
`;
const Comment = styled.div``;
