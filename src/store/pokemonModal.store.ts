import { Pokemon } from "../interfaces/pokemon-full"
import { devtools } from "zustand/middleware"
import { create } from "zustand"

type PokemonModalStore = {
  selectedPokemon: Pokemon
  isActive: boolean
  setIsActive: (value: boolean) => void
  setSelectedPokemon: (value: Pokemon) => void
}

export const usePokemonModalStore = create<PokemonModalStore>()(
  devtools(
    (set) => ({
      selectedPokemon: {} as Pokemon,
      isActive: false,
      setIsActive: (value: boolean) => set(() => ({ isActive: value })),
      setSelectedPokemon: (value: Pokemon) =>
        set(() => ({ selectedPokemon: value })),
    }),
    {
      name: "modal-store",
    }
  )
)
