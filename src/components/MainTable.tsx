import { Flex, Grid, Pagination, Loader, Text, Alert } from "@mantine/core"
import { AllPokemonResponse } from "../interfaces/types"
import { PokemonCard } from "./PokemonCard"

interface Props {
  isLoading: boolean
  isError: boolean
  data: AllPokemonResponse | undefined
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const MainTable = ({
  isLoading,
  isError,
  data,
  currentPage,
  setCurrentPage,
}: Props) => {
  return (
    <>
      <Grid gutter={30} my={{ base: 50 }}>
        {data?.results.map((pokemon) => (
          <Grid.Col xs={6} sm={4} md={3} key={pokemon.name}>
            <PokemonCard pokemonFromList={pokemon} />
          </Grid.Col>
        ))}
        {isLoading && (
          <>
            <Flex mx={"auto"} gap={30}>
              <Loader />
              <Text>Loading...</Text>
            </Flex>
          </>
        )}
        {isError && (
          <>
            <Flex mx={"auto"} gap={30}>
              <Alert title="Oops!" color="red">
                An error occurred, please try again later.
              </Alert>
            </Flex>
          </>
        )}
      </Grid>
      //Pagination component from Mantine
      {data && (
        <Flex justify={"center"} mb={{ base: 50 }}>
          <Pagination
            value={currentPage}
            onChange={setCurrentPage}
            total={1280}
          />
        </Flex>
      )}
    </>
  )
}