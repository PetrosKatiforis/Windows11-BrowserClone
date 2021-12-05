import styled from "styled-components"

export const DesktopContainer = styled.div`
  flex: 1;
  padding: 1em;
  gap: 10px;

  display: flex;
  align-items: start;
  flex-direction: column;
`

export const DesktopItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 90px;
  padding: 0.6em 1em;
  cursor: pointer;
  text-align: center;
  border-radius: ${({ theme }) => theme.radius};

  img {
    width: 35px;
  }

  p {
    font-size: 0.64rem;
    margin-top: 0.6em;
    color: ${({ theme }) => theme.text};
  }

  &:hover {
    background: ${({ theme }) => theme.select};
  }
`
