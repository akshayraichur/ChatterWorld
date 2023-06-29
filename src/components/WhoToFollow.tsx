import PlusIcon from "@/assets/PlusIcon";
import { Avatar } from "@mui/material";
import React from "react";
import { styled } from "styled-components";
import Button from "./Button";
import ProfiileBrief from "./ProfiileBrief";

const StyledWhoToFollow = styled.div`
  background-color: #fff;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 10px;
`;

const WhoToFollow = () => {
  return (
    <StyledWhoToFollow>
      <h1>Who to follow</h1>
      <div>
        <ProfiileBrief />
        <ProfiileBrief />
        <ProfiileBrief />
        <ProfiileBrief />
      </div>
    </StyledWhoToFollow>
  );
};

export default WhoToFollow;
