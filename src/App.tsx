import "./App.css"
import { Container, Title } from "@mantine/core"
import { useState } from "react"
import { PokemonModal } from "./components/PokemonModal"
import { SearchForm } from "./components/SearchForm"
import { MainTable } from "./components/MainTable"
import { usePokemon } from "./hooks/usePokemons"

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [search, setSearch] = useState<string>("")

  const { pokemonListQuery } = usePokemon(currentPage)

  return (
    <>
      <PokemonModal />
      <Container mt={30} fluid>
        <header>
          <Title order={1} align="center">
            Pokémon App
          </Title>
          <SearchForm search={search} setSearch={setSearch} />
        </header>
        <main>
          <MainTable
            isLoading={pokemonListQuery.isLoading}
            isError={pokemonListQuery.isError}
            data={pokemonListQuery.data}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </main>
      </Container>
    </>
  )
}

export default App
