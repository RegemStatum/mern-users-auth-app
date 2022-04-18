import React, { FC, useState } from "react";
import styled from "styled-components";
import { useBookContext } from "../../../context/BooksContext";
import st from "../../../styles";
import SelectWr from "../../../styles/mixins/Select";
import { IBook } from "../../../types/book";
import Button from "../../ui/Button";
import InputContainer from "../../ui/InputContainer";
import SubmitBadges from "../../ui/SubmitBadges";

interface CreateBookFormProps {
  type: "create" | "update";
}

interface BookObj extends Omit<IBook, "bookId" | "categories"> {
  categories: string;
}

const CreateBookForm: FC<CreateBookFormProps> = ({ type }) => {
  const { createBook, updateBook } = useBookContext();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookObj, setBookObj] = useState<BookObj>({
    name: "",
    author: "",
    publisher: "",
    publishingYear: new Date().getFullYear(),
    pagesAmount: 100,
    categories: "",
    cover: "paperback",
    price: 100,
    isbn13: "0000000000000",
  });

  const handleBookObjChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setBookObj({ ...bookObj, [target.name]: target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    let categories: string[] = [];
    categories = bookObj.categories.split(", ");
    const book = { ...bookObj, categories };

    if (type === "create") {
      const data = await createBook(book);
      if (!data.isCreated) {
        setErrorMsg(data.message);
        setIsLoading(false);
        return;
      } else {
        setIsSuccess(true);
        setIsLoading(false);
        return;
      }
    }

    if (type === "update") {
      const data = await updateBook(book);
      if (!data.isUpdated) {
        setErrorMsg(data.message);
        setIsLoading(false);
        return;
      } else {
        setIsSuccess(true);
        setIsLoading(false);
        return;
      }
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <InputContainer
        type="text"
        name="name"
        labelText="Name"
        value={bookObj.name}
        onChange={handleBookObjChange}
      />
      <InputContainer
        type="text"
        name="author"
        labelText="Author"
        value={bookObj.author}
        onChange={handleBookObjChange}
      />
      <InputContainer
        type="text"
        name="publisher"
        labelText="Publisher"
        value={bookObj.publisher}
        onChange={handleBookObjChange}
      />
      <InputContainer
        type="number"
        name="publishingYear"
        labelText="Publishing Year"
        value={bookObj.publishingYear}
        onChange={handleBookObjChange}
        min={1900}
        max={new Date().getFullYear()}
      />
      <InputContainer
        type="number"
        name="pagesAmount"
        labelText="Pages Amount"
        value={bookObj.pagesAmount}
        onChange={handleBookObjChange}
        min={1}
        max={10000}
      />
      <InputContainer
        type="text"
        name="categories"
        labelText="Categories"
        value={bookObj.categories}
        onChange={handleBookObjChange}
      />
      <div className="select">
        <label htmlFor="cover">Cover</label>
        <SelectWr
          name="cover"
          id="cover"
          value={bookObj.cover}
          onChange={handleBookObjChange}
          placeholder="Divide categories by commas"
        >
          <option value="paperback">Paperback</option>
          <option value="hardcover">Hardcover</option>
        </SelectWr>
      </div>
      <InputContainer
        type="number"
        name="price"
        labelText="Price"
        value={bookObj.price}
        onChange={handleBookObjChange}
        min={1}
        max={10000}
        step={0.01}
      />
      <InputContainer
        type="text"
        name="isbn13"
        labelText="Isbn13"
        value={bookObj.isbn13}
        onChange={handleBookObjChange}
        minLength={13}
        maxLength={13}
      />
      <SubmitBadges
        className="badges"
        isLoading={isLoading}
        isSuccess={isSuccess}
        setIsSuccess={setIsSuccess}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
      <Button type="submit" onClick={null}>
        {type === "create" ? "Create" : "Update"}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: grid;
  gap: ${st.indentations.ind_800};
  margin-bottom: ${st.indentations.ind_1600};

  .badges {
    grid-column: 1/-1;

    & > div {
      width: 100%;
      text-align: center;
    }
  }

  & > div {
    label {
      display: inline-block;
      padding-bottom: ${st.indentations.ind_300};
      color: ${st.colors.pr_ylw_2};
    }
  }

  button {
    grid-column: 1/-1;
  }

  @media (min-width: ${st.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default CreateBookForm;
