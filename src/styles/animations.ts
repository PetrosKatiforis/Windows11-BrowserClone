import { keyframes } from "styled-components"

export const openWindow = keyframes`
  from {
    transform: scale(85%);
    opacity: 0%;
  }

  to {
    transform: scale(100%);
    opacity: 100%;
  }
`

export const closeWindow = keyframes`
  from {
    transform: scale(100%);
    opacity: 100%;
  }

  to {
    transform: scale(85%);
    opacity: 0%;
  }
`

export const click = keyframes`
  0% {
    transform: scale(100%);
  }

  20% {
    transform: scale(50%);
  }

  100% {
    transform: scale(100%);
  }
`
