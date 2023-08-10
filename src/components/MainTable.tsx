import { useState } from "react"
import { PokemonModal } from "./PokemonModal"
import { usePokemonSearch } from "../hooks/usePokemonSearch"
import { useDebounce } from "../hooks/useDebounce"
import { PaginatedPokemons } from "./mainContent/PaginatedPokemons"
import { SearchResults } from "./mainContent/SearchResults"

interface Props {
  search: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MainTable = ({ search }: Props) => {
  const [selectedPokemon, setSelectedPokemon] = useState<string>("")
  const debaunceSearch = useDebounce(search, 500)
  const { pokemonSearchQuery } = usePokemonSearch(debaunceSearch)

  return (
    <>
      <PokemonModal pokemonName={selectedPokemon} />

      {/* If there is a search, show the results of the search */}
      <SearchResults
        searchQuery={pokemonSearchQuery}
        setSelectedPokemon={setSelectedPokemon}
      />

      <PaginatedPokemons
        searchQuery={pokemonSearchQuery}
        setSelectedPokemon={setSelectedPokemon}
      />
    </>
  )
}
