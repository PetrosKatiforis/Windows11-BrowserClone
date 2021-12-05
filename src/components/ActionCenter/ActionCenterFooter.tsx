import React from "react"
import { BatteryContainer, ActionFooter, ActionFooterOptions } from "styles/ActionCenter"

import {
  IoBatteryFullSharp,
  IoBrushOutline,
  IoSettingsOutline
} from "react-icons/io5"

const ActionCenterFooter: React.FC = () => {
  return (
    <ActionFooter>
      <BatteryContainer>
        <IoBatteryFullSharp size={17} />
        <p>100%</p>
      </BatteryContainer>
      
      <ActionFooterOptions>
        <IoBrushOutline size={17} />
        <IoSettingsOutline size={17} />
      </ActionFooterOptions>
    </ActionFooter>
  )
}

export default ActionCenterFooter
