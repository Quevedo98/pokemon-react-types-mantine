import { usePokemons } from "../../hooks/usePokemons"
import { useState } from "react"
import { PokemonCard } from "../PokemonCard"
import { Alert, Flex, Grid, Pagination } from "@mantine/core"
import { GridSkeleton } from "../GridSkeleton"
import { UseQueryResult } from "@tanstack/react-query"
import { Pokemon } from "../../interfaces/pokemon-full"

interface Props {
  searchQuery: UseQueryResult<Pokemon, unknown>
  setSelectedPokemon: React.Dispatch<React.SetStateAction<string>>
}

export const PaginatedPokemons = ({
  searchQuery,
  setSelectedPokemon,
}: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { pokemonListQuery } = usePokemons(currentPage)
  const isShowingData =
    !searchQuery.isError &&
    !searchQuery.data &&
    !searchQuery.isInitialLoading &&
    !pokemonListQuery.isError

  return (
    <>
      <Grid gutter={30} my={{ base: 50 }}>
        {isShowingData &&
          pokemonListQuery.data?.results?.map((pokemon) => (
            <Grid.Col xs={6} sm={4} md={3} key={`${pokemon?.name} 2`}>
              <PokemonCard
                setSelectedPokemon={setSelectedPokemon}
                pokemonFromList={pokemon?.name}
              />
            </Grid.Col>
          ))}
        {pokemonListQuery?.isLoading && <GridSkeleton />}
        {pokemonListQuery?.isError && (
          <Flex mx={"auto"} gap={30}>
            <Alert title="Oops!" color="red">
              An error occurred, please try again later.
            </Alert>
          </Flex>
        )}
      </Grid>
      {/* Pagination component from Mantine */}
      {isShowingData && pokemonListQuery.data && (
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
