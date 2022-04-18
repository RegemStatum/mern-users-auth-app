import React, { FC } from "react";
import styled from "styled-components";
import Button from "../../components/ui/Button";
import st from "../../styles";

const HomePage: FC = () => {
  return (
    <Wrapper>
      <h1>Top 2 after Amazon</h1>
      <h3>Please, login to see the books</h3>
      <Button to="/login" onClick={null}>
        Login
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: ${st.indentations.ind_1200} 0;
  text-align: center;
  color: ${st.colors.pr_ylw_2};

  h1 {
    font-size: ${st.fontSizes.fs_1000};
  }

  h3 {
    margin: ${st.indentations.ind_1200} 0;
    font-weight: 400;
  }
`;

export default HomePage;
