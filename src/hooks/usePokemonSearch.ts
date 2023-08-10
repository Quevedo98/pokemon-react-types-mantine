import { useQuery } from "@tanstack/react-query"
import { getAPokemonByName } from "../services/Pokemon"
import { Pokemon } from "../interfaces/pokemon-full"

export const usePokemonSearch = (name: string) => {
  const pokemonSearchQuery = useQuery<Pokemon>(
    ["pokemon", "search", name],
    async () => await getAPokemonByName(name),
    {
      refetchOnWindowFocus: false,
      enabled: name !== "",
    }
  )

  return {
    pokemonSearchQuery,
  }
}
