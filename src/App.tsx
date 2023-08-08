import "./App.css"
import { Container, Title, Grid, TextInput, Button } from "@mantine/core"
import pokemonList from "./mockups/pokemonList.json"
import { PokemonCard } from "./components/PokemonCard"

function App() {
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
          <Grid gutter={30} mt={{ base: 50 }}>
            {pokemonList.results.map((pokemon) => (
              <Grid.Col xs={6} sm={4} md={3} key={pokemon.name}>
                <PokemonCard pokemonFromList={pokemon} />
              </Grid.Col>
            ))}
          </Grid>
        </main>
      </Container>
    </>
  )
}

export default App
