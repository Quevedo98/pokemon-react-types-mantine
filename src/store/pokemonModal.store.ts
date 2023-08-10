import { devtools } from "zustand/middleware"
import { create } from "zustand"

type PokemonModalStore = {
  isActive: boolean
  setIsActive: (value: boolean) => void
}

export const usePokemonModalStore = create<PokemonModalStore>()(
  devtools(
    (set) => ({
      isActive: false,
      setIsActive: (value: boolean) => set(() => ({ isActive: value })),
    }),
    {
      name: "modal-store",
    }
  )
)
