import { styled } from "styled-components";

const StyledHome = styled.section`
  padding: 0 1rem;

  @media only screen and (max-width: 799px) {
    padding: 0;
  }

  .home-container {
    width: 100%;
    display: flex;
  }

  .options-section {
    border-right: 2px solid #e0e7ff;
    flex-grow: 1;
    padding: 1rem;

    min-height: 100vh;

    @media only screen and (max-width: 900px) {
      min-width: 190px;
    }

    @media only screen and (max-width: 799px) {
      display: none;
    }
  }

  .feed-section {
    flex-grow: 8;
    overflow: scroll;
    margin-bottom: calc(25px + 1rem);
    /* padding: 1rem 2rem; */

    @media only screen and (max-width: 799px) {
      padding: 1rem;
    }
  }

  .suggestions-section {
    border-left: 2px solid #e0e7ff;
    flex-grow: 2;
    padding: 1rem;

    @media only screen and (max-width: 900px) {
      min-width: 190px;
    }

    @media only screen and (max-width: 799px) {
      display: none;
    }
  }

  .options-section-mobile {
    display: none;
    border-top: 2px solid #e0e7ff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem 1rem;
    background-color: white;

    @media only screen and (max-width: 799px) {
      display: flex;
      column-gap: 10px;
      justify-content: space-between;
      align-items: center;
    }
  }

  .icon-content-container {
    display: flex;
    column-gap: 5px;
    align-items: center;
    margin: 2rem 0;
    cursor: pointer;
    transition: all 0.2s ease-in;
    padding: 0.5rem 1rem;
    border-radius: 10px;

    &:hover {
      background-color: #e0e7ff;
    }

    @media only screen and (max-width: 799px) {
      margin: 0;
      padding: 0.5rem 1rem;
    }
  }

  .icon {
    height: 25px;
    width: 25px;
  }
`;

export default StyledHome;
