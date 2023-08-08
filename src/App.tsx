import "./App.css"
import {
  Container,
  Title,
  Grid,
  TextInput,
  Button,
  Pagination,
  Flex,
} from "@mantine/core"
// import pokemonList from "./mockups/pokemonList.json"
import { PokemonCard } from "./components/PokemonCard"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getAllPokemon } from "./services/Pokemon"
import { AllPokemonResponse } from "./interfaces/types"

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
      <Container fluid>
        <header>
          <Title order={1} align="center">
            Pokemon App
          </Title>
        </header>

        <main>
          <Grid mt={{ base: 40 }}>
            <Grid.Col sm={7}>
              <TextInput
                label="Ingrese el nombre del pokemon"
                placeholder="bulbasaur ..."
              />
            </Grid.Col>
            <Grid.Col sm={5}>
              <Button variant="light">Search</Button>
            </Grid.Col>
          </Grid>
          <Grid gutter={30} my={{ base: 50 }}>
            {data?.results.map((pokemon) => (
              <Grid.Col xs={6} sm={4} md={3} key={pokemon.name}>
                <PokemonCard pokemonFromList={pokemon} />
              </Grid.Col>
            ))}
          </Grid>
          {data && (
            <Flex justify={"center"} mb={{ base: 10 }}>
              <Pagination
                value={currentPage}
                onChange={setCurrentPage}
                total={1280}
              />
            </Flex>
          )}
        </main>
      </Container>
    </>
  )
}

export default App
