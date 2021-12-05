import React, { useRef, useState, useEffect } from "react"
import { IPosition } from "types/WindowTypes"
import contextMenuData from "data/contextMenu"
import useClickOutside from "hooks/useClickOutside"

import { ContextMenuContainer } from "styles/ContextMenu"
import ContextMenuItem from "components/ContextMenu/ContextMenuItem"

const ContextMenu: React.FC = () => {
  const menuRef = useRef<HTMLDivElement | null>(null)
  
  const [isActive, setIsActive] = useState(false)
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 })

  useEffect(() => {
    document.addEventListener("contextmenu", event => {
      event.preventDefault()

      setPosition({ x: event.clientX, y: event.clientY })
      setIsActive(true)
    })
  }, [])

  useClickOutside(menuRef, () => {
    setIsActive(false)
  })

  return (
    <ContextMenuContainer 
      ref={menuRef}
      isActive={isActive}

      style={{
        top: position.y,
        left: position.x
      }}
    >
      {contextMenuData.map(item => (
        <ContextMenuItem
          key={item.text}
          text={item.text}
          Icon={item.icon}
        />
      ))}
    </ContextMenuContainer>
  )
}

export default ContextMenu
