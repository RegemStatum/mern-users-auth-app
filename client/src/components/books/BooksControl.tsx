import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import st from "../../styles";
import Button from "../ui/Button";
import FindBooks from "./FindBooks";

const BooksControl: FC = () => {
  const { isAdmin } = useAppContext();

  return (
    <Wrapper>
      <FindBooks />
      <Link to="/books/books-manage">
        {isAdmin && (
          <Button view="tertiary" className="manage-btn" onClick={null}>
            Manage books
          </Button>
        )}
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 25rem;
  margin: ${st.indentations.ind_1400} auto;
  display: flex;
  flex-direction: column;
  gap: ${st.indentations.ind_800};

  .manage-btn {
    width: 100%;
    padding-top: ${st.indentations.ind_600};
    padding-bottom: ${st.indentations.ind_600};
  }

  @media (min-width: ${st.breakpoints.lg}) {
    gap: ${st.indentations.ind_1200};
  }
`;

export default BooksControl;
