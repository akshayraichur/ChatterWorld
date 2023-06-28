import { Avatar } from "@mui/material";
import React from "react";
import { styled } from "styled-components";
import Button from "./Button";

const StyledCreatePost = styled.div`
  border: 2px solid #e0e7ff;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 10px;
  width: 100%;

  .container {
    display: flex;
    column-gap: 15px;
  }

  .textarea {
    width: 100%;
    border: none;
    border-radius: 10px;
    font-family: inherit;
    padding: 0.5rem;
  }
`;

const CreatePost = () => {
  return (
    <StyledCreatePost>
      <div className="container">
        <Avatar />
        <textarea className="textarea" rows={10} placeholder="Write your thoughts"></textarea>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div></div>
        <Button small="true">Post</Button>
      </div>
    </StyledCreatePost>
  );
};

export default CreatePost;
