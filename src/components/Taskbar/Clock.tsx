import React, { useState, useEffect } from "react"
import { ClockContainer } from "styles/Taskbar"

const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date())

  const formatDate = (): string => {
    const format = date.toLocaleString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    })

    return format.toUpperCase()
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => { 
      clearInterval(timer)
    }
  })

  return (
    <ClockContainer>
      <p>{ formatDate() }</p>
      <p>{ date.toLocaleDateString("en-GB") }</p>
    </ClockContainer>
  )
}

export default Clock
