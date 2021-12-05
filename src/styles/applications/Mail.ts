import styled, { css } from "styled-components"

export const MailAppContainer = styled.div`
  display: flex;
  height: 100%;
`

export const MailControls = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: end;

  position: absolute;
  top: 0;
`

export const ToolbarContainer = styled.div`
  padding: 10px 0 0.5em 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    padding: 0.8em;
    gap: 10px;
  }
`

export const ToolbarTop = styled.div`
  padding: 0.5em 1em 1em 1em;

  p {
    font-size: 0.67rem;
    margin-bottom: 0.5em;
  }
`

export const SearchbarContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 0.5em;
  }
`

export const SearchbarInput = styled.input`
  flex: 1;
  min-width: 100px;
  background: none;
  border-radius: 5px;
  padding: 0.3em 0.8em;
  font-size: 0.75rem;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  margin: 0.7em 0 1em 0;
`

interface MailBlockProps {
  hasBeenRead: boolean;
}

export const MailBlockContainer = styled.div<MailBlockProps>`
  display: flex;
  cursor: pointer;
  gap: 1em;
  padding: 0.7em 1em;

  ${({ hasBeenRead }) => hasBeenRead && css`
    border-left: 3px solid ${({ theme }) => theme.primary};
  `}
`

export const MailListContainer = styled.div`
  max-width: 300px;
`

export const MailBlockDetails = styled.div`
  flex: 1;

  h2 {
    font-size: 0.7rem;
    font-weight: bold;
  }

  p {
    font-size: 0.67rem;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.primaryText};
`

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 0.67rem;
  }
`

export const MailPanelContainer = styled.div`
  margin: 35px 0.8em 40px 1.5em;
  flex: 1;

  h1 {
    font-size: 1rem;
    margin-bottom: 1em;
  }

  p {
    max-width: 500px;
    font-size: 0.67rem
  }
`

export const MailActionsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: end;
  margin-bottom: 2em;
`

export const MailAction = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
