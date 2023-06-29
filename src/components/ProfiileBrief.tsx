import PlusIcon from "@/assets/PlusIcon";
import { Avatar } from "@mui/material";
import React from "react";
import { styled } from "styled-components";

const StyledProfileBrief = styled.div`
  display: flex;
  padding: 0.5rem 0;
  column-gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;

  .follow {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      width: 20px;
    }
  }
`;

const ProfiileBrief = () => {
  return (
    <StyledProfileBrief>
      <Avatar sx={{ width: 24, height: 24 }} />
      <p>Akshay Raichur</p>
      <p className="follow">
        <PlusIcon /> Follow
      </p>
    </StyledProfileBrief>
  );
};

export default ProfiileBrief;
