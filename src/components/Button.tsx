import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: string;
  color?: string;
  width?: string;
};

const Button = (props: ButtonProps) => {
  const { children } = props;
  return <button {...props}>{children}</button>;
};

const StyledButton = styled(Button)`
  padding: 0.8rem 2.5rem;
  margin: 1rem 0;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  font-family: "Inter";
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadow.md};
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  width: 100%;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.color === "secondary" &&
    css`
      background-color: ${props.theme.colors.secondary};
      border: 1px solid ${props.theme.colors.secondary};
    `}
`;

export default StyledButton;
