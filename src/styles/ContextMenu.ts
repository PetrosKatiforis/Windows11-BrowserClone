import styled, { css } from "styled-components"

interface ContextMenuProps {
  isActive: boolean;
}

export const ContextMenuContainer = styled.div<ContextMenuProps>`
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.windowShadow};
  background: ${({ theme }) => theme.contextMenu};
  width: 200px;

  position: absolute;

  ${({ isActive }) => !isActive && css`
    display: none;
  `}

  z-index: 9999;
`

export const ContextItemContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 0.5em 0.85em;
  gap: 10px;
  
  p {
    font-size: 0.7rem;
    font-weight: bold;
  }

  &:first-child {
    border-radius: ${({ theme }) => `${theme.radius} ${theme.radius} 0 0`};
    padding-top: 1em;
  }

  &:last-child {
    border-radius: ${({ theme }) => `0 0 ${theme.radius} ${theme.radius}`};
    padding-bottom: 1em;
  }

  &:hover {
    background: ${({ theme }) => theme.contextHover};
  }

  transition: background 200ms;
`
