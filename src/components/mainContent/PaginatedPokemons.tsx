import { usePokemons } from "../../hooks/usePokemons"
import { useState } from "react"
import { PokemonCard } from "../PokemonCard"
import { Flex, Grid, Pagination } from "@mantine/core"
import { GridSkeleton } from "../GridSkeleton"
import { UseQueryResult } from "@tanstack/react-query"
import { Pokemon } from "../../interfaces/pokemon-full"
import { ErrorAlert } from "../shared/ErrorAlert"

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
      <Grid gutter={30}>
        {isShowingData &&
          pokemonListQuery.data?.results?.map((pokemon) => (
            <Grid.Col xs={4} sm={3} md={3} key={`${pokemon?.name} 2`}>
              <PokemonCard
                setSelectedPokemon={setSelectedPokemon}
                pokemonFromList={pokemon?.name}
              />
            </Grid.Col>
          ))}
        {pokemonListQuery?.isLoading && <GridSkeleton />}
        {pokemonListQuery?.isError && (
          <ErrorAlert message="An error occurred, please try again later." />
        )}
      </Grid>
      {/* Pagination component from Mantine */}
      {isShowingData && pokemonListQuery.data && (
        <Flex justify={"center"} pt={{ base: 50 }}>
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
