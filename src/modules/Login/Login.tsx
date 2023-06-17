import { NextPage } from "next";
import StyledLogin from "./Login.styles";
import Heading from "@/components/Heading";
import Head from "next/head";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Login: NextPage = () => {
  return (
    <>
      <>
        <Head>
          <title>Login</title>
        </Head>
      </>
      <StyledLogin>
        <div className="container">
          <Heading className="lg center">Welcome back!</Heading>

          <div className="form-container">
            <div className="input-container">
              <Input type="text" placeholder="Email" />
            </div>
            <div className="input-container">
              <Input type="password" placeholder="Password" />
            </div>
            <div>
              <Button color="secondary" width="70%">
                Login
              </Button>
            </div>
            <br />
            <hr />
            <br />
            <div>
              <p>If you are too lazy, just choose Google Login!</p>
            </div>
            <div>
              <Button width="70%">Sign in with Google</Button>
            </div>

            <div>
              <p>If you dont have an account, click here to create one!</p>
            </div>
          </div>
        </div>
      </StyledLogin>
    </>
  );
};

export default Login;
