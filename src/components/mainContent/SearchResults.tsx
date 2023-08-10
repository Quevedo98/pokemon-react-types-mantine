import { Alert, Flex, Grid } from "@mantine/core"
import { PokemonCard } from "../PokemonCard"
import { GridSkeleton } from "../GridSkeleton"
import { UseQueryResult } from "@tanstack/react-query"
import { Pokemon } from "../../interfaces/pokemon-full"

interface Props {
  searchQuery: UseQueryResult<Pokemon, unknown>
  setSelectedPokemon: React.Dispatch<React.SetStateAction<string>>
}

export const SearchResults = ({ searchQuery, setSelectedPokemon }: Props) => {
  return (
    <>
      <Grid gutter={30} my={{ base: 50 }}>
        {/* If there is a search, show the results of the search */}
        {searchQuery.data && (
          <Grid.Col xs={6} sm={4} md={3} key={`${searchQuery?.data?.name}`}>
            <PokemonCard
              setSelectedPokemon={setSelectedPokemon}
              pokemonFromList={searchQuery?.data?.name}
            />
          </Grid.Col>
        )}
        {searchQuery.isError && (
          <>
            <Flex mx={"auto"} gap={30}>
              <Alert title="Oops!" color="red">
                We haven't found any pokémon with that name.
              </Alert>
            </Flex>
          </>
        )}
        {searchQuery.isInitialLoading && (
          <>
            <GridSkeleton />
          </>
        )}
      </Grid>
    </>
  )
}
