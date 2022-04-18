import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/ui/Button";

const ErrorPage: FC = () => {
  return (
    <Wrapper>
      <h2>404</h2>
      <Link to="/">
        <Button onClick={null}>Home page</Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ErrorPage;
