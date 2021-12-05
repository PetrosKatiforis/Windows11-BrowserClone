import React from "react"
import { 
  VscChromeMinimize, 
  VscChromeMaximize, 
  VscChromeClose 
} from "react-icons/vsc"

import useApplications from "stores/WindowStore"
import { ControlsContainer, WindowButton, ExitButton } from "styles/Window"

interface Props {
  id: string;
  handleExit: () => void;
}

const WindowControls: React.FC<Props> = ({ id, handleExit }) => {
  const applications = useApplications(state => state.applications)
  
  return (
    <ControlsContainer>
      { applications[id].isResizable && 
        <>
          <WindowButton>
            <VscChromeMinimize size={12} />
          </WindowButton>

          <WindowButton>
            <VscChromeMaximize size={12} />
          </WindowButton>
        </>
      }

      <ExitButton onClick={handleExit}>
        <VscChromeClose size={12} />
      </ExitButton>
    </ControlsContainer>
  )
}

export default WindowControls
