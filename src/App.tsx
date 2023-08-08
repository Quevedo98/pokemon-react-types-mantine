import "./App.css"
import { Container, Title, Grid, TextInput, Button } from "@mantine/core"

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
          {/* <Grid></Grid> */}
        </main>
      </Container>
    </>
  )
}

export default App
