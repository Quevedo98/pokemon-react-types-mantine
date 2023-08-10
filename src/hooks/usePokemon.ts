import { useQuery } from "@tanstack/react-query"
import { getAPokemonByName } from "../services/Pokemon"
import { Pokemon } from "../interfaces/pokemon-full"

export const usePokemon = (name: string) => {
  const pokemonQuery = useQuery<Pokemon>(
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
