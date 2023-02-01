import React, { useRef, useSelector, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {
  deleteComment,
  isDisabledToggle,
  updateCommentDetail,
} from "../../../reduex/modules/commentSlice";

const CommentCards = ({ commentInfo, disabledToggle }) => {
  const { id } = useParams();
  const gameId = id;
  const dispatch = useDispatch();
  const [spoiler, Setspoiler] = useState(commentInfo.isSpoil);
  // const commentRef = useRef();
  console.log(spoiler);
  // const commentsObject = useRef();
  console.log(commentInfo);
  // //편집모드
  const [commentUpdate, setCommetUpdate] = useState(commentInfo.comment);
  const [editMode, setEditMode] = useState(false);

  //삭제기능
  const onDeleteHandler = () => {
    const result = window.confirm("이 코멘트를 지울까요?");
    if (result) {
      //console.log(comment);
      return dispatch(deleteComment({ id: commentInfo.id, gameId: gameId }));
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
      comment: commentUpdate,
      isSpoil: commentInfo.isSpoil,
      id: commentInfo.id,
      stars: commentInfo.stars,
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
    <>
      <CommentCard>
        <CardWrap>
          <Profil>
            <img
              src="http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg"
              alt="pic"
            />
            <UserData>
              <span>{commentInfo.user}</span>
              <div>{commentInfo.dates}</div>
            </UserData>
          </Profil>
          <Star>
            <FaStar size="15" color="#fcc419" />
            <div>{commentInfo.stars}</div>
          </Star>
        </CardWrap>
        <CommentWrap>
          {spoiler ? (
            <>
              <Comment marginRight="40%" pointer="pointer">
                <div onClick={onHendlerSopiler}>스포일러입니다</div>
              </Comment>
            </>
          ) : (
            <>
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={commentUpdate}
                    onChange={onChangeHandler}
                    style={{
                      width: "200px",
                      padding: "10px 0",
                      borderRadius: "5px",
                    }}
                  ></input>
                  <button onClick={onEditButtonHandler}>수정완료</button>
                </>
              ) : (
                <>
                  <Comment>
                    <div>{commentInfo.comment}</div>
                  </Comment>
                  <div>
                    <button
                      onClick={onDeleteHandler}
                      disabled={disabledToggle}
                      style={{ margin: "5px" }}
                    >
                      삭제
                    </button>
                    <button
                      onClick={onChangeEditMode}
                      disabled={disabledToggle}
                    >
                      수정
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </CommentWrap>
      </CommentCard>
    </>
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
`;
const Profil = styled.div`
  display: flex;
  margin-bottom: 20px;
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
  margin-right: ${(props) => props.marginRight};
  cursor: ${(props) => props.pointer};
`;
const CommentWrap = styled.div`
  button {
    background-color: #3b5998;
    color: white;
    width: 60px;
    height: 25px;
    border-radius: 10px;
  }
`;
