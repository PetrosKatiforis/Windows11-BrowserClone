import React from "react"
import ReactDom from "react-dom"
import useApplications from "stores/WindowStore"

import Window from "components/Window"

const WindowManager: React.FC = () => {
  const apps = useApplications(state => state.applications)

  return ReactDom.createPortal(
    Object.keys(apps).map((id, index) => (
      apps[id].isActive &&

      <Window 
        key={index} 
        window={apps[id]} 
        id={id}
      />
    )),

    document.getElementById("desktop-root")!
  )
}

export default WindowManager
