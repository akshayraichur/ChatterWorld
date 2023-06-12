import { css } from "@emotion/react";

const colors = {
  foreground: "#fff",
  background: "#f3f4f6",
  primary: "#6366f1",
  secondary: "#fb923c",
  success: "#22c55e",
  danger: "#f43f5e",
};

export const globalStyles = css`
  body {
    background-color: ${colors.background};
  }

  h1 {
    font-family: "Inter", sans;
  }

  .bsh {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .card {
    background-color: ${colors.foreground};
    padding: 1rem;
    margin: 1rem;
    border-radius: 10px;
  }

  .btn {
    background-color: ${colors.primary};
    color: white;
    padding: 0.8rem 1rem;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
    margin: 0.5rem 0.2rem 0.5rem 0;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    font-family: inherit;
    transition: all 0.3s ease;

    &:active {
      transform: scale(0.9);
    }
  }

  .danger {
    background-color: ${colors.danger};
  }

  .success {
    background-color: ${colors.success};
  }

  .secondary {
    background-color: ${colors.secondary};
  }
`;

export const theme = {
  colors: {
    foreground: "#fff",
    background: "#f3f4f6",
    primary: "#6366f1",
    secondary: "#fb923c",
    success: "#22c55e",
    danger: "#f43f5e",
  },
  shadow: {
    sm: `box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`,
    md: `box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`,
  },
};
