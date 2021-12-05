import React, { useRef } from "react"
import triggerAnimation from "utils/triggerAnimation"

import { TaskbarIconContainer } from "styles/Taskbar"

interface Props {
  children: React.ReactNode;
}

const TaskbarIcon: React.FC<Props> = ({ children }) => {
  const iconRef = useRef<HTMLImageElement | null>(null)

  const handleClick = () => {
    triggerAnimation(iconRef, "clicked")
  }

  return (
    <TaskbarIconContainer
      onClick={handleClick}
      ref={iconRef}
    >
      { children }
    </TaskbarIconContainer>
  )
}

export default TaskbarIcon
