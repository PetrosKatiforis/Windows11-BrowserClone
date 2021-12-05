import styled from "styled-components"
import { click } from "styles/animations"

export const TaskbarContainer = styled.div`
  background-color: ${({ theme }) => theme.taskbar};
  padding: 0.2em 0;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  transition: background-color 200ms;
`

export const TaskbarIconContainer = styled.div`
  height: 35px;
  width: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 200ms;
  padding: 1em 1em;
  border-radius: ${({ theme }) => theme.radius};

  &:hover {
    background-color: rgba(0, 0, 0, 0.10);
  }

  img {
    height: 22px;
    cursor: pointer;
  }

  &.clicked img {
    animation: ${click} 200ms ease-in;
  }
`

export const TaskbarActions = styled.div`
  margin: 0 5px;
  display: flex;
  gap: 7px;

  padding: 0.4em 0.8em;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

export const ToolsContainer = styled.div`
  position: absolute;
  bottom: 6px;
  right: 20px;

  display: flex;
  align-items: center;
`

export const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    font-size: 0.67rem;
    font-weight: bold;
  }
`
