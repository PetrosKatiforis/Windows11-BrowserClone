import React from "react"
import { ToolbarContainer } from "styles/applications/Mail"

import {
  IoReorderThreeOutline,
  IoAddOutline,
  IoPersonOutline,
  IoFolderOutline,

  IoMailOutline,
  IoCalendarOutline,
  IoPeopleOutline,
  IoCheckmarkDoneOutline,
  IoSettingsOutline
} from "react-icons/io5"

const MailToolbar: React.FC = () => {
  return (
    <ToolbarContainer>
      <div>
        <IoReorderThreeOutline size={17} />
        <IoAddOutline size={17} />
        <IoPersonOutline size={17} />
        <IoFolderOutline size={17} />
      </div>

      <div>
        <IoMailOutline size={17} />
        <IoCalendarOutline size={17} />
        <IoPeopleOutline size={17} />
        <IoCheckmarkDoneOutline size={17} />
        <IoSettingsOutline size={17} />
      </div>
    </ToolbarContainer>
  )
}

export default MailToolbar
