import create from "zustand"
import applicationData from "data/applications"
import { Apps } from "types/WindowTypes"

interface WindowState {
  zIndex: number;
  focusWindow: (id: string) => void;

  applications: Apps
  toggleApp: (id: string, isActive: boolean) => void;
}

const useWindowStore = create<WindowState>((set, get) => ({
  zIndex: 0,
  applications: applicationData,

  focusWindow: (id: string) => {
    set(state => ({ zIndex: ++state.zIndex }))

    set(state => ({
      applications: {
        ...state.applications,
        [id]: {
          ...state.applications[id],
          zIndex: get().zIndex
        }
      }
    }))
  },

  toggleApp: (id: string, isActive: boolean) => {
    if (isActive) {
      get().focusWindow(id)
    }

    set(state => ({
      applications: {
        ...state.applications,
        [id]: {
          ...state.applications[id],
          isActive
        }
      }
    }))
  }
}))

export default useWindowStore 
