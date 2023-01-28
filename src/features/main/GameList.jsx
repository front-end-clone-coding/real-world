import Slider from "../../components/Slider";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import CategoryCards from "../../components/CategoryCards";
import { getCategoryGameInfo } from "../../reduex/modules/mainGameInfoSlice";

const GameList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryGameInfo());
  }, []);

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
      <Menubar>
        <div>추천</div>
        <div>무료</div>
      </Menubar>
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
          <Dived />
          <CategoryCards />
        </div>
        <div>
          <Dived />
          <CategoryCards />
        </div>
      </div>
    </div>
  );
};
export default GameList;

const Title1 = styled.div`
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

const Menubar = styled.div`
  width: 100%;
  height: 50px;

  border: 2px solid black;

  font-size: large;
  font-weight: 700;

  display: flex;

  div {
    padding: 10px;
    border: 2px solid black;
  }
`;

const Dived = styled.div`
  margin-bottom: 48px;
  margin-top: 32px;
  width: 100%;
  height: 16px;
  max-width: 1092px;
  margin-left: auto;
  margin-right: auto;
  background-color: linear-gradient(
    to top,
    rgb(250, 250, 250) 18%,
    rgb(248, 248, 248) 73%,
    rgb(245, 245, 245) 83%
  );
  background-image: linear-gradient(
    to bottom,
    rgb(250, 250, 250) 18%,
    rgb(248, 248, 248) 73%,
    rgb(245, 245, 245) 83%
  );
`;
