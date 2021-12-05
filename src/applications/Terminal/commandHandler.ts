import { ICommandList, IStreamSetter } from "types/Apps"

class CommandHandler {
  setStream: IStreamSetter
  commands: ICommandList

  constructor(setStream: IStreamSetter) {
    this.setStream = setStream

    this.commands = {
      cls: this.clearScreen,
      echo: this.echo
    }
  }

  print = (message?: string) => {
    this.setStream(stream => [...stream, message || ""])
  }

  clearScreen = (args: string[]) => {
    this.setStream([])
  }

  echo = (args: string[]) => {
    this.print(args.join(' '))

    this.print()
  }

  handleCommand = (input: string) => {
    this.print(`C:\\Users\\PetrosK> ${input}`)
    
    const [command, ...args] = input.split(' ')
    let wasFound = false

    Object.keys(this.commands).forEach(commandName => {
      if (command === commandName) {
        this.commands[command](args)
        wasFound = true
        return
      }
    })

    if (wasFound) return

    this.print(
      `'${command}' is not recognized as an internal or external command,
      operable program or batch file.`
    )

    this.print()
  }
}

export default CommandHandler
