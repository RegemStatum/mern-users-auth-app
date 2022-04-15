import React, { FC, useState } from "react";
import styled from "styled-components";
import { IBook } from "../../types/book";

interface SingleBookProps {
  bookId: string;
}

const SingleBook: FC<SingleBookProps> = ({ bookId }) => {
  const [book, setBook] = useState<IBook>();

  const fetchBookInfo = async () => {};

  return <Wrapper>{bookId}</Wrapper>;
};

const Wrapper = styled.div``;

export default SingleBook;
