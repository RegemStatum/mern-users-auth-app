import React, { FC } from "react";
import styled from "styled-components";
import BooksGrid from "../../components/books/BooksGrid";

const BooksPage: FC = () => {
  return (
    <Wrapper className="container">
      <BooksGrid />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default BooksPage;
