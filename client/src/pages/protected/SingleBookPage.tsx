import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SingleBook from "../../components/books/single-book/SingleBook";

const SingleBookPage: FC = () => {
  const params = useParams();
  const bookId = params.bookId!;

  return (
    <Wrapper className="container">
      <SingleBook bookId={bookId} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default SingleBookPage;
