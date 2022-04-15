import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FormattedBook } from "../../types/book";

type BookCardProps = FormattedBook;

const BookCard: FC<BookCardProps> = ({ name, author, price, bookId }) => {
  return (
    <Link to={`/books/${bookId}`}>
      <Wrapper>
        <h4>{name}</h4>
        <p>{author}</p>
        <p>${price}</p>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  background-color: black;
  color: white;
`;

export default BookCard;
