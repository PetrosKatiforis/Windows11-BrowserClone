import React from "react"
import useApplications from "stores/WindowStore" 
import { TaskbarContainer } from "styles/Taskbar"

import TaskbarIcon from "components/Taskbar/TaskbarIcon"
import ApplicationIcon from "components/ApplicationIcon"

import DockIcon from "components/Taskbar/DockIcon"
import TaskbarTools from "components/Taskbar/TaskbarTools"
import ThemeToggler from "components/Taskbar/ThemeToggler"

const Taskbar: React.FC = () => {
  const apps = useApplications(state => state.applications)

  return (
    <TaskbarContainer>
      <TaskbarTools />
      <DockIcon />

      {Object.keys(apps).map((id, index) => {
        const app = apps[id]

        return (app.isActive || app.isPinned) &&
          <TaskbarIcon
            key={index}
          >
            <ApplicationIcon
              application={apps[id]}
              key={index}
              id={id}
            />
          </TaskbarIcon>
      })}

      <ThemeToggler />
    </TaskbarContainer>
  )
}

export default Taskbar
