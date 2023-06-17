import Input from "@/UI/Input";
import StyledContainer from "@/components/StyledContainer";
import Head from "next/head";
import React from "react";
import Button from "@/UI/Button";
import PaddedContainer from "@/components/PaddedContainer";
import Heading from "@/components/Heading";
import { NextPage } from "next";

const SignUp: NextPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <Head>
        <title>SignUp | ChatterWorld</title>
      </Head>
      <StyledContainer>
        <PaddedContainer>
          <div className="container">
            <Heading className="lg center">Welcome to ChatterWorld 👋</Heading>

            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                  <Input type="text" placeholder="Full Name.." />
                </label>

                <label htmlFor="email">
                  <Input type="text" placeholder="Email.." />
                </label>

                <label htmlFor="password">
                  <Input type="password" placeholder="Password.." />
                </label>

                <label htmlFor="username">
                  <Input type="text" placeholder="Username.."></Input>
                </label>

                <Button width="80%" color="success">
                  SignUp
                </Button>
              </form>
              <br />
              <hr />
              <br />
              <div>
                <p>If you are too lazy, just choose Google Sign up!</p>
              </div>
              <div>
                <Button width="80%">Sign Up with Google</Button>
              </div>

              <div>
                <p>Already have an account, click here to login!</p>
              </div>
            </div>
          </div>
        </PaddedContainer>
      </StyledContainer>
    </>
  );
};

export default SignUp;
