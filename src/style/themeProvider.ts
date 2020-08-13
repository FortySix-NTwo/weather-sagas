import React, { useState } from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { themeCreator } from './theme'

export const ThemeContext = React.createContext((themeName: string): void => {})

const ThemeProvider: React.FC = (props) => {
  const curThemeName = localStorage.getItem('appTheme') || 'lightTheme'
  const [themeName, _setThemeName] = useState(curThemeName)
  const theme = themeCreator(themeName)

  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName)
    _setThemeName(themeName)
  }

  return (
    <ThemeContext.Provider value={setThemeName}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
export default ThemeProvider
