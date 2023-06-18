import Loading from "./Loading";
import { styled, css } from "styled-components";
import { ButtonTransitionStyles } from "@/constants/GlobalStyles";

type ButtonProps = {
  variant?: "filled" | "outlined";
  children?: string | React.ReactNode;
  color?: "inherit" | "primary" | "green" | "orange";
  isLoading?: boolean;
  small?: "true" | "false" | boolean;
  fullWidth?: boolean;
  type?: "submit" | "button" | undefined;
  className?: string;
  onClick?: () => void;
};

const StyledButton = styled.button<ButtonProps>`
  padding: 0.8rem 2.5rem;
  margin: 1rem 0;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  font-family: inherit;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.small === "true" &&
    css`
      padding: 0.4rem 0.8rem;
      font-size: 1.2rem;
    `}

  ${ButtonTransitionStyles}

  /* media queries */
  @media screen and (width <= 599px) {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.6rem 1rem;
  }

  /* Styling according to props */

  ${(props) =>
    props.variant === "filled" &&
    css`
      color: white;
      background-color: ${(props) => props.theme.colors.primary};
      border: 2px solid ${(props) => props.theme.colors.primary};
    `}

  ${(props) =>
    props.variant === "outlined" &&
    css`
      background-color: inherit;
      border: 2px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.background};
    `}

    /* Green Button Styles */
  ${(props) =>
    props.color === "green" &&
    props.variant === "outlined" &&
    css`
      background-color: inherit;
      border: 2px solid ${(props) => props.theme.colors.success};
      color: ${(props) => props.theme.colors.success};
    `}

    ${(props) =>
    props.color === "green" &&
    props.variant === "filled" &&
    css`
      background-color: ${(props) => props.theme.colors.success};
      border: 2px solid ${(props) => props.theme.colors.success};
      color: white;
    `}

    /* Orange button styles */
    ${(props) =>
    props.color === "orange" &&
    props.variant === "outlined" &&
    css`
      background-color: inherit;
      border: 2px solid ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.secondary};
    `}

    ${(props) =>
    props.color === "orange" &&
    props.variant === "filled" &&
    css`
      background-color: ${(props) => props.theme.colors.secondary};
      border: 2px solid ${(props) => props.theme.colors.secondary};
      color: white;
    `}
`;

const Button = (props: ButtonProps) => {
  const { variant, children, color, isLoading, small, ...rest } = props;
  return (
    <StyledButton variant={variant} color={color} small={small} {...rest}>
      {isLoading ? <Loading variant={variant} /> : children}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: "filled",
  color: "inherit",
  isLoading: false,
  small: "false",
  type: "button",
};

export default Button;
