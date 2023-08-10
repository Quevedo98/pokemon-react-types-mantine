import { useQuery } from "@tanstack/react-query"
import { getAllPokemon } from "../services/pokemon"
import { AllPokemonResponse } from "../interfaces/types"

export const usePokemons = (page: number) => {
  const pokemonListQuery = useQuery<AllPokemonResponse>(
    ["pokemonList", page],
    async () => await getAllPokemon(page),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  )

  return {
    pokemonListQuery,
  }
}
