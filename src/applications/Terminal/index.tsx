import React, { useState, useMemo } from "react"
import { TerminalContainer, Tabs, TerminalTop, Line } from "styles/applications/Terminal"

import CommandHandler from "applications/Terminal/commandHandler"
import { IWindow } from "types/WindowTypes"

import WindowControls from "components/Window/WindowControls"
import TerminalInput from "applications/Terminal/TerminalInput"
import TerminalTab from "applications/Terminal/TerminalTab"

const Terminal: React.FC<IWindow> = ({ id, exitWindow }) => {
  const [stream, setStream] = useState<string[]>([
    "Microsoft Windows [Version 10.0.22000.71]",
    "(C) Fake Microsoft Corporation. No rights reserved", ""
  ])

  const commandHandler = useMemo(() => (
    new CommandHandler(setStream)
  ), [])

  return (
    <React.Fragment>
      <TerminalTop
        className="window-bar"
      >
        <Tabs>
          <TerminalTab
            icon="assets/icons/terminal.png"
            title="Command Prompt"
          />
        </Tabs>
        
        <WindowControls
          handleExit={exitWindow}
          id={id}
        />
      </TerminalTop>

      <TerminalContainer>
        {stream.map(line => (
          <Line>{ line }</Line>
        ))}

        <TerminalInput 
          handleCommand={commandHandler.handleCommand}
        />
      </TerminalContainer>
    </React.Fragment>
  )
}

export default Terminal
