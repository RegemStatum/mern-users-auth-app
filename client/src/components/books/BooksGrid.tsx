import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useBookContext } from "../../context/BooksContext";
import st from "../../styles";
import Button from "../ui/Button";
import BookCard from "./BookCard";

interface BooksGridProps {}

const BooksGrid: FC<BooksGridProps> = () => {
  const { setBooks, showAllBooks, booksToShow, books } = useBookContext();
  useEffect(() => {
    setBooks();
  }, [setBooks]);

  if (booksToShow.length === 0) {
    return (
      <Wrapper>
        <p className="no-books">No books has been found</p>

        {books.length !== 0 && (
          <Button
            className="show-all-btn"
            onClick={showAllBooks}
            type="button"
            view="secondary"
          >
            Show All
          </Button>
        )}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {booksToShow.map((book) => (
        <BookCard key={book.bookId} {...book} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: ${st.indentations.ind_800};

  .no-books {
    grid-column: 1/-1;
    font-size: ${st.fontSizes.fs_1000};
    font-weight: 500;
    color: #fff;
    text-align: center;
  }

  .show-all-btn {
    width: 100%;
    max-width: 30rem;
    grid-column: 1/-1;
    margin: ${st.indentations.ind_1200} auto;
  }

  @media (min-width: ${st.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${st.breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${st.breakpoints.lg}) {
    margin: ${st.indentations.ind_1400} 0;
  }
`;

export default BooksGrid;
