import React from "react";
import styled from "styled-components";
const Tab = () => {
  return (
    <>
      <TabContainer>
        <TabMenuUl>
          <li>추천</li>
          <li>무료</li>
        </TabMenuUl>
      </TabContainer>
    </>
  );
};

export default Tab;
const TabContainer = styled.div`
  margin-top: 100px;
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
    border-bottom: ${(props) => props.focus && "2px solid rgb(0, 0, 0)"};
    color: ${(props) => props.focus || "rgb(98, 98, 98)"};
    padding: 8px 16px;
    font-weight: bold;
    cursor: pointer;
  }
`;
