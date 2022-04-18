import React, { FC } from "react";
import styled from "styled-components";
import st from "../../../styles";

interface ManageTitleProps {
  children: string;
}

const ManageTitle: FC<ManageTitleProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.h2`
  margin: ${st.indentations.ind_1200} 0;
  font-size: ${st.fontSizes.fs_1000};
  color: white;
  text-align: center;
`;

export default ManageTitle;
