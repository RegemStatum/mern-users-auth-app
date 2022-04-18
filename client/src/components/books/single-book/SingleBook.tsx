import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useBookContext } from "../../../context/BooksContext";
import st from "../../../styles";
import Button from "../../ui/Button";
import SingleBookMoreInfo from "./SingleBookMoreInfo";

interface SingleBookProps {
  bookId: string;
}

const SingleBook: FC<SingleBookProps> = ({ bookId }) => {
  const { singleBook, setSingleBook } = useBookContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setSingleBook(bookId);
    setIsLoading(false);
  }, [bookId, setSingleBook]);

  if (isLoading) {
    return <Wrapper>Loading...</Wrapper>;
  }

  if (bookId !== singleBook.bookId && !isLoading) {
    return (
      <Wrapper>
        <p>There is no such book</p>
        <Link to="/books">
          <Button onClick={null}>Back to all books</Button>
        </Link>
      </Wrapper>
    );
  }

  const {
    name,
    author,
    publisher,
    publishingYear,
    pagesAmount,
    categories,
    price,
    cover,
    isbn13,
  } = singleBook;

  return (
    <Wrapper>
      <h3 className="title">{name}</h3>
      <p className="author">{author}</p>
      <p className="price">$ {price}</p>

      <SingleBookMoreInfo
        publisher={publisher}
        publishingYear={publishingYear}
        pagesAmount={pagesAmount}
        categories={categories}
        cover={cover}
        isbn13={isbn13}
      />
      <Link to="/books">
        <Button onClick={null} view="secondary">
          To all books
        </Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: ${st.indentations.ind_800};
  border-radius: ${st.borderRadiuses.br_1};
  color: ${st.colors.nt_1};

  .title {
    font-size: ${st.fontSizes.fs_1000};
  }

  .price {
    margin-top: ${st.indentations.ind_1600};
    font-size: ${st.fontSizes.fs_1000};
    font-weight: 600;
    color: ${st.colors.sp_grn_9};
  }
`;

export default SingleBook;
