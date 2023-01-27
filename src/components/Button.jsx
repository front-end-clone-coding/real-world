import React from "react";
import styled from "styled-components";
const Button = ({ children, ...props }) => {
  return (
    <>
      <ButtonComponents {...props}>{children}</ButtonComponents>
    </>
  );
};

export default Button;
const ButtonComponents = styled.button`
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 12px 16px;
  border: 1px solid #ededed;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  border-color: ${({ borderColor }) => borderColor || "#3b5998"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#3b5998"};
  border-radius: 22px;
  color: white;
`;
