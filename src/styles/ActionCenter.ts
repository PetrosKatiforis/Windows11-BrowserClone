import styled from "styled-components"

interface ActionCenterProps {
  isActive: boolean;
}

export const ActionCenterContainer = styled.div<ActionCenterProps>`
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.taskbar};
  padding: 1.5em;

  z-index: 999;
  position: absolute;
  bottom: ${({ theme }) => theme.widgetMargin};
  right: 14px;

  transform: translate(${({ isActive }) => isActive ? "0%" : "130%"});
  transition: transform 300ms;
`

export const ActionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 0.6rem;
    margin-top: 0.5em;
  }
`

export const ButtonContainer = styled.div`
  display: grid;
  grid-gap: 15px 15px;
  grid-template-columns: auto auto auto;
`

export const ActionButton = styled.button<ActionCenterProps>`
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ isActive, theme }) => isActive ? theme.primary : theme.window};
  cursor: pointer;
  border: none;
  width: 80px;
  height: 45px;
  
  svg {
    color: ${({ isActive, theme }) => isActive ? "white" : theme.text};
  }

  transition: background 200ms;
`

export const ActionFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BatteryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  p {
    font-size: 0.67rem;
  }
`

export const ActionFooterOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
