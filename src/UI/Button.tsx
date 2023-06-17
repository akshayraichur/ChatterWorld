import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: string;
  color?: string;
  width?: string;
  className?: string;
  isLoading?: boolean;
  type?: "button" | "submit" | undefined;
};

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};

const StyledButton = styled(Button)`
  padding: 0.8rem 2.5rem;
  margin: 1rem 0;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadow.md};
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  width: 100%;
  font-family: var(--fira-sans);

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

    ${(props) =>
    props.color === "success" &&
    css`
      background-color: ${props.theme.colors.success};
      border: 1px solid ${props.theme.colors.success};
    `}


    @media only screen and (width <= 599px ) {
    width: 100%;
  }
`;

StyledButton.defaultProps = {
  type: "button",
};

export default StyledButton;
