import React from "react";
import styled from "styled-components";

const GameIntro = () => {
  const games = {
    id: 4,
    playType: "mobile",
    gameTitle: "오로라 레스토랑",
    gameDesc: "아주 오래전, 먼 꿈속에 소중한 무언가를 두고 오진 않았나요?",
    category: String,
    gamePrice: "무료",
    titleImg:
      "https://cdn.realworld.to/user-files/DBqrgoLAyLAiCL-aMSgv0g/22-12-06-02-18-25_-S-MNESaKGk.jpg",
    // gameImg=["링크1","링크2","..."],
    star: String,
    story:
      "꿈속에서만 운영하는 레스토랑이 있다...?\n잠이 들자마자 희한한 곳에서 눈을 뜬 당신,\n오로라 레스토랑의 새로운 일원이 되는데...",
    screenShot: [
      "https://cdn.realworld.to/user-files/DBqrgoLAyLAiCL-aMSgv0g/23-01-03-03-52-34_xcV3iJNogbs.png",
      "https://cdn.realworld.to/user-files/DBqrgoLAyLAiCL-aMSgv0g/23-01-03-03-52-34_FOjt8SD6h9Q.png",
      "https://cdn.realworld.to/user-files/DBqrgoLAyLAiCL-aMSgv0g/23-01-03-03-52-34_kWqkr5ZNGyw.png",
      "https://cdn.realworld.to/user-files/DBqrgoLAyLAiCL-aMSgv0g/23-01-03-03-52-32_RcwodE_vxKg.png",
      "https://cdn.realworld.to/user-files/DBqrgoLAyLAiCL-aMSgv0g/23-01-03-03-52-35_Jv0iGqfUr8g.png",
      "https://cdn.realworld.to/user-files/DBqrgoLAyLAiCL-aMSgv0g/23-01-03-03-52-35_PGJYfG7C09A.png",
    ],
    difficulty: "쉬움",
    playTime: "30분",
    people: "1~2",
    kit: "키트없음",
    createdAt: "리얼월드 오리지널",
  };

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
          <span>{games.gameDesc}</span>
        </div>
      </IntroWrap>
      <GameShoot>
        {/* <div>스크린샷 들어갈자리</div> */}

        {games.screenShot.map((img) => {
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
            <span>{games.story}</span>
          </div>
        </DescWrap>
      </GameDescContainer>
    </IntroBox>
  );
};

export default GameIntro;
const IntroBox = styled.div`
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
