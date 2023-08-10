import { useQuery } from "@tanstack/react-query"
import { getAPokemonByName } from "../services/pokemon"
import { Pokemon } from "../interfaces/pokemon-full"

export const usePokemonSearch = (name: string) => {
  const pokemonSearchQuery = useQuery<Pokemon>(
    ["pokemon", "search", name],
    async () => await getAPokemonByName(name),
    {
      refetchOnWindowFocus: false,
      enabled: name !== "",
      retry: 1,
    }
  )
  return {
    pokemonSearchQuery,
  }
}
