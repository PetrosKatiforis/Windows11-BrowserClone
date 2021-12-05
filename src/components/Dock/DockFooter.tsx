import React from "react"
import { IoPowerSharp } from "react-icons/io5"
import { ProfilePicture } from "styles/General"
import { FooterContainer, ProfileContainer } from "styles/Dock"

const DockFooter: React.FC = () => {
  return (
    <FooterContainer>
      <ProfileContainer>
        <ProfilePicture 
          src="assets/people/petrosk.jpeg"
          size={25}
        />


        <p>PetrosK</p>
      </ProfileContainer>

      <IoPowerSharp />
    </FooterContainer>
  )
}

export default DockFooter
