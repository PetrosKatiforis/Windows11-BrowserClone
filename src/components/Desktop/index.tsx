import React from "react"
import { DesktopContainer } from "styles/Desktop"
import DesktopItem from "components/Desktop/DesktopItem"

import { desktopData } from "data/desktop"

const Desktop: React.FC = () => {
  return (
    <DesktopContainer>
      { desktopData.map(desktopItem => (
        <DesktopItem 
          data={desktopItem}
          key={desktopItem.name}
        />
      ))}
    </DesktopContainer>
  )
}

export default Desktop
