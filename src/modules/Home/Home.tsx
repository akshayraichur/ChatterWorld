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
import Layout from "@/components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
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
      </Layout>
    </>
  );
};

export default Home;
