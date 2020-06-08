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
  }
  ul {
    list-style: none;
    padding: 0;
  }
  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }
`;

export default GlobalStyles;
