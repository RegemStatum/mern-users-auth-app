import React, { FC } from "react";
import styled from "styled-components";
import BooksManage from "../../components/books/manage-books/BooksManage";

const BooksManagePage: FC = () => {
  return (
    <Wrapper>
      <BooksManage />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default BooksManagePage;
