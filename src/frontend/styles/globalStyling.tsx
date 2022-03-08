import { css } from '@emotion/react'
import themeVariables from './themeVariables'

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: ${themeVariables.grey0};
  }

  body {
    height: 100%;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
    }
  }
`
