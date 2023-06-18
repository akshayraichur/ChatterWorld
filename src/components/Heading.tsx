import React from "react";
import { css, styled } from "styled-components";

type HeadingProps = {
  md?: "true" | "false" | boolean;
  lg?: "true" | "false" | boolean;
  xl?: "true" | "false" | boolean;
  children: string;
  center?: "true" | "false" | boolean;
};

const StyledHeading = styled.h1<HeadingProps>`
  font-weight: 700;
  margin: 0.4rem 0;

  ${(props) =>
    props.md &&
    css`
      font-size: 3rem;
    `}

  ${(props) =>
    props.lg &&
    css`
      font-size: 3.4rem;
    `}

    ${(props) =>
    props.xl &&
    css`
      font-size: 3.8rem;
      font-weight: 900;
    `}

    ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
`;

const Heading = (props: HeadingProps) => {
  const { children, ...rest } = props;
  return <StyledHeading {...rest}>{children}</StyledHeading>;
};

export default Heading;
