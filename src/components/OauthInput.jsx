import React, { forwardRef } from "react";
import styled from "styled-components";
const OauthInput = forwardRef((props, ref) => {
  const {
    type,
    placeholder,
    borderColor,
    boxShadow,
    className,
    onClick,
    backgroundColor,
    borderRadious,
    color,
    onChange,
    name,
  } = props;

  let { userValue } = props;

  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        borderColor={borderColor}
        boxShadow={boxShadow}
        className={className || null}
        onClick={onClick}
        backgroundColor={backgroundColor}
        borderRadious={borderRadious}
        color={color}
        onChange={onChange}
        name={name}
        value={userValue || undefined}
        ref={ref}
      />
    </>
  );
});

export default OauthInput;
const Input = styled.input`
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 12px 16px;
  border: 1px solid #ededed;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-color: ${(props) => props.backgroundColor || "none"};
  border-radius: ${(props) => props.borderRadious || "none"};
  color: ${(props) => props.color || "none"};
  :focus {
    color: #495057;
    background-color: #fff;
    border-color: ${(props) => props.borderColor || "#80bdff"};
    outline: 0;
    box-shadow: ${(props) =>
      props.boxShadow || "0 0 0 0.2rem rgba(0, 123, 255, 0.25)"};
    background-color: ${(props) => props.backgroundColor || "none"};
  }
`;
