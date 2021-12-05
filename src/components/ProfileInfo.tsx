import React from "react"
import { 
  ProfilePicture, 
  ProfileContainer, 
  ProfileDetails 
} from "styles/General"

interface Props {
  image: string;
  size?: number;

  title: string;
  description: string;
}

const ProfileInfo: React.FC<Props> = ({ image, size, title, description }) => {
  return (
    <ProfileContainer>
      <ProfilePicture
        size={size || 30}
        src={image}
      />

      <ProfileDetails>
        <h2> { title } </h2>
        <p> { description } </p>
      </ProfileDetails>
    </ProfileContainer>
  )
}

export default ProfileInfo
