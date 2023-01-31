import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import {
  addComment,
  isHiddenToggle,
} from "../../../reduex/modules/commentSlice";

const GameComment = () => {
  //별점구현을 위한 state
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  // const Array = [0, 1, 2, 3, 4]; 필요없음

  const commentInput = useRef();
  const { id } = useParams();
  const dispatch = useDispatch();
  const postId = id;

  const { hiddenToggle } = useSelector((state) => state.commentSlice);
  console.log(hiddenToggle);

  const handleStarClick = (index) => {
    console.log(index);
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
    console.log(clickStates);
  };
  useEffect(() => {
    sendReview();
  }, [clicked]); //컨디마 컨디업

  const sendReview = () => {
    return clicked.filter(Boolean).length;
  };
  const sendComment = (event) => {
    event.preventDefault();
    const commentObject = commentInput.current.value;
    if (commentObject.trim() === "") {
      return alert("내용을 입력하세요.");
    }
    const star = clicked.filter(Boolean).length;
    dispatch(
      addComment({ postId: postId, comment: commentObject, star: star })
    );
    dispatch(isHiddenToggle(true));
    commentObject = "";
    // console.log("에드코멘트의 값", comment, id);
  };

  return (
    <>
      <CommentContainer>
        {hiddenToggle || (
          <>
            <form>
              <Stars>
                {clicked.map((star, idx) => {
                  return (
                    <FaStar
                      key={idx}
                      size="20"
                      onClick={() => handleStarClick(idx)}
                      style={{ color: star ? "yellow" : "black" }}
                    />
                  );
                })}
              </Stars>
              <input
                type="text"
                ref={commentInput}
                placeholder="코멘트를 입력하세요."
              ></input>
              <button onClick={sendComment}>등록</button>
            </form>
          </>
        )}
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
        코멘트 카드가 붙을 부분
        <CommentCard>
          <CardWrap>
            <Profil>
              <img
                src="https://realworld.to/images/profile/user-default-img.svg"
                alt="user"
              />
              <UserData>
                <span>user</span>
                <div>날짜</div>
              </UserData>
            </Profil>
            <div>comment</div>
            <Star>
              <div>star</div>
            </Star>
          </CardWrap>
        </CommentCard>
      </CommentContainer>
    </>
  );
};

export default GameComment;
const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;

const CommentContainer = styled.div`
  border: 1px solid black;
  margin-top: 20px;
  min-height: 900px;

  overflow-y: scroll;
`;
const CommentWrap = styled.div`
  border: 1px solid red;
  padding: 10px;
  div {
    font-size: 20px;
    font-weight: 500;
  }
`;
const CommentCard = styled.div`
  border: 1px solid blue;
`;
const CardWrap = styled.div`
  display: flex;
  justify-content: space-between;
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
