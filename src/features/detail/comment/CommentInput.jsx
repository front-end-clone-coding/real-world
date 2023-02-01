import React, { useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import {
  addComment,
  isHiddenToggle,
} from "../../../reduex/modules/commentSlice";

const CommentInput = () => {
  const dispatch = useDispatch();

  //별점구현을 위한 state
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [spolier, SetSpolier] = useState(false);
  const commentInput = useRef();

  //comment 등록시 필요
  const { id } = useParams();
  const postId = id;

  //const todaydate = date.toISOString();
  //console.log(todaydate);

  //별점
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  // useEffect(() => {
  //   sendReview();
  // }, [clicked]); //컨디마 컨디업

  const onSpoilerCheckHander = (event) => {
    const check = event.target.value;
    if (check === "on") {
      SetSpolier(!spolier);
    }

    console.log(spolier);
  };
  //댓글 등록
  const sendComment = (event) => {
    event.preventDefault();

    const commentObject = commentInput.current.value;
    if (commentObject.trim() === "") {
      return alert("내용을 입력하세요.");
    }
    const star = clicked.filter(Boolean).length;
    const date = new Date();
    const commentDay = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} `;
    dispatch(
      addComment({
        postId: postId,
        comment: commentObject,
        star: star,
        commentDay: commentDay,
        spolier: spolier,
      })
      // addComment([commentDay, star, postId, commentObject, spolier])
    );
    dispatch(isHiddenToggle(true));
  };

  return (
    <div>
      <form>
        <Stars>
          <>별점</>
          {clicked.map((star, idx) => {
            return (
              <FaStar
                key={idx}
                size="20"
                onClick={() => handleStarClick(idx)}
                style={{ color: star ? "#fcc419" : "gray" }}
              />
            );
          })}
          <>
            <input type="checkbox" onChange={onSpoilerCheckHander} />
            <label>스포일러 여부</label>
          </>
        </Stars>
        <Inputbox>
          <input
            type="text"
            ref={commentInput}
            placeholder="코멘트를 입력하세요."
          ></input>
          <button onClick={sendComment}>등록</button>
        </Inputbox>
      </form>
    </div>
  );
};

export default CommentInput;

const Stars = styled.div`
  font-size: 15px;
  font-weight: 700;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 10px;
  input {
    margin: 5px;
  }
  label {
    font-size: 15px;
    font-weight: 700;
  }
`;
const Inputbox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding-right: 10px;

  input {
    width: 500px;
    height: 50px;
    border: 2px solid #3b5998;
    border-radius: 10px;
  }

  button {
    background-color: #3b5998;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
`;
