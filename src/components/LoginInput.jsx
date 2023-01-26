import React from "react";
import styled from "styled-components";

const LoginInput = (props) => {
  const { type } = props;
  return (
    <>
      <Input type={type}></Input>
    </>
  );
};

export default LoginInput;
const Input = styled.input``;
