import React from "react";
import styled from "styled-components";
const CategoryMenu = ({ children }) => {
  return (
    <>
      <H2>{children}</H2>
    </>
  );
};

export default CategoryMenu;
const H2 = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
`;
