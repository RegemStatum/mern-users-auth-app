import styled from "styled-components";
import st from "..";

const AuthFormWr = styled.form`
  min-width: 300px;
  max-width: 400px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${st.indentations.ind_1200};
  background-color: ${st.colors.nt_1};
  border-radius: ${st.borderRadiuses.br_2};
  box-shadow: ${st.shadows.sh_5};
  color: #fff;

  h2 {
    margin-bottom: ${st.indentations.ind_1000};
    letter-spacing: 0.1rem;
  }

  & > div {
    label {
      display: inline-block;
      margin-bottom: ${st.indentations.ind_200};
    }
  }

  & > div:first-of-type {
    margin-bottom: ${st.indentations.ind_600};
  }

  & > button:first-of-type {
    width: 100%;
    margin-top: ${st.indentations.ind_1200};
  }

  button:last-child {
    background-color: transparent;
    color: ${st.colors.nt_6};
    margin-top: ${st.indentations.ind_800};

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default AuthFormWr;
