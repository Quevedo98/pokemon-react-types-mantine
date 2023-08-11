import { useState } from "react"
import { PokemonModal } from "./PokemonModal"
import { usePokemonSearch } from "../hooks/usePokemonSearch"
import { useDebounce } from "../hooks/useDebounce"
import { PaginatedPokemons } from "./mainContent/PaginatedPokemons"
import { SearchResults } from "./mainContent/SearchResults"

interface Props {
  search: string
}

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
      {/* If there is no search, show the paginated list of pokemons */}
      <PaginatedPokemons
        searchQuery={pokemonSearchQuery}
        setSelectedPokemon={setSelectedPokemon}
      />
    </>
  )
}
