import React, { FC } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import Button from "../ui/Button";

const UserControl: FC = () => {
  const { logOut } = useAppContext();

  return (
    <Wrapper>
      <Button view="secondary" onClick={logOut}>
        Log out
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default UserControl;
