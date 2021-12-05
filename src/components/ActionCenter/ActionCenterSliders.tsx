import React from "react"
import { 
  IoVolumeHighOutline, 
  IoSunnyOutline 
} from "react-icons/io5"

import { SlidersContainer } from "styles/Slider"
import Slider from "components/Slider"

const ActionCenterSliders: React.FC = () => {
  return (
    <SlidersContainer>
      <Slider Icon={IoVolumeHighOutline} />
      <Slider Icon={IoSunnyOutline} />
    </SlidersContainer>
  )
}

export default ActionCenterSliders
