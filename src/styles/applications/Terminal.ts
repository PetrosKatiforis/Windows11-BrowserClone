import styled from "styled-components"

export const TerminalContainer = styled.div`
  background: #0c0c0c;
  padding: 0.5em 0.7em;
  height: 100vh;
`

export const Line = styled.p`
  font-size: 0.67rem;
  color: white;
  font-family: monospace;

  min-height: 1em;
`

export const TerminalInputContainer = styled.div`
  display: flex;
`

export const TerminalUserInput = styled.input`
  border: none;
  background: none;
  outline: none;
  color: white;

  font-family: monospace;
  font-size: 0.67rem;
  flex: 1;
  margin-left: 1ch;
`

export const TerminalTop = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  background: ${({ theme }) => theme.secondary};
  padding-left: 0.6em;
  height: 32px;
`

export const TabContainer = styled.div`
  gap: 13px;
  padding: 0.35em 0.8em;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => `${theme.radius} ${theme.radius} 0 0`};
  background: ${({ theme }) => theme.contrast};

  p {
    font-size: 0.67rem;
  }
`

export const TabImage = styled.img`
  width: 13px;
  margin-right: 8px;
`

export const TabInfo = styled.div`
  display: flex;
  align-items: center;
`

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`
