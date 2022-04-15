import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="/user">User</Link>
    </Wrapper>
  );
};

const Wrapper = styled.nav``;

export default Navigation;
