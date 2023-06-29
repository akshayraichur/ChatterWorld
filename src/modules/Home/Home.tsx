import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import StyledHome from "./Home.styled";
import HomeIcon from "@/assets/HomeIcon";
import SearchIcon from "@/assets/SearchIcon";
import ExploreIcon from "@/assets/ExploreIcon";
import BookmarkIcon from "@/assets/BookmarkIcon";
import ProfileIcon from "@/assets/ProfileIcon";
import Button from "@/components/Button";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import WhoToFollow from "@/components/WhoToFollow";

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
                <SearchIcon />
              </div>
              <p>Search</p>
            </div>
            <div className="icon-content-container">
              <div className="icon">
                <ExploreIcon />
              </div>
              <p>Explore</p>
            </div>
            <div className="icon-content-container">
              <div className="icon">
                <BookmarkIcon />
              </div>
              <p>Bookmark</p>
            </div>
            <div className="icon-content-container">
              <div className="icon">
                <ProfileIcon />
              </div>
              <p>Profile</p>
            </div>
            <div>
              <Button>Create Post</Button>
            </div>
          </div>
          <div className="feed-section">
            <div style={{ height: "7vh", borderBottom: "2px solid #e0e7ff", padding: "1rem" }}>
              <h1>ChatterWorld | Home</h1>
            </div>
            <div style={{ padding: "1rem 2rem" }}>
              <CreatePost />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
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
      </StyledHome>
    </>
  );
};

export default Home;
