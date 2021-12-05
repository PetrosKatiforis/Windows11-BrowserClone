import React, { useRef } from "react"
import { IApplication } from "types/WindowTypes"

import { 
  WindowContainer, 
  WindowTitle, 
  WindowBar,
  WindowContent
} from "styles/Window"

import WindowWrapper from "components/Window/WindowWrapper"
import WindowControls from "components/Window/WindowControls"
import useApplications from "stores/WindowStore"

interface Props {
  window: IApplication;
  id: string;
}

const Window: React.FC<Props> = ({ window, id }) => {
  const windowRef = useRef<HTMLDivElement | null>(null)
  const toggleApp = useApplications(state => state.toggleApp)

   const exitWindow = () => {
    windowRef.current!.classList.add("closing")

    setTimeout(() => {
      toggleApp(id, false)    
    }, 200)
  }

  return (
    <WindowWrapper
      window={window}
      id={id}
    >
      <WindowContainer ref={windowRef}>
        { !window.isBorderless && 
            <WindowBar className="window-bar">
              <WindowTitle>{ window.title }</WindowTitle>

              <WindowControls 
                handleExit={exitWindow}
                id={id} 
              />
            </WindowBar>
        }
        
        <WindowContent>
          { window.Component({ 
            exitWindow,
            id 
          }) }
        </WindowContent>
      </WindowContainer>
    </WindowWrapper>
  )
}

export default Window
