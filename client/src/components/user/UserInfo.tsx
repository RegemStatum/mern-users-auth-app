import React, { FC } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import st from "../../styles";

const UserInfo: FC = () => {
  const { user } = useAppContext();

  return (
    <Wrapper>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: ${st.indentations.ind_1000};
  color: ${st.colors.pr_ylw_2};

  h2 {
    font-size: ${st.fontSizes.fs_1200};
  }

  p {
    font-size: ${st.fontSizes.fs_800};
  }
`;

export default UserInfo;
