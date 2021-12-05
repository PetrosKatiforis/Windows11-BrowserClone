import React from "react"
import useThemeStore from "stores/ThemeStore"
import { Wallpaper } from "styles/System"

interface Props {
  children: React.ReactNode;
}

const SystemWrapper: React.FC<Props> = ({ children }) => {
  const isLight = useThemeStore(state => state.isLight)

  return (
    <Wallpaper 
      style={{ 
        backgroundImage: 
          `url(/assets/wallpapers/${isLight ? 'light' : 'dark'}.jpg)` 
      }}
    >
      { children }
    </Wallpaper>
  )
}

export default SystemWrapper
