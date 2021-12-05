import React from "react"
import { 
  IoWifi, 
  IoVolumeHighOutline, 
  IoBatteryFullSharp, 
  IoChevronUp 
} from "react-icons/io5"

import { TaskbarActions, ToolsContainer } from "styles/Taskbar"
import Clock from "components/Taskbar/Clock"
import useWidgets from "stores/WidgetStore"

const TaskbarTools: React.FC = () => {
  const setIsActive = useWidgets(state => state.setIsActive)

  const handleActionClick = () => {
    setIsActive(true)
  }

  return (
    <ToolsContainer>
      <IoChevronUp />

      <TaskbarActions onClick={handleActionClick}>
        <IoWifi size={17} />
        <IoVolumeHighOutline size={17} />
        <IoBatteryFullSharp size={17} />
      </TaskbarActions>

      <Clock />
    </ToolsContainer>
  )
}

export default TaskbarTools
