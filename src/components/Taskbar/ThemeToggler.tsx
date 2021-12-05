import React from "react"
import useThemeStore from "stores/ThemeStore"
import TaskbarIcon from "components/Taskbar/TaskbarIcon"

const ThemeToggler: React.FC = () => {
  const toggleTheme = useThemeStore(state => state.toggleTheme)

  return (
    <TaskbarIcon>
      <img
        src="assets/icons/weather.png"
        alt="Theme Toggler Icon"
        onClick={toggleTheme}
      />
    </TaskbarIcon>
  )
}

export default ThemeToggler
