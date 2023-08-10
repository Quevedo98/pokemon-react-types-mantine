import { useQuery } from "@tanstack/react-query"
import { getAPokemonByName } from "../services/Pokemon"

export const usePokemon = (name: string) => {
  const pokemonQuery = useQuery(
    ["pokemon", name],
    async () => await getAPokemonByName(name),
    {
      refetchOnWindowFocus: false,
    }
  )

  return {
    pokemonQuery,
  }
}
