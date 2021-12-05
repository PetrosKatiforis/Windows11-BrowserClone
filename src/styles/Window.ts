import styled from "styled-components"
import { openWindow, closeWindow } from "styles/animations"

export const WindowContainer = styled.div`
  background: ${({ theme }) => theme.window};
  border-radius: ${({ theme }) => theme.radius};

  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  overflow: hidden;

  transition: background-color 200ms;
  animation: ${openWindow} 200ms ease-in-out;
  box-shadow: ${({ theme }) => theme.windowShadow};

  &.closing {
    animation: ${closeWindow} 200ms forwards ease-in-out;
  }
`

export const WindowContent = styled.div`
  height: 100%;
`

export const WindowBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WindowTitle = styled.h1`
  padding-left: 14px;
  font-size: 0.75rem;
  font-weight: normal;
`

export const ControlsContainer = styled.div`
  display: flex;
  height: 100%;
`

export const WindowButton = styled.div`
  background: none;
  border: none;
  cursor: pointer;

  width: ${({ theme }) => theme.controlWidth};
  min-height: 30px;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.16);
  }
`

export const ExitButton = styled(WindowButton)`
  border-radius: 0 ${({ theme }) => theme.radius} 0 0;

  &:hover {
    background-color: #ff3f3f;

    svg {
      color: white;
    }
  }
`
