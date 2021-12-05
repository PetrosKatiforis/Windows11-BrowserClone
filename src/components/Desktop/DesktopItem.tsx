import React from "react"
import useApplications from "stores/WindowStore"
import { DesktopItemContainer } from "styles/Desktop"
import { IShortcut } from "types/WindowTypes"

interface Props {
  data: IShortcut;
}

const DesktopItem: React.FC<Props> = ({ data }) => {
  const toggleApp = useApplications(state => state.toggleApp)

  const handleClick = () => {
    toggleApp(data.app_id, true)
  }

  return (
    <DesktopItemContainer 
      onClick={handleClick}
    >
      <img 
        src={`assets/icons/${data.icon}`} 
        alt={data.name} 
      />
      
      <p>{ data.name }</p>
    </DesktopItemContainer>
  )
}

export default DesktopItem
