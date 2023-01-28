import React, { useState } from "react";
import styled from "styled-components";
import BestGameList from "../features/main/BestGameList";
import FreeGameList from "../features/main/FreeGameList";
const Tab = ({ Categorylist }) => {
  const [currentTab, SetcurrentTab] = useState(<FreeGameList />);
  const [currentTabIndex, SetcurrentTabIndex] = useState(0);
  const onClickTabHandler = (index, content) => {
    SetcurrentTabIndex(index);
    if (content === "무료") {
      SetcurrentTab(<FreeGameList />);
    } else if (content === "추천") {
      SetcurrentTab(<BestGameList />);
    }
  };

  // console.log(currentTab);
  return (
    <>
      <TabContainer>
        <TabMenuUl>
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
        {/* 바꿔치기 */}
        {currentTab}
      </TabContainer>
    </>
  );
};

export default Tab;
const TabContainer = styled.div`
  //background-color: rgb(255, 62, 62);
  height: auto;
  border-bottom: 1px solid rgb(237, 237, 237);
`;
const TabMenuUl = styled.ul`
  width: 100%;
  max-width: 1140px;
  padding: 0 1.5rem;
  background-color: antiquewhite;
  display: flex;
  margin-left: auto;
  margin-right: auto;

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

const TabItem = styled.li`
  font-size: 18px;
  padding: 10px 16px;
  font-weight: bold;
  cursor: pointer;

  .subMenu {
    color: rgb(98, 98, 98);
  }
  .focusMenu {
    border-bottom: 2px solid rgb(0, 0, 0);
    color: rgb(0, 0, 0);
  }
`;
