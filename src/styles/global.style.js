import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth !important;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth !important;

    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.background}bb;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.background}cf;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.colors.background}c0;
    }
  }
`
