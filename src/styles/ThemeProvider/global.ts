import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p, h1, h2, h3, h4, h5, h6, svg {
    color: ${({ theme }: any) => theme.text};
  }

  #desktop-root {
    position: absolute;
    top: 0;
    left: 0;
  }

  body {
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  .mt {
    margin-top: 2em;
  }
`

export default GlobalStyle
