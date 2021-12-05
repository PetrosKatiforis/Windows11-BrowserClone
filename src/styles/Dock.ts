import styled from "styled-components"

interface DockProps {
  isActive: boolean;
}

export const DockContainer = styled.div<DockProps>`
  background: ${({ theme }) => theme.taskbar};
  border-radius: ${({ theme }) => theme.radius};
  z-index: 999;

  position: absolute;
  left: 50%;
  bottom: ${({ theme }) => theme.widgetMargin};

  transform: translate(-50%, ${({ isActive }) => isActive ? "0%" : "130%"});
  transition: transform 300ms;

`

export const DockContentContainer = styled.div`
  padding: 1.5em 3em;
`

export const FooterContainer = styled.div`
  padding: 1em 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: ${({ theme }) => theme.radius};

  background: ${({ theme }) => theme.darker};
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 0.67rem;
  }
`

interface ProfileImageProps {
  size: number;
}

export const ProfileImage = styled.img<ProfileImageProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  border-radius: 50%;
`

export const DockButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;

  border: none;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.window};
  border-radius: ${({ theme }) => theme.radius};

  font-size: 0.7rem;
  padding: 0.3em 0.6em;
`

export const DockHeading = styled.h2`
  font-size: 0.7rem;
  font-weight: bold;
`

export const PinnedContainer = styled.div`
  display: grid;
  grid-gap: 15px 10px;
  margin: 1em 0 2em 0;
  grid-template-columns: repeat(6, auto);

  img {
    width: 24px;
    height: 24px;
  }
`

export const DockIconContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  gap: 5px;

  p {
    font-size: 0.55rem;
    text-align: center;
  }
`

export const Activities = styled.div`
  padding: 1.2em 0 1em 0;

  display: grid;
  grid-gap: 20px 10px;
  grid-template-columns: repeat(2, auto);
`

export const ActivityContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    margin-right: 10px;
  }
`

export const ActivityInfo = styled.div`
  & > * {
    font-size: 0.6rem;
  }

  p {
    opacity: 80%;
  }
`
