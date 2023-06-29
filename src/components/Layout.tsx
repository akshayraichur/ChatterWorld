import React from "react";
import { styled } from "styled-components";

import HomeIcon from "@/assets/HomeIcon";
import SearchIcon from "@/assets/SearchIcon";
import ExploreIcon from "@/assets/ExploreIcon";
import BookmarkIcon from "@/assets/BookmarkIcon";
import ProfileIcon from "@/assets/ProfileIcon";
import Button from "@/components/Button";
import WhoToFollow from "@/components/WhoToFollow";
import Link from "next/link";

const StyledLayout = styled.div`
  padding: 0 1rem;

  .header-container {
    padding: 1rem;
  }

  .home-container {
    width: 100%;
    display: flex;
    flex: 1;
  }

  .options-section {
    border-right: 2px solid #e0e7ff;
    padding: 1rem;
    min-height: 100vh;
    flex: 3;

    @media only screen and (max-width: 900px) {
      min-width: 190px;
    }

    @media only screen and (max-width: 799px) {
      display: none;
    }
  }

  .feed-section {
    overflow: scroll;
    margin-bottom: calc(25px + 1rem);
    flex: 8;

    @media only screen and (max-width: 799px) {
      padding: 1rem;
    }
  }

  .suggestions-section {
    border-left: 2px solid #e0e7ff;
    flex: 3;
    padding: 1rem;

    @media only screen and (max-width: 900px) {
      min-width: 190px;
    }

    @media only screen and (max-width: 799px) {
      display: none;
    }
  }

  .options-section-mobile {
    display: none;
    border-top: 2px solid #e0e7ff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem 1rem;
    background-color: white;

    @media only screen and (max-width: 799px) {
      display: flex;
      column-gap: 10px;
      justify-content: space-between;
      align-items: center;
    }
  }

  .icon-content-container {
    display: flex;
    column-gap: 5px;
    align-items: center;
    margin: 2rem 0;
    cursor: pointer;
    transition: all 0.2s ease-in;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    color: inherit;
    text-decoration: none;

    &:hover {
      background-color: #e0e7ff;
    }

    @media only screen and (max-width: 799px) {
      margin: 0;
      padding: 0.5rem 1rem;
    }
  }

  .icon {
    height: 25px;
    width: 25px;
  }

  .search-input {
    width: 100%;
    margin: 1rem 0;
    padding: 1rem;
    font-size: 1.2rem;
    font-family: inherit;
    border-radius: 10px;
    outline: none;
    border: 2px solid #e0e7ff;
  }
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <StyledLayout>
      <div className="home-container">
        <div className="options-section">
          <Link href="/home" className="icon-content-container">
            <div className="icon">
              <HomeIcon />
            </div>
            <p>Home</p>
          </Link>
          <Link href="/search" className="icon-content-container">
            <div className="icon">
              <SearchIcon />
            </div>
            <p>Search</p>
          </Link>
          <Link href="/explore" className="icon-content-container">
            <div className="icon">
              <ExploreIcon />
            </div>
            <p>Explore</p>
          </Link>
          <Link href="/bookmarks" className="icon-content-container">
            <div className="icon">
              <BookmarkIcon />
            </div>
            <p>Bookmark</p>
          </Link>
          <Link href="/profile" className="icon-content-container">
            <div className="icon">
              <ProfileIcon />
            </div>
            <p>Profile</p>
          </Link>
          <div>
            <Button>Create Post</Button>
          </div>
        </div>

        <div className="feed-section">{props.children}</div>

        <div className="suggestions-section">
          <div>
            <input placeholder="Search.." className="search-input" />
          </div>
          <WhoToFollow />
        </div>
      </div>

      <div className="options-section-mobile">
        <div className="icon-content-container">
          <div className="icon">
            <HomeIcon />
          </div>
        </div>
        <div className="icon-content-container">
          <div className="icon">
            <SearchIcon />
          </div>
        </div>
        <div className="icon-content-container">
          <div className="icon">
            <ExploreIcon />
          </div>
        </div>
        <div className="icon-content-container">
          <div className="icon">
            <BookmarkIcon />
          </div>
        </div>
        <div className="icon-content-container">
          <div className="icon">
            <ProfileIcon />
          </div>
        </div>
      </div>
    </StyledLayout>
  );
};

export default Layout;
