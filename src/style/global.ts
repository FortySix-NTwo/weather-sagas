import { createGlobalStyle, css } from 'styled-components'
import { theme } from '../style'

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
}

export default createGlobalStyle`
  ${(props) => css`
    html {
      ${media.desktop} {
        height: 100%;
      }
      ${media.tablet} {
        height: 100%;
      }
      ${media.phone} {
        height: 100%;
      }
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
