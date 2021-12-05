import React from "react"
import { ToolbarTop, MailListContainer } from "styles/applications/Mail"

import mailData from "data/mailData"
import MailBlock from "applications/Mail/MailBlock"
import Searchbar from "applications/Mail/Searchbar"

const MailList: React.FC = () => {
  return (
    <MailListContainer>
      <ToolbarTop>
        <p>Inbox - PetrosK</p>

        <Searchbar />
      </ToolbarTop>

      { mailData.map(mail => (
        <MailBlock mail={mail} />
      ))}
    </MailListContainer>
  )
}

export default MailList
