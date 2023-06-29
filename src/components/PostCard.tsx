import BookmarkIcon from "@/assets/BookmarkIcon";
import CommentIcon from "@/assets/CommentIcon";
import HeartIcon from "@/assets/HeartIcon";
import ShareIcon from "@/assets/ShareIcon";
import { Avatar } from "@mui/material";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const StyledPostCard = styled.section`
  border: 2px solid #e0e7ff;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem 0;

  .container {
    display: flex;
    column-gap: 10px;
    /* align-items: center; */
  }

  .textDecoration {
    text-decoration: none;
    color: inherit;
  }

  .icon-container {
    display: flex;
    column-gap: 10px;
    justify-content: space-between;
  }

  .icon-container div {
    width: 20px;
  }
`;

const PostCard = () => {
  return (
    <StyledPostCard>
      <div className="container">
        <Avatar />
        <Link href="/" className="textDecoration">
          <div>
            <h3>
              Akshay Raichur <span>@akshayraichur</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt error nesciunt repellendus accusantium
              suscipit reprehenderit! Unde magni aut rerum aspernatur? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Maiores itaque reiciendis, saepe illum officiis consequuntur alias ex? Nulla sed hic
              optio neque explicabo, harum earum ex doloribus ab eligendi, error temporibus voluptas illum accusantium
              consequuntur aliquam eaque facere suscipit porro!
            </p>
          </div>
        </Link>
      </div>
      <div className="icon-container">
        <div>
          <HeartIcon />
        </div>
        <div>
          <CommentIcon />
        </div>
        <div>
          <ShareIcon />
        </div>
        <div>
          <BookmarkIcon />
        </div>
      </div>
    </StyledPostCard>
  );
};

export default PostCard;
