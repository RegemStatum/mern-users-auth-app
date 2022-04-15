import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SingleBook from "../../components/books/SingleBook";

const SingleBookPage: FC = () => {
  const params = useParams();
  const bookId = params.bookId!;

  return (
    <Wrapper>
      <SingleBook bookId={bookId} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default SingleBookPage;
