import React, { FC } from "react";
import styled, { css } from "styled-components";
import st from "../../styles";

type BadgeStyle = "info" | "success" | "error";

interface BadgeProps {
  view: BadgeStyle;
  children: string;
}

const Badge: FC<BadgeProps> = ({ view, children }) => {
  return <Wrapper view={view}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ view: BadgeStyle }>`
  width: max-content;
  padding: ${st.indentations.ind_200} ${st.indentations.ind_400};
  border-radius: ${st.borderRadiuses.br_1};
  font-weight: 600;

  ${(props) =>
    props.view === "info"
      ? css`
          color: ${st.colors.sp_can_9};
          background-color: ${st.colors.sp_can_2};
        `
      : props.view === "success"
      ? css`
          color: ${st.colors.sp_grn_9};
          background-color: ${st.colors.sp_grn_2};
        `
      : css`
          color: ${st.colors.pr_red_9};
          background-color: ${st.colors.pr_red_2};
        `}
`;

export default Badge;
