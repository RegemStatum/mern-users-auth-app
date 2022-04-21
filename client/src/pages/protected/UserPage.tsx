import React, { FC } from "react";
import styled from "styled-components";
import { UserControl, UserInfo } from "../../components/user";

const UserPage: FC = () => {
  return (
    <Wrapper>
      <UserInfo />
      <UserControl />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: max-content;
  margin: 0 auto;
  text-align: center;
`;

export default UserPage;
