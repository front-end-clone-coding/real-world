import React from "react";
import styled from "styled-components";
const OauthInput = ({ type, placeholder, borderColor, boxShadow }) => {
  console.log(boxShadow);
  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        borderColor={borderColor}
        boxShadow={boxShadow}
      />
    </>
  );
};

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

  :focus {
    color: #495057;
    background-color: #fff;
    border-color: ${(props) => props.borderColor || "#80bdff"};
    outline: 0;
    box-shadow: ${(props) =>
      props.boxShadow || "0 0 0 0.2rem rgba(0, 123, 255, 0.25)"};
  }
`;
