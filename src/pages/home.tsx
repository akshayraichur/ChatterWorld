import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { styled } from "styled-components";
import HomeIcon from "@/assets/HomeIcon";
import SearchIcon from "@/assets/SearchIcon";
import ExploreIcon from "@/assets/ExploreIcon";
import BookmarkIcon from "@/assets/BookmarkIcon";

const StyledHome = styled.section`
  padding: 0 1rem;

  .home-container {
    width: 100%;
    border: 1px solid red;
    display: flex;
  }

  .options-section {
    border: 1px solid blue;
    flex-grow: 1;

    @media only screen and (max-width: 799px) {
      display: none;
    }
  }

  .feed-section {
    border: 1px solid blue;
    flex-grow: 2;
    overflow: scroll;
    margin-bottom: 5vh;
  }

  .suggestions-section {
    border: 1px solid blue;
    flex-grow: 1;

    @media only screen and (max-width: 799px) {
      display: none;
    }
  }

  .options-section-mobile {
    display: none;
    border: 1px solid black;
    height: 5vh;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 1rem;
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
  }

  .icon {
    height: 25px;
    width: 25px;

    /* @media only screen and (max-width: 799px) {
      height: 10px;
      width: 10px;
    } */
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <StyledHome>
        <div className="home-container">
          <div className="options-section">
            <div className="icon-content-container">
              <div className="icon">
                <HomeIcon />
              </div>
              <p>Home</p>
            </div>
            <div className="icon-content-container">
              <div className="icon">
                <HomeIcon />
              </div>
              <p>Search</p>
            </div>
            <div className="icon-content-container">
              <div className="icon">
                <HomeIcon />
              </div>
              <p>Explore</p>
            </div>
            <div className="icon-content-container">
              <div className="icon">
                <HomeIcon />
              </div>
              <p>Bookmark</p>
            </div>
            <div className="icon-content-container">
              <div className="icon">
                <HomeIcon />
              </div>
              <p>Profile</p>
            </div>
          </div>
          <div className="feed-section"></div>
          <div className="suggestions-section"></div>
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
              <HomeIcon />
            </div>
          </div>
        </div>
      </StyledHome>
    </>
  );
};

export default Home;
