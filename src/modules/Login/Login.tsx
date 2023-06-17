import { NextPage } from "next";
import Heading from "@/components/Heading";
import Head from "next/head";
import Input from "@/UI/Input";
import Button from "@/UI/Button";

import StyledContainer from "@/components/StyledContainer";
import PaddedContainer from "@/components/PaddedContainer";

const Login: NextPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <>
        <Head>
          <title>Login | ChatterWorld</title>
        </Head>
      </>
      <StyledContainer>
        <PaddedContainer>
          <div className="container">
            <Heading className="lg center">Welcome back!</Heading>

            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                  <Input type="text" placeholder="Email" />
                </label>

                <label htmlFor="password">
                  <Input type="password" placeholder="Password" />
                </label>

                <Button width="80%" color="success">
                  Login
                </Button>
              </form>
              <br />
              <hr />
              <br />
              <div>
                <p>If you are too lazy, just choose Google Login!</p>
              </div>
              <div>
                <Button width="80%">Sign in with Google</Button>
              </div>

              <div>
                <p>If you dont have an account, click here to create one!</p>
              </div>
            </div>
          </div>
        </PaddedContainer>
      </StyledContainer>
    </>
  );
};

export default Login;
