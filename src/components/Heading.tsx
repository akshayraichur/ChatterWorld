import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

type HeadingProp = {
  children: string;
  className?: string;
};

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};

  ${(props) =>
    props.className?.includes("lg") &&
    css`
      font-size: 2.6rem;
    `}
  ${(props) =>
    props.className?.includes("xl") &&
    css`
      font-size: 4rem;
    `}
    ${(props) =>
    props.className?.includes("md") &&
    css`
      font-size: 2rem;
    `}
    ${(props) =>
    props.className?.includes("center") &&
    css`
      text-align: center;
    `};
`;

const Heading = (props: HeadingProp) => {
  const { children } = props;

  return <StyledHeading {...props}>{children}</StyledHeading>;
};

export default Heading;
