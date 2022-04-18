import React, { FC } from "react";
import styled from "styled-components";
import AuthForm from "../../components/auth/AuthForm";

const RegisterPage: FC = () => {
  return (
    <Wrapper className="container">
      <AuthForm type="register" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

export default RegisterPage;
