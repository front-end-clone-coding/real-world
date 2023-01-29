import React from "react";
import styled from "styled-components";
import CategoryMenu from "../../components/CategoryMenu";
const Free = () => {
  const gameInfo = [
    {
      category: true,
      gameImg:
        "https://cdn.realworld.to/user-files/KtkDjeNGuVtRLXJcPGizQg/22-08-26-13-21-36_AfyiKDRnYw0.png",
      gameTitle: "리얼월드 인기작1",
      gamePrice: "무료",
      id: 1,
    },
    {
      category: false,
      gameImg:
        "https://cdn.realworld.to/user-files/KtkDjeNGuVtRLXJcPGizQg/22-08-26-13-21-36_AfyiKDRnYw0.png",
      gameTitle: "리얼월드 인기작1",
      gamePrice: "무료",
      id: 2,
    },
    {
      gameImg:
        "https://cdn.realworld.to/user-files/KtkDjeNGuVtRLXJcPGizQg/22-08-26-13-21-36_AfyiKDRnYw0.png",
      gameTitle: "리얼월드 인기작1",
      gamePrice: "무료",
      id: 3,
    },
    {
      gameImg:
        "https://cdn.realworld.to/user-files/KtkDjeNGuVtRLXJcPGizQg/22-08-26-13-21-36_AfyiKDRnYw0.png",
      gameTitle: "리얼월드 인기작1",
      gamePrice: "무료",
      id: 4,
    },
  ];
  return (
    <>
      <SectionWrap>
        <Dived />
        <CategoryMenu>🎠리얼월드 필수 코스 5!🎠</CategoryMenu>
        <SectionList>
          {gameInfo.map((content) => {
            return (
              <SectionGap key={content.id}>
                <GameImgBox>
                  <img src={content.gameImg} alt={content.gameTitle} />
                </GameImgBox>
                <Information>
                  <h2>{content.gameTitle}</h2>
                  <div>
                    <p className="gamePrice">{content.gamePrice}</p>
                  </div>
                  <div>
                    <p>내 추리력은 몇 점❓ 리얼월드와 함께 추리 스무고개 ⛰️</p>
                  </div>
                  <div>
                    <p>내 추리력은 몇 점❓ 리얼월드와 함께 추리 스무고개 ⛰️</p>
                  </div>
                </Information>
              </SectionGap>
            );
          })}
        </SectionList>
      </SectionWrap>
    </>
  );
};

export default Free;
const Dived = styled.div`
  margin-bottom: 48px;
  margin-top: 32px;
  width: 100%;
  height: 16px;
  max-width: 1092px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionWrap = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  width: 100%;
  max-width: 1140px;
  box-sizing: border-box;

  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
`;

const SectionList = styled.div`
  padding-bottom: 24px;
`;

const SectionGap = styled.div`
  display: flex;
  gap: 16px;
`;

const GameImgBox = styled.div`
  img {
    object-fit: cover;
    border-radius: 8px;
    width: 142px;
    height: 200px;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h2 {
    font-size: 20px;
    margin-bottom: 0px;
    font-weight: 700;
    line-height: 24px;
    max-height: 48px;
  }
  p {
    font-size: 13px;
    line-height: 16px;
    max-height: 32px;
    font-weight: 500;
    color: rgb(98, 98, 98);
  }
  .gamePrice {
    font-size: 15px;
    line-height: 20px;
  }
`;
