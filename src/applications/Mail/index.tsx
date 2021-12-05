import React from "react"
import { IWindow } from "types/WindowTypes"
import useMailStore from "stores/MailStore"
import { MailAppContainer, MailControls } from "styles/applications/Mail"

import WindowControls from "components/Window/WindowControls"
import MailToolbar from "applications/Mail/MailToolbar"
import MailList from "applications/Mail/MailList"
import MailPanel from "applications/Mail/MailPanel"

const Mail: React.FC<IWindow> = ({ exitWindow, id }) => {
  const selectedMail = useMailStore(state => state.selectedMail)

  return (
    <MailAppContainer>
      <MailControls
        className="window-bar"
      >
        <WindowControls
          handleExit={exitWindow}
          id={id}
        />
      </MailControls>

      <MailToolbar />

      <MailList />

      <MailPanel
        mail={selectedMail}
      />
    </MailAppContainer>
  )
}

export default Mail
