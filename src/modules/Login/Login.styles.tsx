import styled from "@emotion/styled";

const StyledLogin = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .container {
    background-color: ${(props) => props.theme.colors.foreground};
    padding: 1.2rem;
    border-radius: ${(props) => props.theme.borderRadius};

    @media screen and (max-width: 899px) {
      width: 100%;
    }
  }

  .form-container {
    margin-top: 2rem;
    text-align: center;
  }

  .input-container {
    width: 100%;
    text-align: center;
    margin: 0.5rem 0;
  }
`;

export default StyledLogin;
