import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import Layout from "@/components/Layout";
import Topbar from "@/components/Topbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        <Topbar title="ChatterWorld | Home" />
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
