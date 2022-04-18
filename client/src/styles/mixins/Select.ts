import styled from "styled-components";
import st from "..";

const SelectWr = styled.select`
  width: 100%;
  padding: ${st.indentations.ind_600} ${st.indentations.ind_400};
  border-radius: ${st.borderRadiuses.br_1};

  & > option {
    font-family: "Roboto", sans-serif;
    font-size: ${st.fontSizes.fs_300};
  }

  &:focus {
    outline: none;
  }
`;

export default SelectWr;
