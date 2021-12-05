import React from "react"

import { IApplication } from "types/WindowTypes"
import useApplications from "stores/WindowStore"

interface Props {
  application: IApplication;
  onClick?: () => void;
  id: string;
}

const TaskbarIcon: React.FC<Props> = ({ application, id, onClick }) => {
  const toggleApp = useApplications(state => state.toggleApp)

  const handleClick = () => {
    if (application.Component) {
      toggleApp(id, true)

      onClick?.()
    }
  }

  return (
    <img
      src={`/assets/icons/${application.icon}`} 
      alt="Application Icon"
      onClick={handleClick}
    />
  )
}

export default TaskbarIcon
