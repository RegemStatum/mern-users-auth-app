import styled from "styled-components";
import st from "..";

const ButtonWr = styled.button`
  padding: ${st.indentations.ind_400};
  border-radius: ${st.borderRadiuses.br_1};
  background-color: ${st.colors.pr_ylw_9};
  color: ${st.colors.nt_1};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  cursor: pointer;
`;

export default ButtonWr;
