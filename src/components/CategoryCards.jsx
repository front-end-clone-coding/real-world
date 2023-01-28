import styled from "styled-components";
import { useSelector } from "react-redux";
import CategoryMenu from "./CategoryMenu";
const CategoryCards = () => {
  const { gameInfo } = useSelector((state) => state.mainGameInfoSlice);
  return (
    <>
      <SectionWrap>
        <CategoryMenu>🎀리얼월드 인기작🎀</CategoryMenu>
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
                    <p>{content.gamePrice}</p>
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

export default CategoryCards;
const SectionWrap = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  width: 100%;
  max-width: 1140px;
  box-sizing: border-box;

  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
  h2 {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

const SectionList = styled.div`
  display: flex;
  padding-bottom: 24px;
`;

const SectionGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 15px;
`;

const GameImgBox = styled.div`
  border: 1px solid rgb(237, 237, 237);
  border-radius: 8px;

  img {
    object-fit: cover;
    border-radius: 8px;
    width: 250px;
    height: 168px;
  }
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h2 {
    font-size: 15px;
    margin-bottom: 0px;
    font-weight: 500;
    line-height: 23px;
    max-height: 46px;
  }
  p {
    font-size: 12px;
    line-height: 20px;
    color: rgb(98, 98, 98);
  }
`;
