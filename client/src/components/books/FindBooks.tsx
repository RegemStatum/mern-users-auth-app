import React, { FC, useRef } from "react";
import styled from "styled-components";
import { useBookContext } from "../../context/BooksContext";
import st from "../../styles";
import InputWr from "../../styles/mixins/Input";
import Button from "../ui/Button";

const FindBooks: FC = () => {
  const { filterBooksToShow } = useBookContext();
  const nameInputRef = useRef<HTMLInputElement>(null);

  const findBooks = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const name = nameInputRef.current!.value;
    filterBooksToShow(name);
    nameInputRef.current!.value = "";
  };

  return (
    <Wrapper>
      <div>
        <InputWr
          type="text"
          className=""
          placeholder="Enter book name"
          ref={nameInputRef}
          required
        />
        <Button onClick={findBooks}>Find</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;

  & > div {
    display: flex;

    input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    button {
      padding-left: ${st.indentations.ind_1000};
      padding-right: ${st.indentations.ind_1000};
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    @media (min-width: ${st.breakpoints.lg}) {
      input,
      button {
        border-radius: ${st.borderRadiuses.br_1};
      }

      flex-direction: column;
      gap: ${st.indentations.ind_200};
    }
  }
`;

export default FindBooks;
