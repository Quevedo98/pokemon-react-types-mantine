import { create } from "zustand"

type PokemonModalStore = {
  isActive: boolean
  setIsActive: (value: boolean) => void
}

export const usePokemonModalStore = create<PokemonModalStore>()((set) => ({
  isActive: false,
  setIsActive: (value: boolean) => set(() => ({ isActive: value })),
}))
