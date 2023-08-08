import "./App.css"
import { Container, Title } from "@mantine/core"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getAllPokemon } from "./services/Pokemon"
import { AllPokemonResponse } from "./interfaces/types"
import { PokemonModal } from "./components/PokemonModal"
import { SearchForm } from "./components/SearchForm"
import { MainTable } from "./components/MainTable"

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [search, setSearch] = useState<string>("")

  const { isLoading, isError, data } = useQuery<AllPokemonResponse>(
    ["paginatedPokemons", currentPage],
    async () => await getAllPokemon(currentPage),
    {
      keepPreviousData: true,
    }
  )

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
            isLoading={isLoading}
            isError={isError}
            data={data}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </main>
      </Container>
    </>
  )
}

export default App
