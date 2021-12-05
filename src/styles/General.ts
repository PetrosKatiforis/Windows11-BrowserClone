import styled from "styled-components"

interface ProfilePictureProps {
  size: number;
}

export const ProfilePicture = styled.img<ProfilePictureProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  border-radius: 50%;
`

export const ProfileContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const ProfileDetails = styled.div`
  & > * {
    font-size: 0.67rem;
  }
`
