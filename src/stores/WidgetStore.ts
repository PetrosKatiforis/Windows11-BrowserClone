import create from "zustand"

interface WidgetState {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

const useWidgetStore = create<WidgetState>(set => ({
  isActive: false,
  setIsActive: (value: boolean) => {
    set(state => ({ isActive: value }))
  }
}))

export default useWidgetStore
