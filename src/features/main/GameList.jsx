import Slider from "../../components/Slider";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getCategoryGameInfo } from "../../reduex/modules/mainGameInfoSlice";
import Tab from "../../components/Tab";

const GameList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryGameInfo());
  }, []);

  //Tab
  const Categorylist = ["추천", "무료"];

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
        <Tab Categorylist={Categorylist} />
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
