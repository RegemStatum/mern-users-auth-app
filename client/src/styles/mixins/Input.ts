import styled from "styled-components";
import st from "..";

const InputWr = styled.input`
  width: 100%;
  font-size: ${st.fontSizes.fs_300};
  padding: ${st.indentations.ind_300} ${st.indentations.ind_400};
  border-radius: ${st.borderRadiuses.br_1};
  font-family: "Roboto", sans-serif;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${st.colors.sp_ble_5};
  }
`;

export default InputWr;
