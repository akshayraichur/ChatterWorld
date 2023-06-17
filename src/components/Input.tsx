import React from "react";
import styled from "@emotion/styled";

type InputProps = {
  placeholder: string;
  type: string;
};

const StyledInput = styled.input`
  width: 80%;
  margin: 0.5rem 0;
  padding: 0.8rem;
  font-family: var(--fira-sans);
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};

  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.primary};
  }

  :focus {
    outline: 1px solid ${(props) => props.theme.colors.primary};
  }

  @media only screen and (width <= 599px) {
    width: 100%;
  }
`;

const Input = (props: InputProps) => {
  const { placeholder, type } = props;
  return <StyledInput placeholder={placeholder} type={type} />;
};

export default Input;
