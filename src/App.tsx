import React from "react"
import Dock from "components/Dock"
import ActionCenter from "components/ActionCenter"

import ContextMenu from "components/ContextMenu"
import ThemeProvider from "styles/ThemeProvider"
import WindowManager from "components/Window/WindowManager"
import SystemWrapper from "components/SystemWrapper"
import Desktop from "components/Desktop"
import Taskbar from "components/Taskbar"

function App() {
  return (
    <ThemeProvider>
      <SystemWrapper>
        <ContextMenu />
        <WindowManager />

        <Desktop />
        <Taskbar />

        <ActionCenter />
        <Dock />
      </SystemWrapper>
    </ThemeProvider>
  )
}

export default App
