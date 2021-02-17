import { createGlobalStyle } from "styled-components";
// import colors from '../images/colors.jpg';
import summer from "../images/Summer.jpg";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  background-image: url(${summer});
  background-size: cover;
  margin: 0;
}

`;



export default GlobalStyle;
