import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import BooksManage from "../../components/books/manage-books/BooksManage";
import { useAppContext } from "../../context/AppContext";

const BooksManagePage: FC = () => {
  const { isAdmin } = useAppContext();

  return isAdmin ? (
    <Wrapper>
      <BooksManage />
    </Wrapper>
  ) : (
    <Navigate to={"/books"} replace />
  );
};

const Wrapper = styled.div``;

export default BooksManagePage;
