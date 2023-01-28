import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
  box-sizing: border-box;
    
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
    color: #000000

  }

  body {
    line-height: 1;
  }
  ol, ul {
	list-style: none;
}
/*오래된 브라우저 초기화*/ 
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

`;

export default GlobalStyle;
