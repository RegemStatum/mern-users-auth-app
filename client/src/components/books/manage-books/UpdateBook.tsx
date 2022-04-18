import React, { FC } from "react";
import styled from "styled-components";
import CreateBookForm from "./CreateBookForm";
import ManageTitle from "./ManageTitle";

const UpdateBook: FC = () => {
  return (
    <Wrapper>
      <ManageTitle>Update Book</ManageTitle>
      <CreateBookForm type="update" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`;

export default UpdateBook;
