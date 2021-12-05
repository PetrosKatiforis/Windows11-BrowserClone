import React from "react"
import { MailAction } from "styles/applications/Mail"

interface Props {
  text: string;
  icon: any;
}

const MailOption: React.FC<Props> = ({ text, icon }) => {
  return (
    <MailAction>
      { icon({ size: 12 }) }
      <p> { text } </p>
    </MailAction>
  )
}

export default MailOption
