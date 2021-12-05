import React, { useMemo } from "react"
import { Rnd } from "react-rnd"

import useApplications from "stores/WindowStore"
import getRandomPosition from "utils/getRandomPosition"
import { IApplication } from "types/WindowTypes"

interface Props {
  children: React.ReactNode;
  window: IApplication;
  id: string;
}

const WindowWrapper: React.FC<Props> = ({ children, window, id }) => {
  const focusWindow = useApplications(state => state.focusWindow)

  const startingPosition = useMemo(() => (
    getRandomPosition(window)
  ), [window])

  const handleFocus = () => {
    focusWindow(id)
  }

  return (
    <Rnd
      default={{
        ...startingPosition,
        width: window.width,
        height: window.height
      }}
      
      dragHandleClassName="window-bar"
      enableResizing={window.isResizable}
      
      minWidth={window.width}
      minHeight={200}
      
      style={{ zIndex: window.zIndex }}
      onMouseDown={handleFocus}
    >
      { children }

    </Rnd>
  )
}

export default WindowWrapper
