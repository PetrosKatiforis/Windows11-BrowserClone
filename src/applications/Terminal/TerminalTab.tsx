import React from "react"
import { VscChromeClose } from "react-icons/vsc"
import { TabImage, TabContainer, TabInfo } from "styles/applications/Terminal"

interface Props {
  title: string;
  icon: string;
}

const TerminalTab: React.FC<Props> = ({ title, icon }) => {
  return (
    <TabContainer>
      <TabInfo> 
        <TabImage src={icon} />
        <p>{ title }</p>
      </TabInfo>

      <VscChromeClose size={11} />
    </TabContainer>
  )
}

export default TerminalTab
