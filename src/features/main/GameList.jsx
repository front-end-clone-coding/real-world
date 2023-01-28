import React from "react";
import styled from "styled-components";
import Slider from "../../components/Slider";

const GameList = () => {
  return (
    <div>
      <div>
        <Title1>
          <div>리얼월드 추천 게임</div>
        </Title1>
        <SliderContainer>
          <Slider />
        </SliderContainer>
      </div>
      <div>
        <div>추천 / 무료</div>
      </div>
      <div>
        <div>
          <div>카테고리</div>
        </div>
        <div>
          <div>야외형 / 모바일 / 키트형 / 교육용</div>
        </div>
      </div>
      <div>
        <div>
          <div>리얼월드 인기작</div>
        </div>
        <div>
          <div>게임 카드 자리</div>
        </div>
      </div>
    </div>
  );
};

export default GameList;

const Title1 = styled.div`
  border: 2px solid black;

  padding: 30px;
  margin-top: 30px;

  font-size: large;
  font-weight: 800;
`;

const SliderContainer = styled.div`
  border: 2px solid black;
  padding: 20px;
  height: 100%;
`;
