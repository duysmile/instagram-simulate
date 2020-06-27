import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* width */
  ::-webkit-scrollbar {
    width: 0.75rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #e7e7e7;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(155, 153, 153);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(71, 66, 66);
  }
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    font-family: Lato,Helvetica-Neue,Helvetica,Arial,sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: white;
    font-size: 0.9rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #0095f6;
  }

  input {
    width: 100%;
    padding: 0.5rem;
  }

  .form-group {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .avatar {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
    display: block;

    &.large {
      width: 3rem;
      height: 3rem;
    }

    img {
      width: 100%;
      height: 100%;
    }

    &.medium {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default GlobalStyles;
