import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Tab from "../../components/Tab";
import DetailGameInfo from "./DetailGameInfo";
const SeleteGame = () => {
  const Categorylist = ["게임소개", "상세정보", "게임후기"];
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
    star: "후기 4.3점 (145)",
    story:
      "꿈속에서만 운영하는 레스토랑이 있다...?잠이 들자마자 희한한 곳에서 눈을 뜬 당신,오로라 레스토랑의 새로운 일원이 되는데...",
    screenShot: [
      "https://cdn.realworld.to/user-files/DBqrgoLAyLAiCL-aMSgv0g/23-01-03-03-52-34_xcV3iJNogbs.png",
      "https://cdn.realworld.to/user-files/DBqrgoLAyLAiCL-aMSgv0g/23-01-03-03-52-34_FOjt8SD6h9Q.png",
    ],
    difficulty: "쉬움",
    playTime: "30분",
    people: "1~2",
    kit: "키트없음",
    createdAt: "리얼월드 오리지널",
  };

  return (
    <PageWrap>
      <LeftContainer>
        <GameTitleImg src={games.titleImg} alt={games.gameTitle} />
        <MenuTap>
          <Tab Categorylist={Categorylist} />
        </MenuTap>
      </LeftContainer>
      <RightContainer>
        <DetailGameInfo games={games} />
      </RightContainer>
    </PageWrap>
  );
};

export default SeleteGame;

const PageWrap = styled.div`
  margin-top: 100px;
  padding-left: auto;
  padding-right: auto;
  display: flex;
  justify-content: center;
`;
const LeftContainer = styled.div``;
const GameTitleImg = styled.img`
  /* border: 2px solid black; */

  width: 600px;
  height: 500px;
`;
const MenuTap = styled.div`
  /* border: 2px solid black; */
`;
const GameShoot = styled.div`
  /* border: 2px solid black; */

  width: 600px;
  height: 300px;
`;
const GameDescContainer = styled.div`
  /* border: 2px solid black; */

  width: 600px;
  height: 200px;
`;
const GameInfo = styled.div`
  /* border: 2px solid black; */
`;

const RightContainer = styled.div`
  padding-left: 12px;
`;
