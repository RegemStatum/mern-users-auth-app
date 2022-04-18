import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import st from "../../styles";
import Button from "../ui/Button";
import InputContainer from "../ui/InputContainer";

interface AuthFormProps {
  type: "login" | "register";
}

const AuthForm: FC<AuthFormProps> = ({ type }) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
    type,
  });

  const handleInputChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setUserInfo({ ...userInfo, [target.name]: target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {};

  const changeFormText =
    type === "login" ? (
      <p className="change-form">
        New member? <Link to="/register">Register</Link>
      </p>
    ) : (
      <p className="change-form">
        Already has an account? <Link to="/login">Login</Link>
      </p>
    );

  return (
    <Wrapper>
      <h4>{type}</h4>
      <div className="inputs">
        {type === "register" && (
          <InputContainer
            type="text"
            name="name"
            labelText="Name"
            value={userInfo.name}
            onChange={handleInputChange}
          />
        )}
        <InputContainer
          type="email"
          name="email"
          labelText="Email"
          value={userInfo.email}
          onChange={handleInputChange}
        />
        <InputContainer
          type="text"
          name="password"
          labelText="Password"
          value={userInfo.password}
          onChange={handleInputChange}
        />
      </div>
      <Button view="secondary" onClick={handleSubmit}>
        Submit
      </Button>
      {changeFormText}
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
  padding: ${st.indentations.ind_800};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${st.colors.pr_ylw_2};
  border-radius: ${st.borderRadiuses.br_2};

  h4 {
    margin-bottom: ${st.indentations.ind_800};
    font-size: ${st.fontSizes.fs_600};
    text-transform: capitalize;
    color: ${st.colors.nt_10};
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: ${st.indentations.ind_800};

    input {
      display: block;
      box-shadow: ${st.shadows.sh_1};
    }

    label {
      color: ${st.colors.nt_10};
      font-weight: 500;
    }
  }

  .change-form {
    margin-top: ${st.indentations.ind_600};
    color: ${st.colors.nt_10};

    a {
      font-weight: 600;
      color: ${st.colors.pr_ylw_8};
    }
  }

  button {
    width: 100%;
    margin-top: ${st.indentations.ind_1100};
  }
`;

export default AuthForm;
