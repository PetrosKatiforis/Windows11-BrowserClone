import React from "react"
import useDock from "stores/DockStore"
import TaskbarIcon from "components/Taskbar/TaskbarIcon"

const DockIcon: React.FC = () => {
  const setIsActive = useDock(state => state.setIsActive)
  
  return (
    <TaskbarIcon>
      <img
        alt="Windows Dock Icon"
        src="assets/icons/windows.png" 
        onClick={() => setIsActive(true)}
      />
    </TaskbarIcon>
  )
}

export default DockIcon
