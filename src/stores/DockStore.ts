import create from "zustand"

interface DockState {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

const useDockStore = create<DockState>(set => ({
  isActive: false,
  setIsActive: (value: boolean) => {
    set(state => ({ isActive: value }))
  }
}))

export default useDockStore 
