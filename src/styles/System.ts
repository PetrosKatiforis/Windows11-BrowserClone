import styled from "styled-components"

export const Wallpaper = styled.div`
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  padding: 0.2em 2.5em;
  font-size: 0.7rem;
  border-radius: 5px;

  border: 2px solid ${({ theme }) => theme.outline};
  background: ${({ theme }) => theme.window};
  color: ${({ theme }) => theme.text};

  margin-top: 90px;
  cursor: pointer;
`
