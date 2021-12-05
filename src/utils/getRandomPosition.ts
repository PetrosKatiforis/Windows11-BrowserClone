import { IApplication, IPosition } from "types/WindowTypes"

const getRandomPosition = (window: IApplication): IPosition => {
  return {
    x: Math.random() * (document.documentElement.clientWidth - window.width),
    y: Math.random() * (document.documentElement.clientHeight - window.height)
  }
}

export default getRandomPosition
