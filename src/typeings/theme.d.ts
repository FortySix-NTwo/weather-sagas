import 'styled-components'

import { theme } from '../style'

type theme = typeof Theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
