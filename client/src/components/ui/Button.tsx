import React, { FC } from "react";
import styled, { css } from "styled-components";
import st from "../../styles";

type ButtonView = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  view?: ButtonView;
  className?: string;
  type?: "submit" | "button";
  children: string;
  onClick: any;
}

const Button: FC<ButtonProps> = ({
  view = "primary",
  type = "submit",
  children,
  onClick,
  className,
}) => {
  return (
    <Wrapper onClick={onClick} className={className} view={view} type={type}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button<{ view: ButtonView }>`
  padding: ${st.indentations.ind_600};
  border-radius: ${st.borderRadiuses.br_1};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  cursor: pointer;

  ${(props) =>
    props.view === "primary"
      ? css`
          background-color: ${st.colors.pr_ylw_2};
          color: ${st.colors.pr_ylw_9};
        `
      : props.view === "secondary"
      ? css`
          background-color: transparent;
          outline: 1px solid ${st.colors.pr_ylw_9};
          color: ${st.colors.pr_ylw_9};
        `
      : css`
          background-color: transparent;
          color: ${st.colors.pr_ylw_2};
        `}
`;

export default Button;
