import React from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "./global" 
import useThemeStore from "stores/ThemeStore"
import { lightTheme, darkTheme } from "./themes"

interface Props {
  children: React.ReactNode;
}

const ReactiveThemeProvider: React.FC<Props> = ({ children }) => {
  const isLight = useThemeStore(state => state.isLight)

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      { children }
    </ThemeProvider>
  )
}

export default ReactiveThemeProvider
