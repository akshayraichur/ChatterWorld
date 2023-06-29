import Layout from "@/components/Layout";
import Topbar from "@/components/Topbar";
import Head from "next/head";
import React from "react";
import { NextPage } from "next";

const Explore: NextPage = () => {
  return (
    <>
      <Head>
        <title>Explore | Chatterworld</title>
      </Head>
      <>
        <Layout>
          <Topbar title="ChatterWorld | Explore" />
          <div className="header-container"></div>
        </Layout>
      </>
    </>
  );
};

export default Explore;
