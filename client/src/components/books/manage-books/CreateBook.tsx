import React, { FC } from "react";
import styled from "styled-components";
import { IBook } from "../../../types/book";
import CreateBookForm from "./CreateBookForm";
import ManageTitle from "./ManageTitle";

const CreateBook: FC = () => {
  return (
    <Wrapper>
      <ManageTitle>Create Book</ManageTitle>
      <CreateBookForm type="create" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`;

export default CreateBook;
