import React from "react"
import MailOption from "applications/Mail/MailOption"
import { MailActionsContainer } from "styles/applications/Mail"

import {
  IoSunnyOutline,
  IoReturnUpBack,
  IoReturnUpForwardSharp,
  IoEllipsisHorizontalOutline
} from "react-icons/io5"

const MailActions: React.FC = () => {
  return (
    <MailActionsContainer>
      <IoSunnyOutline size={15} />

      <MailOption
        text="Reply"
        icon={IoReturnUpBack}
      />

      <MailOption
        text="Reply all"
        icon={IoReturnUpBack}
      />

      <MailOption
        text="Forward"
        icon={IoReturnUpForwardSharp}
      />

      <IoEllipsisHorizontalOutline size={12} />
    </MailActionsContainer>
  )
}

export default MailActions
