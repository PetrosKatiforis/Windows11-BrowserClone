import React from "react"

const triggerAnimation = (
  ref: React.RefObject<Element>,
  className: string,
  duration: number = 200
) => {
  
  ref.current!.classList.add(className)

  setTimeout(() => {
    ref.current!.classList.remove(className)
  }, duration)
}

export default triggerAnimation
