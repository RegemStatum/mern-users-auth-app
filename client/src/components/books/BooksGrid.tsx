import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useBookContext } from "../../context/BooksContext";
import st from "../../styles";
import BookCard from "./BookCard";

interface BooksGridProps {}

const BooksGrid: FC<BooksGridProps> = () => {
  const { setBooks, books } = useBookContext();
  useEffect(() => {
    setBooks();
  }, [setBooks]);

  return (
    <Wrapper>
      {books.map((book) => (
        <BookCard key={book.bookId} {...book} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: ${st.indentations.ind_800};

  @media (min-width: ${st.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${st.breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default BooksGrid;
