import React from "react";
import styled from "styled-components";
const Button = (props) => {
  const {
    type,
    borderColor,
    className,
    onClick,
    backgroundColor,
    borderRadious,
    color,
    value,
    children,
  } = props;
  return (
    <>
      <ButtonComponents
        type={type}
        borderColor={borderColor}
        className={className || null}
        onClick={onClick}
        backgroundColor={backgroundColor}
        borderRadious={borderRadious}
        color={color}
        value={value || undefined}
      >
        {children}
      </ButtonComponents>
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
  border-color: ${(props) => props.borderColor || "#3b5998"};
  background-color: ${(props) => props.backgroundColor || "#3b5998"};
  border-radius: 22px;
  color: white;
`;
