import React from "react";
import styled from "styled-components";

const GameComment = () => {
  return (
    <>
      <CommentContainer>
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
            <Star>
              <div>star</div>
            </Star>
          </CardWrap>
          <div>comment</div>
        </CommentCard>
      </CommentContainer>
    </>
  );
};

export default GameComment;

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
