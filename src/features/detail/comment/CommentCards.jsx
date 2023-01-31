import React, { useRef, useSelector, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import {
  deleteComment,
  isDisabledToggle,
} from "../../../reduex/modules/commentSlice";

const CommentCards = ({ commentInfo, postId, disabledToggle }) => {
  const dispatch = useDispatch();
  const commentsObject = useRef();

  //편집모드
  const [commentUpdate, setCommetUpdate] = useState(commentInfo.comment);
  const [editMode, setEditMode] = useState(false);

  //삭제기능
  const onDeleteHandler = () => {
    const result = window.confirm("이 코멘트를 지울까요?");
    if (result) {
      //console.log(comment);
      return dispatch(
        deleteComment({ id: commentInfo.id, postId: commentInfo.postId })
      );
    } else {
      return;
    }
  };

  //수정기능
  //수정버튼 눌렀을시
  const onChangeEditMode = () => {
    // //토큰이 없을 경우 실행 못하도록
    // if (!token) return alert("로그인을 해주세요");
    //편집모드
    setEditMode(true);
    //수정을 했을 시 다른 버튼들 비활성화
    dispatch(isDisabledToggle(true));
  };
  //수정시 빈칸입력
  const onChangeHandler = (event) => {
    setCommetUpdate(event.target.value);
    // console.log("코멘트 입력 값", comment);
  };

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

  return (
    <CommentCard>
      <CardWrap>
        <Profil>
          <img
            src="http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg"
            alt="pic"
          />
          <UserData>
            <span>user</span>
            <div>{commentInfo.commentDay}</div>
          </UserData>
        </Profil>
        <Comment>
          <div>{commentInfo.comment}</div>
        </Comment>
        <div>
          <Star>
            <FaStar size="15" color="#fcc419" />
            <div>{commentInfo.star}</div>
          </Star>
          <button onClick={onDeleteHandler} disabled={disabledToggle}>
            삭제
          </button>
        </div>
      </CardWrap>
    </CommentCard>
  );
};

export default CommentCards;

const CommentCard = styled.div`
  background-color: #dfdfdf;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
`;
const CardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: #3b5998;
    color: white;
    width: 50px;
    height: 25px;
    border-radius: 10px;
  }
`;
const Profil = styled.div`
  display: flex;
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
`;
const UserData = styled.div`
  margin-left: 10px;
  display: grid;
  gap: 10px;
  font-size: 15px;
  font-weight: 800;
`;
const Star = styled.div`
  display: flex;
  padding: 5px;
`;
const Comment = styled.div`
  font-size: 15px;
  font-weight: 700;
`;
