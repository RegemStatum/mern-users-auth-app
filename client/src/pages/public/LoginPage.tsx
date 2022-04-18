import React, { FC } from "react";
import styled from "styled-components";
import AuthForm from "../../components/auth/AuthForm";

const LoginPage: FC = () => {
  return (
    <Wrapper className="container">
      <AuthForm type="login" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

export default LoginPage;
