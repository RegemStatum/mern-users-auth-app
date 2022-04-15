import styled from "styled-components";
import st from "..";

const ButtonWr = styled.button`
  padding: ${st.indentations.ind_400};
  border-radius: ${st.borderRadiuses.br_1};
  background-color: ${st.colors.nt_9};
  color: ${st.colors.nt_1};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px ${st.colors.sp_ble_5}, 0 0 2px ${st.colors.sp_ble_1};
  }
`;

export default ButtonWr;
