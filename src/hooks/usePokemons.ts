import { useQuery } from "@tanstack/react-query"
import { getAllPokemon } from "../services/Pokemon"
import { AllPokemonResponse } from "../interfaces/types"

export const usePokemons = (page: number) => {
  const pokemonListQuery = useQuery<AllPokemonResponse>(
    ["pokemonList", page],
    async () => await getAllPokemon(page),
    {
      refetchOnWindowFocus: false,
    }
  )

  return {
    pokemonListQuery,
  }
}
