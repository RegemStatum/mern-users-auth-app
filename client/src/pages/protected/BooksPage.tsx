import React, { FC } from "react";
import styled from "styled-components";
import BooksControl from "../../components/books/BooksControl";
import BooksGrid from "../../components/books/BooksGrid";
import st from "../../styles";

const BooksPage: FC = () => {
  return (
    <Wrapper className="container">
      <BooksControl />
      <BooksGrid />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${st.breakpoints.lg}) {
    grid-template-columns: 1fr 3fr;
    gap: ${st.indentations.ind_1000};
  }
`;

export default BooksPage;
