import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import st from "../../styles";

type ButtonView = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  view?: ButtonView;
  type?: "submit" | "button";
  to?: string;
  className?: string;
  children: string;
  onClick: any;
}

const Button: FC<ButtonProps> = ({
  view = "primary",
  type = "submit",
  to = "/error",
  children,
  onClick,
  className,
}) => {
  if (to !== "/error") {
    return (
      <Link to={to}>
        <Wrapper
          onClick={onClick}
          className={className}
          view={view}
          type={type}
        >
          {children}
        </Wrapper>
      </Link>
    );
  }

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
