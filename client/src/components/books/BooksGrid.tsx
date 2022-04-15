import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useBookContext } from "../../context/BooksContext";
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

const Wrapper = styled.div``;

export default BooksGrid;
