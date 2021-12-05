import React from "react"
import { IMail } from "types/Apps"

import { MailPanelContainer } from "styles/applications/Mail"
import MailActions from "applications/Mail/MailActions"
import ProfileInfo from "components/ProfileInfo"

interface Props {
  mail: IMail;
}

const MailPanel: React.FC<Props> = ({ mail }) => {
  return (
    <MailPanelContainer>
      <MailActions />

      <h1>{ mail.title }</h1>

      <ProfileInfo
        image={mail.profilePicture}
        title={mail.username}
        description={mail.date}
      />

      <br />
      <p>To: <b>Petros Katiforis</b></p>

      <br />
      
      {mail.content.map(paragraph => (
        <React.Fragment>
          <p>{ paragraph }</p>
          <br />
        </React.Fragment>
      ))}

    </MailPanelContainer>
  )
}

export default MailPanel
