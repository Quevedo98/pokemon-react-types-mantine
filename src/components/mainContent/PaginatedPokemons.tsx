import { usePokemons } from "../../hooks/usePokemons"
import { useState } from "react"
import { PokemonCard } from "./PokemonCard"
import { Container, Flex, Grid, Pagination } from "@mantine/core"
import { GridSkeleton } from "../shared/GridSkeleton"
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
      <Container maw={1400}>
        <Grid gutter={42}>
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
            <ErrorAlert message="An error occurred, please try again later." />
          )}
        </Grid>
        {/* Pagination component from Mantine */}
        {isShowingData && pokemonListQuery.data && (
          <Flex justify={"center"} py={{ base: 50 }}>
            <Pagination
              value={currentPage}
              onChange={setCurrentPage}
              total={Math.ceil(pokemonListQuery?.data?.count / 20)}
              color="red"
            />
          </Flex>
        )}
      </Container>
    </>
  )
}
