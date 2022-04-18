import React, { FC, useEffect } from "react";
import styled from "styled-components";
import st from "../../styles";
import Badge from "./Badge";

interface SubmitBadgesProps {
  isLoading: boolean;
  isSuccess: boolean;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

const SubmitBadges: FC<SubmitBadgesProps> = ({
  isLoading,
  isSuccess,
  setIsSuccess,
  errorMsg,
  setErrorMsg,
  className,
}) => {
  // clear Error
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [errorMsg]);

  // clear Success
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isSuccess]);

  return (
    <Wrapper className={className || ""}>
      {isLoading && <Badge view="info">Loading...</Badge>}
      {isSuccess && <Badge view="success">Success</Badge>}
      {errorMsg && <Badge view="error">{errorMsg}</Badge>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: ${st.indentations.ind_400} 0;
`;

export default SubmitBadges;
