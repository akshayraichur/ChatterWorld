import Button from "@/components/Button";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import Topbar from "@/components/Topbar";
import { Avatar } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { styled } from "styled-components";

const StyledProfile = styled.div`
  padding: 1rem;
  /* border: 1px solid red; */

  .mt-2 {
    margin-top: 1rem;
  }

  .profile-info {
    margin: 2rem 0;
    padding-bottom: 2rem;
    border-bottom: 2px solid #e0e7ff;
  }

  .profile-container {
    display: flex;
    justify-content: center;
    column-gap: 1rem;
  }

  .text-center {
    text-align: center;
  }

  .title {
    margin: 1rem 0 0 0;
  }
`;

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile | ChatterWorld</title>
      </Head>
      <>
        <Layout>
          <Topbar title="ChatterWorld | Profile" />
          <StyledProfile>
            <div className="profile-info">
              <div className="profile-container">
                <Avatar sx={{ width: 100, height: 100 }} />
              </div>
              <h1 className="text-center title">Akshay Raichur</h1>
              <p className="text-center">@akshayraichur</p>
              <div className="profile-container">
                <Button small="true" className="text-center">
                  Edit Profile
                </Button>
              </div>
              <div>
                <p className="text-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, a corporis eum rem vero ipsum. Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. At, ducimus?
                </p>
              </div>

              <div className="profile-container text-center mt-2">
                <h2>10 Following</h2>
                <h2>20 Posts</h2>
                <h2>10 Followers</h2>
              </div>
            </div>
            <div>
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </StyledProfile>
        </Layout>
      </>
    </>
  );
};

export default Profile;
