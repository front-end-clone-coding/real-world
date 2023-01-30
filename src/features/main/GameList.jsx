import Slider from "../../components/Slider";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  getBestGameInfo,
  getFreeGameInfo,
  getMainGameInfo,
} from "../../reduex/modules/mainGameInfoSlice";
import Tab from "../../components/Tab";

const GameList = ({ visible }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBestGameInfo());
    dispatch(getFreeGameInfo());
    dispatch(getMainGameInfo());
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
        <Tab Categorylist={Categorylist} visible={visible} />
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
  background-color: ${(props) => props.move};
`;

const SliderContainer = styled.div`
  padding: 20px;
  height: 500px;
`;
