import React from "react"
import useApplications from "stores/WindowStore" 

import useDock from "stores/DockStore"
import DockTitle from "components/Dock/DockTitle"
import ApplicationIcon from "components/ApplicationIcon"
import { DockIconContainer, PinnedContainer } from "styles/Dock"

const PinnedApps: React.FC = () => {
  const apps = useApplications(state => state.applications)
  const setIsActive = useDock(state => state.setIsActive)

  const handleClick = () => {
    setIsActive(false)
  }

  return (
    <React.Fragment>
      <DockTitle
        title="Pinned"
        buttonText="All Apps"
      />

      <PinnedContainer>
        {Object.keys(apps).map((id, index) => (
          <DockIconContainer
            key={index}
          >
            <ApplicationIcon
              application={apps[id]}
              onClick={handleClick}
              key={index}
              id={id}
            />

            <p>{ apps[id].title }</p> 
          </DockIconContainer>
        ))}
      </PinnedContainer>
    </React.Fragment>
  )
}

export default PinnedApps
