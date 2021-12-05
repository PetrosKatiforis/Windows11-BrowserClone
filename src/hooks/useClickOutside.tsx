import React, { useEffect } from "react"

const useClickOutside = (
  ref: React.RefObject<Element>, 
  callback: (event: MouseEvent) => void
) => {
  
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event!.target as Node)) {
      callback(event)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick)

    return () => { 
      document.removeEventListener("click", handleClick) 
    }
  })
}

export default useClickOutside
