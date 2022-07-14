import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background} !important;
    color: ${({ theme }) => theme.text} !important;
    font-family: 'Raleway', sans-serif, Tahoma, Helvetica, Arial;
    font-stretch: normal;
    font-style: normal;
  }
`