import React, { useState } from "react";
import styled from "styled-components";
import BestGameList from "../features/main/BestGameList";
import FreeGameList from "../features/main/FreeGameList";
import GameIntro from "../features/detail/GameIntro";
import GameComment from "../features/detail/comment/GameComment";
const Tab = ({ Categorylist, visible }) => {
  let components;
  if (Categorylist[0] === "추천") {
    components = <BestGameList />;
  }

  const [currentTab, SetcurrentTab] = useState(components);
  const [currentTabIndex, SetcurrentTabIndex] = useState(0);

  const onClickTabHandler = (index, content) => {
    SetcurrentTabIndex(index);
    switch (content) {
      case "무료":
        SetcurrentTab(<FreeGameList />);
        break;
      case "추천":
        SetcurrentTab(<BestGameList />);
        break;
      case "게임소개":
        SetcurrentTab(<GameIntro />);
        break;
      case "게임후기":
        SetcurrentTab(<GameComment />);
        break;
      default:
        break;
    }
  };

  // console.log(currentTab);
  return (
    <>
      <TabContainer>
        <TabMenuUl move={visible.tabVisible ? "white" : "transparent"}>
          {Categorylist.map((content, index) => {
            return (
              <li
                key={index}
                className={index === currentTabIndex ? "focusMenu" : "subMenu"}
                onClick={() => {
                  onClickTabHandler(index, content);
                }}
              >
                {content}
              </li>
            );
          })}
        </TabMenuUl>
        {currentTab}
      </TabContainer>
    </>
  );
};

export default Tab;
const TabContainer = styled.div`
  padding-top: 20px;
  height: auto;
  border-bottom: 1px solid rgb(237, 237, 237);
`;
const TabMenuUl = styled.ul`
  background-color: ${(props) => props.move};
  position: sticky;
  top: 50px;
  width: 100%;
  max-width: 1140px;
  padding: 0 1.5rem;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  li {
    font-size: 18px;
    padding: 10px 16px;
    font-weight: bold;
    cursor: pointer;
  }
  .subMenu {
    color: rgb(98, 98, 98);
  }
  .focusMenu {
    border-bottom: 2px solid rgb(0, 0, 0);
    color: rgb(0, 0, 0);
  }
`;
