import { create } from "zustand"; 

interface IPortalProps {
  isPortal: boolean
  setPortal: (isPortal: boolean) => void
}

export const usePortal = create<IPortalProps>() (set => ({
  isPortal: false,
  setPortal: (isPortal: boolean) => set(state => {
    return {...state, isPortal }
  }),
})) 