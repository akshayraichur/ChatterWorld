import { createGlobalStyle, css } from "styled-components";

const colors = {
  foreground: "#fff",
  background: "#f9fafb",
  primary: "#6366f1",
  secondary: "#fb923c",
  success: "#22c55e",
  danger: "#f43f5e",
};

export const theme = {
  colors: {
    ...colors,
  },
  shadow: {
    sm: `0 1px 2px 0 rgb(0 0 0 / 0.05)`,
    md: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`,
  },
  borderRadius: "10px",
};

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .center {
    text-align: center;
  }

  body {
    background-color: ${colors.background};
    color: #6366f1;
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

export const FadeInAnimation = css`
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20%);
    }

    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export const ButtonTransitionStyles = css`
  transition: all 0.3s ease;
  &:active {
    transform: scale(0.9);
  }
`;
