import React, { FC } from "react";
import styled from "styled-components";
import st from "../../styles";
import InputWr from "../../styles/mixins/Input";

interface InputProps {
  name: string;
  onChange: (e: React.SyntheticEvent) => void;
  labelText: string;
  required?: boolean;
}

interface TextInputProps extends InputProps {
  type: "text";
  value: string;
  minLength?: number;
  maxLength?: number;
}

interface NumberInputProps extends InputProps {
  type: "number";
  value: number;
  min?: number;
  max?: number;
  step?: number;
}

type InputContainerProps = TextInputProps | NumberInputProps;

const InputContainer: FC<InputContainerProps> = (props) => {
  let { name, labelText, required, value, onChange } = props;
  if (!required) {
    required = true;
  }

  if (props.type === "text") {
    let minLength = props.minLength || 0;
    let maxLength = props.maxLength || Infinity;

    return (
      <Wrapper>
        <label htmlFor={name}>{labelText}</label>
        <InputWr
          type={props.type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
        />
      </Wrapper>
    );
  }

  if (props.type === "number") {
    let min = props.min || -Infinity;
    let max = props.max || Infinity;
    let step = props.step || 1;

    return (
      <Wrapper>
        <label htmlFor={name}>{labelText}</label>
        <InputWr
          type={props.type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          required={required}
        />
      </Wrapper>
    );
  }

  return <></>;
};

const Wrapper = styled.div`
  label {
    display: inline-block;
    padding-bottom: ${st.indentations.ind_300};
    color: ${st.colors.pr_ylw_2};
  }
`;

export default InputContainer;
