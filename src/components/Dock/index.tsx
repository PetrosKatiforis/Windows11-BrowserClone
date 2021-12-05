import React, { useRef } from "react"
import { DockContainer, DockContentContainer } from "styles/Dock"

import DockFooter from "components/Dock/DockFooter"
import PinnedApps from "components/Dock/PinnedApps"
import RecommendedApps from "components/Dock/Recommended"

import useDock from "stores/DockStore"
import useClickOutside from "hooks/useClickOutside"

const Dock: React.FC = () => {
  const { setIsActive, isActive } = useDock()
  const dockRef = useRef(null)

  useClickOutside(dockRef, (event) => {
    if (isActive) {
      setIsActive(false)
    }
  })

  return (
    <DockContainer
      ref={dockRef}
      isActive={isActive}
    >
      <DockContentContainer>
        <PinnedApps />

        <RecommendedApps />
      </DockContentContainer>

      <DockFooter />
    </DockContainer>
  )
}

export default Dock
