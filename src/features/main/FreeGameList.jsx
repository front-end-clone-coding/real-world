import React from "react";
import styled from "styled-components";
import CategoryMenu from "../../components/CategoryMenu";
import { useSelector } from "react-redux";
const Free = () => {
  const { FreeGameInfo } = useSelector((state) => state.mainGameInfoSlice);

  return (
    <>
      <SectionWrap>
        <Dived />
        <CategoryMenu>🎠리얼월드 필수 코스 5!🎠</CategoryMenu>
        <SectionList>
          {FreeGameInfo.map((content) => {
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
  display: grid;
  min-width: 150px;
  grid-template-columns: 50% 50%;
  padding-bottom: 24px;
`;

const SectionGap = styled.div`
  margin-bottom: 20px;
  min-width: 150px;
  display: flex;
  gap: 20px;
`;

const GameImgBox = styled.div`
  img {
    border-radius: 8px;
    min-width: 150px;
    width: 190px;
    height: 256px;
  }
`;

const Information = styled.div`
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  h2 {
    min-width: 150px;
    font-size: 20px;
    margin-bottom: 0px;
    font-weight: 700;
    line-height: 24px;
    max-height: 48px;
  }
  p {
    min-width: 150px;
    font-size: 13px;
    line-height: 16px;
    max-height: 32px;
    font-weight: 500;
    color: rgb(98, 98, 98);
  }
  .gamePrice {
    min-width: 150px;
    font-size: 15px;
    line-height: 20px;
  }
`;
