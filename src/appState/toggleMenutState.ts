import { create } from "zustand"

interface ToggleStateShape{
    isMenuOpen: boolean,
    onMenuToggle: () => void
}

 const useMenuState =  create<ToggleStateShape>((set) => ({
isMenuOpen: false,
onMenuToggle: () => set((stat) => ({isMenuOpen: !stat.isMenuOpen}))
   }))
   export default useMenuState