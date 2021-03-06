import styled from "styled-components";
import st from "..";

const InputWr = styled.input`
  width: 100%;
  font-size: ${st.fontSizes.fs_300};
  padding: ${st.indentations.ind_600} ${st.indentations.ind_400};
  border-radius: ${st.borderRadiuses.br_1};
  font-family: "Roboto", sans-serif;

  &:focus {
    outline: none;
  }
`;

export default InputWr;
