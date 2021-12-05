import React from "react"
import { IMail } from "types/Apps"
import useMailStore from "stores/MailStore"
import { ProfilePicture } from "styles/General"

import {
  Title,
  MailBlockContainer,
  MailBlockDetails,
  DateContainer
} from "styles/applications/Mail"

interface Props {
  mail: IMail
}

const MailBlock: React.FC<Props> = ({ mail }) => {
  const setSelectedMail = useMailStore(state => state.setSelectedMail)

  const handleMailClick = () => {
    setSelectedMail(mail)
  }

  return (
    <MailBlockContainer
      hasBeenRead={mail.hasBeenRead}
      onClick={handleMailClick}
    >
      <ProfilePicture 
        src={mail.profilePicture} 
        size={25}
      />

      <MailBlockDetails>
        <h2>{ mail.username }</h2>
        <Title>{ mail.title.slice(0, 25) }</Title>

        <p> { mail.content[0].slice(0, 28) }...</p>
      </MailBlockDetails>

      <DateContainer>
        <p> { mail.date } </p>
      </DateContainer>
    </MailBlockContainer>
  )
}

export default MailBlock
