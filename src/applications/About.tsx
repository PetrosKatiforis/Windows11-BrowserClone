import React from "react"
import { IWindow } from "types/WindowTypes"

import { CenterContainer, FlexRight } from "styles/Layout"
import { Button } from "styles/System"
import { P } from "styles/Typography"

const AboutWindows: React.FC<IWindow> = ({ exitWindow }) => {
  return (
    <CenterContainer className="mt">
      <img 
        src="/assets/icons/windows11.png" 
        alt="Windows 11 Clone Logo"
      />

      <P>Microsoft Windows Clone</P>
      <P>Version Dev (OS Build 21996.1)</P>
      <P>Fake Microsoft Corporation. No rights reserved.</P>
      <br />

      <P>
        This Windows 11 Clone was built using React's typescript template, 
        with zustand for state management and styled components for theming and styling the application
      </P>

      <FlexRight>
        <Button onClick={exitWindow}>
          OK
        </Button>
      </FlexRight>
    </CenterContainer>
  )
}

export default AboutWindows
