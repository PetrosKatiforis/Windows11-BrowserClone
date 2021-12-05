import React, { useState } from "react"
import { TerminalInputContainer, TerminalUserInput, Line } from "styles/applications/Terminal"

interface Props {
  handleCommand: (input: string) => void;
}

const TerminalInput: React.FC<Props> = ({ handleCommand }) => {
  const [input, setInput] = useState("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleCommand(input)
      setInput("")
    }
  }

  return (
    <TerminalInputContainer>
      <Line>C:\Users\PetrosK&gt;</Line>
      
      <TerminalUserInput
        value={input}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
      />
    </TerminalInputContainer>
  )
}

export default TerminalInput
