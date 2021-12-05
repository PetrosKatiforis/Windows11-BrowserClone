import React, { useRef } from "react"
import actionCenterData from "data/actionCenter"

import useClickOutside from "hooks/useClickOutside"
import useWidgets from "stores/WidgetStore"

import { ActionCenterContainer, ButtonContainer } from "styles/ActionCenter"

import ActionCenterButton from "components/ActionCenter/ActionCenterButton"
import ActionCenterFooter from "components/ActionCenter/ActionCenterFooter"
import ActionCenterSliders from "components/ActionCenter/ActionCenterSliders"

const ActionCenter: React.FC = () => {
  const { setIsActive, isActive } = useWidgets()
  const actionCenterRef = useRef(null)

  useClickOutside(actionCenterRef, (event) => {
    if (isActive) {
      setIsActive(false)
    }
  })

  return (
    <ActionCenterContainer 
      ref={actionCenterRef}
      isActive={isActive}
    >
      <ButtonContainer>
        {actionCenterData.map(action => (
          <ActionCenterButton 
            key={action.text}
            action={action} 
          />
        ))}
      </ButtonContainer>

      <ActionCenterSliders />

      <ActionCenterFooter />
    </ActionCenterContainer>
  )
}

export default ActionCenter
