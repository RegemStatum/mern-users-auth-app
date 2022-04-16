import React, { FC } from "react";
import styled from "styled-components";
import st from "../../styles";
import { IBook } from "../../types/book";

type SingleBookMoreInfoProps = Pick<
  IBook,
  | "publisher"
  | "publishingYear"
  | "pagesAmount"
  | "categories"
  | "cover"
  | "isbn13"
>;

const SingleBookMoreInfo: FC<SingleBookMoreInfoProps> = ({
  publisher,
  publishingYear,
  pagesAmount,
  categories,
  cover,
  isbn13,
}) => {
  return (
    <Wrapper>
      <div className="row">
        <p>Publisher</p>
        <p>{publisher}</p>
      </div>
      <div className="row">
        <p>Publishing Year</p>
        <p>{publishingYear}</p>
      </div>
      <div className="row">
        <p>Pages Amount</p>
        <p>{pagesAmount}</p>
      </div>
      <div className="row">
        <p>Categories</p>
        <p>{categories}</p>
      </div>
      <div className="row">
        <p>Cover</p>
        <p>{cover}</p>
      </div>
      <div className="row">
        <p>ISBN-13</p>
        <p>{isbn13}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: ${st.indentations.ind_800};
  margin: ${st.indentations.ind_1200} 0;
  padding: ${st.indentations.ind_800};
  border-radius: ${st.borderRadiuses.br_1};
  background-color: ${st.colors.pr_ylw_1};
  color: ${st.colors.nt_10};

  .row {
    display: flex;
    flex-direction: column;

    p {
      width: max-content;
    }

    p:first-child {
      font-weight: 600;
    }
  }

  @media (min-width: ${st.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${st.breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default SingleBookMoreInfo;
