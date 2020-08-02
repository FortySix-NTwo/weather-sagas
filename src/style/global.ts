import { createGlobalStyle, css } from 'styled-components'
import { theme } from '../style'

export default createGlobalStyle`
${(props) => css`
  html {
    height: 100%;

    body {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0;

      #root {
        background: ${theme.colors.background};
        color: ${theme.colors.white};
        display: flex;
        font-family: sans-serif;
        height: 100%;
        justify-content: center;
        padding: 15px;
      }
    }
  }
`}
  `
