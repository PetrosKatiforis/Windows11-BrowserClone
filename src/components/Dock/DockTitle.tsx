import React from "react"
import { SpaceBetween } from "styles/Layout"
import { DockButton, DockHeading } from "styles/Dock"
import { IoChevronForwardOutline } from "react-icons/io5"

interface Props {
  title: string;
  buttonText: string;
}

const DockTitle: React.FC<Props> = ({ title, buttonText }) => {
  return (
    <SpaceBetween>
      <DockHeading>{ title }</DockHeading>

      <DockButton>
        { buttonText }

        <IoChevronForwardOutline />
      </DockButton>
    </SpaceBetween>
  )
}

export default DockTitle
