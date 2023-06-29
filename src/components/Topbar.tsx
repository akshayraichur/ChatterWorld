import React from "react";
import { styled } from "styled-components";

type TopbarProps = {
  title?: string;
};

const StyledTopbar = styled.div`
  height: 7vh;
  border-bottom: 2px solid #e0e7ff;
  padding: 1rem;
`;

const Topbar = (props: TopbarProps) => {
  const { title } = props;
  return (
    <StyledTopbar>
      <h1>{title}</h1>
    </StyledTopbar>
  );
};

export default Topbar;
