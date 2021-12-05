import create from "zustand"

interface ThemeState {
  isLight: boolean;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>(set => ({
  isLight: true,
  toggleTheme: () => {
    set(state => ({ isLight: !state.isLight }))
  }
}))

export default useThemeStore
