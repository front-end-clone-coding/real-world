import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const GameIntro = () => {
  const { GameDetailDescriptionInfo } = useSelector(
    (state) => state.mainGameInfoSlice
  );

  console.log(GameDetailDescriptionInfo);
  console.log(Array.isArray(GameDetailDescriptionInfo.gameImg));
  const imgLists = GameDetailDescriptionInfo.gameImg.split(",");

  return (
    <IntroBox>
      <IntroWrap>
        <div>게임 소개</div>
        <div
          style={{
            marginTop: "16px",
            marginBottom: "24px",
            borderTop: "solid 1px #000000",
          }}
        ></div>
        <div>
          <span>{GameDetailDescriptionInfo.gameDesc}</span>
        </div>
      </IntroWrap>
      <GameShoot>
        {imgLists.map((img) => {
          console.log(img);
          return (
            <img
              key={img}
              src={img}
              alt="shot"
              style={{ width: "300px", height: "400px" }}
            />
          );
        })}
        <div />
      </GameShoot>
      <GameDescContainer>
        <DescWrap>
          <div>스토리</div>
          <div
            style={{
              marginTop: "16px",
              marginBottom: "24px",
              borderTop: "solid 1px #000000",
            }}
          ></div>
          <div>
            <span>{GameDetailDescriptionInfo.story}</span>
          </div>
        </DescWrap>
      </GameDescContainer>
    </IntroBox>
  );
};

export default GameIntro;

const IntroBox = styled.div`
  min-height: 900px;
  margin-top: 20px;
`;
const IntroWrap = styled.div`
  padding: 10px;
  div {
    font-size: 20px;
    font-weight: 500;
  }
  span {
    font-size: 15px;
    word-break: break-all;
    margin: 10px;
  }
`;

const GameDescContainer = styled.div`
  /* border: 2px solid black; */

  width: 600px;
  height: 200px;
`;
const GameShoot = styled.div`
  /* border: 2px solid black; */

  width: 600px;

  display: flex;
  gap: 10px;
  overflow-x: auto;
`;
const DescWrap = styled.div`
  padding: 10px;

  div {
    font-size: 20px;
    font-weight: 500;
  }
  span {
    font-size: 15px;

    white-space: pre-line;
  }
`;
