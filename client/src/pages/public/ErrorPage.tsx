import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/ui/Button";
import st from "../../styles";

const ErrorPage: FC = () => {
  return (
    <Wrapper>
      <span>404</span>
      <p>Page was not found</p>
      <Link to="/">
        <Button onClick={null}>Home page</Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: max-content;
  margin: 0 auto;
  color: ${st.colors.pr_ylw_2};
  text-align: center;

  span {
    font-size: ${st.fontSizes.fs_1200};
  }

  p {
    margin-bottom: ${st.indentations.ind_800};
  }

  button {
    display: block;
    margin: 0 auto;
  }

  @media (min-width: ${st.breakpoints.md}) {
    span {
      font-size: ${st.fontSizes.fs_1600};
    }

    p {
      font-size: ${st.fontSizes.fs_1000};
      margin-bottom: ${st.indentations.ind_1200};
    }

    button {
      font-size: ${st.fontSizes.fs_600};
    }
  }
`;

export default ErrorPage;
