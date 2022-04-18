import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FormattedBook } from "../../types/book";
import st from "../../styles";

type BookCardProps = FormattedBook;

const BookCard: FC<BookCardProps> = ({ name, author, price, bookId }) => {
  return (
    <Link to={`/books/${bookId}`}>
      <Wrapper>
        <h4>{name}</h4>
        <p>{author}</p>
        <p>${price}</p>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  padding: ${st.indentations.ind_800};
  background-color: ${st.colors.pr_ylw_1};
  border-radius: ${st.borderRadiuses.br_2};
  box-shadow: ${st.shadows.sh_3};

  h4 {
    font-size: ${st.fontSizes.fs_600};
    color: ${st.colors.nt_10};
  }

  p:first-of-type {
    font-size: ${st.fontSizes.fs_300};
    font-weight: 500;
    color: ${st.colors.nt_7};
    margin-bottom: ${st.indentations.ind_800};
  }

  p:last-of-type {
    font-size: ${st.fontSizes.fs_900};
    font-weight: 600;
    color: ${st.colors.sp_grn_9};
  }
`;

export default BookCard;
