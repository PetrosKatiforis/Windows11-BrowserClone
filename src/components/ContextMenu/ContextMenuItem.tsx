import React from "react"
import { ContextItemContainer } from "styles/ContextMenu"

interface Props {
  text: string;
  Icon: any;
}

const ContextMenuItem: React.FC<Props> = ({ text, Icon }) => {
  return (
    <ContextItemContainer>
      { Icon({ size: 15 }) }

      <p>{ text }</p>
    </ContextItemContainer>
  )
}

export default ContextMenuItem
