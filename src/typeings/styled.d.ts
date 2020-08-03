import {} from 'styled-components'
import { CSSProp } from 'styled-components'
import { theme } from '../style'

type Theme = typeof Theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject
  }
}
