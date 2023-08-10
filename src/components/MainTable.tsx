import { Flex, Grid, Pagination, Alert } from "@mantine/core"
import { PokemonCard } from "./PokemonCard"
import { useState } from "react"
import { PokemonModal } from "./PokemonModal"
import { GridSkeleton } from "./GridSkeleton"
import { usePokemons } from "../hooks/usePokemons"
import { usePokemonSearch } from "../hooks/usePokemonSearch"
import { useDebounce } from "../hooks/useDebounce"

interface Props {
  search: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MainTable = ({ search }: Props) => {
  const [selectedPokemon, setSelectedPokemon] = useState<string>("")
  const debaunceSearch = useDebounce(search, 300)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { pokemonListQuery } = usePokemons(currentPage)
  const { pokemonSearchQuery } = usePokemonSearch(debaunceSearch)

  return (
    <>
      <PokemonModal pokemonName={selectedPokemon} />
      <Grid gutter={30} my={{ base: 50 }}>
        {/* If there is a search, show the results of the search */}
        {pokemonSearchQuery.data && (
          <Grid.Col
            xs={6}
            sm={4}
            md={3}
            key={`${pokemonSearchQuery?.data?.name}`}
          >
            <PokemonCard
              setSelectedPokemon={setSelectedPokemon}
              pokemonFromList={pokemonSearchQuery?.data?.name}
            />
          </Grid.Col>
        )}

        {pokemonSearchQuery.isError && (
          <>
            <Flex mx={"auto"} gap={30}>
              <Alert title="Oops!" color="red">
                We haven't found any pokémon with that name.
              </Alert>
            </Flex>
          </>
        )}
        {pokemonSearchQuery.isInitialLoading && (
          <>
            <GridSkeleton />
          </>
        )}

        {/* If there is no search, show the list of pokemons */}
        {!pokemonSearchQuery.isError &&
          !pokemonSearchQuery.data &&
          !pokemonSearchQuery.isInitialLoading &&
          pokemonListQuery.data?.results?.map((pokemon) => (
            <Grid.Col xs={6} sm={4} md={3} key={pokemon?.name}>
              <PokemonCard
                setSelectedPokemon={setSelectedPokemon}
                pokemonFromList={pokemon?.name}
              />
            </Grid.Col>
          ))}
        {pokemonListQuery?.isLoading && (
          <>
            <GridSkeleton />
          </>
        )}
        {pokemonListQuery?.isError && (
          <>
            <Flex mx={"auto"} gap={30}>
              <Alert title="Oops!" color="red">
                An error occurred, please try again later.
              </Alert>
            </Flex>
          </>
        )}
      </Grid>

      {/* Pagination component from Mantine */}
      {pokemonListQuery?.data && (
        <Flex justify={"center"} mb={{ base: 50 }}>
          <Pagination
            value={currentPage}
            onChange={setCurrentPage}
            total={Math.ceil(pokemonListQuery?.data?.count / 12)}
          />
        </Flex>
      )}
    </>
  )
}
