import Layout from "@/components/Layout";
import React from "react";

import { NextPage } from "next";
import Head from "next/head";
import Topbar from "@/components/Topbar";
import PostCard from "@/components/PostCard";

const Bookmark: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bookmark | Chatterworld</title>
      </Head>
      <>
        <Layout>
          <Topbar title="ChatterWorld | Bookmarks" />
          <div className="header-container">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </Layout>
      </>
    </>
  );
};

export default Bookmark;
