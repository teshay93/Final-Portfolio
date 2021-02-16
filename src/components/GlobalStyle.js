import { createGlobalStyle } from "styled-components";
import colors from '../images/colors.jpg';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  background-size: cover;
  margin: 0;
}

a {
  color: white;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  padding: 12px 36px;
  display: inline-block;
  transition: 300ms; 
  background: lightgreen;
  }
  a:hover {
  transform: translate(-8px);
}
  
  h2 {
    font-weight: lighter;
    font-size: 32px;
  }
  p {
    font-size: 24px;
  line-height: 42px;
  color: #000;
  width: 418px;
  margin-bottom: 48px;
  
  }
`;



export default GlobalStyle;
