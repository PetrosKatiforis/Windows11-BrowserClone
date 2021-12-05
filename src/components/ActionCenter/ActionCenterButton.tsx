import React, { useState } from "react"
import { IAction } from "types/WidgetTypes"
import { ActionButtonContainer, ActionButton } from "styles/ActionCenter"

interface Props {
  action: IAction;
}

const ActionCenterButton: React.FC<Props> = ({ action }) => {
  const [isActive, setIsActive] = useState(action.isEnabled || false)

  const toggleIsActive = () => {
    setIsActive(wasActive => !wasActive)
  }

  return (
    <ActionButtonContainer>
      <ActionButton 
        isActive={isActive}
        onClick={toggleIsActive}
      >
        { action.Icon({ size: 18 }) }
      </ActionButton>

      <p>{ action.text }</p>
    </ActionButtonContainer>
  )
}

export default ActionCenterButton
