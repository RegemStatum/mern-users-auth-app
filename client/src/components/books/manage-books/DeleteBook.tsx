import React, { FC, useRef, useState } from "react";
import styled from "styled-components";
import { useBookContext } from "../../../context/BooksContext";
import Button from "../../ui/Button";
import InputWr from "../../../styles/mixins/Input";
import ManageTitle from "./ManageTitle";
import SubmitBadges from "../../ui/SubmitBadges";

const DeleteBook: FC = () => {
  const { deleteBook } = useBookContext();
  const isbnInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleDelete = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const isbn13 = isbnInputRef.current!.value;
    const data = await deleteBook(isbn13);
    if (!data.isDeleted) {
      setIsLoading(false);
      setErrorMsg(data.message);
      return;
    }
    setIsLoading(false);
    setIsSuccess(true);
  };

  return (
    <Wrapper onSubmit={handleDelete}>
      <ManageTitle>Delete Book</ManageTitle>
      <InputWr
        type="text"
        placeholder="Enter isbn 13"
        minLength={13}
        maxLength={13}
        ref={isbnInputRef}
        required
      />
      <SubmitBadges
        isLoading={isLoading}
        isSuccess={isSuccess}
        setIsSuccess={setIsSuccess}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
      <Button onClick={null} className="button">
        Delete
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  max-width: 30rem;
  margin: 0 auto;

  .button {
    width: 100%;
  }
`;

export default DeleteBook;
