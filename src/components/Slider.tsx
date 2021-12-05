import React, { useState } from "react"
import { SliderContainer, ModernSlider } from "styles/Slider"

interface Props {
  Icon: any;
}

const Slider: React.FC<Props> = ({ Icon }) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value))
  }

  return (
    <SliderContainer>
      { Icon({ size: 18 }) }

      <ModernSlider
        type="range"
        min={1}
        max={100}
        value={value}
        onChange={handleChange}
      />
    </SliderContainer>
  )
}

export default Slider
