import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import CommentCards from "./CommentCards";
import CommentInput from "./CommentInput";
import { useParams } from "react-router-dom";
import { getComments } from "../../../reduex/modules/commentSlice";
const GameComment = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const gameId = id;
  useEffect(() => {
    dispatch(getComments(gameId));
  }, [dispatch, gameId]);

  //댓글 가져오기
  const { comments, hiddenToggle, disabledToggle } = useSelector(
    (state) => state.commentSlice
  );

  // console.log("코멘트폼 파람값?", id);

  return (
    <>
      <CommentContainer>
        {hiddenToggle || <CommentInput />}

        <CommentWrap>
          <div>게임 후기</div>
          <div
            style={{
              marginTop: "16px",
              marginBottom: "24px",
              borderTop: "solid 1px #000000",
            }}
          ></div>
        </CommentWrap>
        {comments.map((item) => {
          return (
            <CommentCards
              key={item.id}
              commentInfo={item}
              disabledToggle={disabledToggle}
            />
          );
        })}
      </CommentContainer>
    </>
  );
};

export default GameComment;

const CommentContainer = styled.div`
  margin-top: 20px;
  min-height: 900px;

  overflow-y: scroll;
`;
const CommentWrap = styled.div`
  padding: 10px;
  div {
    font-size: 20px;
    font-weight: 500;
  }
`;
